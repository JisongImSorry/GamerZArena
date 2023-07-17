import { useState, useEffect } from "react";
import * as fcl from "@onflow/fcl";

export const useFlow = () => {
  const flowNetwork = "testnet";
  const accessApi = "https://rest-testnet.onflow.org";
  const walletDiscovery = "https://fcl-discovery.onflow.org/testnet/authn";
  const walletDiscoveryApi =
    "https://fcl-discovery.onflow.org/api/testnet/authn";
  const walletDiscoveryInclude = [
    "0x82ec283f88a62e65", // Dapper Wallet
  ];
  const addresses = {
    FlowToken: "0x7e60df042a9c0868",
    NonFungibleToken: "0xe1e9a92dcadb1d1e",
    MetadataViews: "0xe1e9a92dcadb1d1e",
    FungibleToken: "0xe1e9a92dcadb1d1e",
  };
  const iconUrl = window.location.origin + "/images/wallet-icon.png";
  const appTitle = "Cadence Learner DAO";

  useEffect(() => {
    fcl.config({
      "app.detail.title": appTitle,
      //"app.detail.icon": iconUrl,
      "accessNode.api": accessApi, // connect to Flow
      //"flow.network": flowNetwork,
      "discovery.wallet": walletDiscovery, // use wallets on public discovery
      //"discovery.authn.endpoint": walletDiscoveryApi, // public discovery api endpoint
      //"discovery.authn.include": walletDiscoveryInclude, // opt-in wallets
      /*"0xFungibleToken": addresses.FungibleToken, // fcl replaces alias with network address
      "0xFlowToken": addresses.FlowToken,
      "0xNonFungibleToken": addresses.NonFungibleToken,
      "0xMetadataViews": addresses.MetadataViews,*/
    });
  }, []);

  const [user, setUser] = useState(null);
  const [nfts, setNfts] = useState([]);

  const walletLogin = async () => {
    fcl.authenticate().then(() => {
      fcl.currentUser.snapshot().then((user) => {
        if (user && user.addr) setUser(user);
      });
    });
  };

  const mintNFT = async (type, url) => {
    console.log(type, url);
    try {
      const res = await fcl.mutate({
        cadence: `
            import FlowTutorialMint from 0xe1e9a92dcadb1d1e
            import NonFungibleToken from 0xe1e9a92dcadb1d1e
            import MetadataViews from 0xe1e9a92dcadb1d1e

            transaction(type: String, url: String){
                let recipientCollection: &FlowTutorialMint.Collection{NonFungibleToken.CollectionPublic}

                prepare(signer: AuthAccount){
                    
                if signer.borrow<&FlowTutorialMint.Collection>(from: FlowTutorialMint.CollectionStoragePath) == nil {
                signer.save(<- FlowTutorialMint.createEmptyCollection(), to: FlowTutorialMint.CollectionStoragePath)
                signer.link<&FlowTutorialMint.Collection{NonFungibleToken.CollectionPublic, MetadataViews.ResolverCollection}>(FlowTutorialMint.CollectionPublicPath, target: FlowTutorialMint.CollectionStoragePath)
                }

                self.recipientCollection = signer.getCapability(FlowTutorialMint.CollectionPublicPath)
                                            .borrow<&FlowTutorialMint.Collection{NonFungibleToken.CollectionPublic}>()!
                }
                execute{
                    FlowTutorialMint.mintNFT(recipient: self.recipientCollection, type: type, url: url)
                }
            }
            `,
        args: (arg, t) => [arg(type, t.String), arg(url, t.String)],
        limit: 9999,
      });
      fcl.tx(res).subscribe((res) => {
        if (res.status === 4 && res.errorMessage === "") {
          window.alert("NFT Minted!");
          window.location.reload(false);
        }
      });

      console.log("txid", res);
    } catch (error) {
      console.log("err", error);
    }
  };

  async function getNFTs(addr) {
    try {
      const result = await fcl.query({
        cadence: `
                import FlowTutorialMint from 0xe1e9a92dcadb1d1e
                import MetadataViews from 0xe1e9a92dcadb1d1e
                
                pub fun main(address: Address): [FlowTutorialMint.FlowTutorialMintData] {
                  let collection = getAccount(address).getCapability(FlowTutorialMint.CollectionPublicPath)
                                    .borrow<&{MetadataViews.ResolverCollection}>()
                                    ?? panic("Could not borrow a reference to the nft collection")
                
                  let ids = collection.getIDs()
                
                  let answer: [FlowTutorialMint.FlowTutorialMintData] = []
                
                  for id in ids {
                    
                    let nft = collection.borrowViewResolver(id: id)
                    let view = nft.resolveView(Type<FlowTutorialMint.FlowTutorialMintData>())!
                
                    let display = view as! FlowTutorialMint.FlowTutorialMintData
                    answer.append(display)
                  }
                    
                  return answer
                }
                `,
        args: (arg, t) => [arg(addr, t.Address)],
      });
      console.log(result);
      setNfts(result);
    } catch (error) {
      console.log("err", error);
    }
  }

  return { user, walletLogin, mintNFT, getNFTs, nfts };
};
