import { useEffect, useState, useContext } from "react";
import { useFlow } from "../hooks/useFlow";
import { FlowContext } from "../context/FlowContext";
import { useNavigate } from "react-router-dom";
import Web3 from "web3";

const Header = () => {
  const { walletLogin, mintNFT, getNFTs, user } = useContext(FlowContext);
  const [isLogin, setIsLogin] = useState(false);
  const [address, setAddress] = useState("");
  let injectedProvider = false;

  /* let myContract = new web3.eth.Contract(
                abi,
                "0x31043Bd9a71727329Bc32Ce912f59A2F14285910"
              );
              let amount = 1;
              amount = web3.utils.toWei(amount.toString(), "ether");
              console.log(window.web3.currentProvider.selectedAddress);
              let response = myContract.methods.fund().send({
                from: window.web3.currentProvider.selectedAddress,
                value: amount,
                gas: 35000000,
              });*/

  let abi = [
    {
      inputs: [],
      name: "beneficiary",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "fund",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "funder",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "funders",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getBalance",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getFunders",
      outputs: [
        {
          internalType: "address[]",
          name: "",
          type: "address[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "release",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="w-full h-32 ">
      <div className="h-16 w-[64rem] mx-auto flex flex-row gap-5 items-center">
        <div
          className="mr-auto my-auto text-3xl font-bold cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          GamerZ ARENA
        </div>
        <div
          className="text-2xl mr-10 underline cursor-pointer"
          onClick={() => {
            navigate("/featured");
          }}
        >
          Featured Games
        </div>

        {address === "" && (
          <button
            className="ml-auto flex flex-row gap-3 items-center bg-white text-black px-8 py-1 font-bold rounded-[1000px] shadow-md bg-green-300 bg-opacity-30 border-2 border-green-400"
            onClick={() => {
              const web3 = new Web3(window.ethereum);

              const accounts = web3.eth.requestAccounts().then((res) => {
                if (res.length > 0) {
                  console.log(res[0]);
                  setAddress(res[0]);
                }
              });
            }}
          >
            <img
              src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/512/NEO-icon.png"
              className="h-8 w-8"
            />
            Connect
          </button>
        )}
        {address !== "" && (
          <>
            <button
              className="ml-auto truncate w-48 flex flex-row gap-3 items-center bg-white text-black px-8 py-1 font-bold rounded-[1000px] shadow-md bg-green-300 bg-opacity-30 border-2 border-green-400 hover:bg-green-400 hover:bg-opacity-30"
              onClick={() => {
                navigate("/mypage");
              }}
            >
              <img
                src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/512/NEO-icon.png"
                className="h-8 w-8"
              />
              {address}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
