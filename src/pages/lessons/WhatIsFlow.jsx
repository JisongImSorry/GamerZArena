import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const WhatIsFlow = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div>
      <div className="flex flex-col gap-3">
        <img
          className="w-full h-[545px]"
          src="https://assets.website-files.com/5bf4437b68f8b29e67b7ebdc/605235166c5c86fb55388373_flow-blockchain-quantstamp.png"
        />
        <div className="text-left relative">
          <div className="absolute w-32 h-16 right-0">
            <button
              className="bg-blue-500 text-white rounded-md px-4 py-2"
              onClick={() => {
                navigate(`/quiz/whatisflow`);
              }}
            >
              Take QUIZ
            </button>
          </div>
          <div>
            <div className="text-4xl font-bold py-5">What is FLOW?</div>
            <div className="text-right py-3 text-gray-500">
              Contents are from :
              <a
                className="text-blue-500 underline"
                href="https://kriptomat.io/cryptocurrencies/flow/what-is-flow/"
              >
                KRIPTOMAT
              </a>
            </div>
            <div>
              Flow is a blockchain-based decentralized ecosystem and platform
              with scaling solutions for interactive experiences, decentralized
              application projects, and blockchain-based games. The Flow network
              focuses on providing a scalable environment and architecture for
              fast transactions without congestion, to create an environment for
              non-fungible tokens, dApps, and games. NFTs can be created and
              traded as well as other cryptocurrencies, while the crucial
              difference is that every NFT is unique and has a different price,
              which is why NFTs are known as collectibles. Flow has its own
              project on the network, NBA Top Shot, and as the NFT market is
              booming, Flow could experience rising popularity as well. Flow
              offers upgradable smart contracts that can be patched to fix any
              bugs, a finality that is achieved in seconds, and an easy way to
              build dApps and create NFTs with Flow’s easy-to-learn programming
              language, Cadence. Flow resolves problems with scalability seen on
              the Ethereum platform without the use of sharding, instead of
              employing the efficient Proof of Stake protocol. That is how Flow
              enables the smooth running of operations and minimizes congestion
              on the network for dApps and blockchain games such as
              CryptoKitties.
            </div>
          </div>

          <div>
            <div className="text-4xl font-bold py-5">How Does Flow Work?</div>
            <div>
              Flow uses the Proof of Stake protocol to achieve scalability
              without the use of sharding, which is a common scaling technique
              for increasing speed and network capacity. Flow distributes the
              work on the network across the nodes that support the system, with
              different nodes assigned different tasks based on their technical
              capabilities. An increased blockchain throughput is achieved by
              separating non-deterministic processes (e.g. forming transactions
              into a block) from deterministic ones (e.g. executing that block
              of transactions). In order to reduce redundant effort, Flow uses a
              multi-role, multi-node architecture. To make the scaling of the
              entire network possible in an efficient and cost-effective way,
              Flow breaks down the validation process into four roles,
              distributing different tasks to different types of nodes. To
              increase efficiency, the nodes split tasks and participate in the
              validation of every transaction on the network. The four types of
              nodes are Collection Nodes, Consensus Nodes, Execution Nodes, and
              Verification Nodes.
            </div>
          </div>
          <div>
            <div className="text-4xl font-bold py-5">
              What Makes Flow Unique?
            </div>
            <div>
              Flow network makes for a unique project that offers a highly
              scalable environment for developers interested in creating and
              using NFTs, which have experienced a rise in popularity in recent
              times. Flow’s architecture allows developers to build applications
              and cryptocurrency games on the platform without issues such as
              congestion. Flow distributes the data and work on the network
              across different nodes, separated by their roles, so that the
              distribution enables scaling and an efficient ecosystem for
              blockchain developers. Flow might be a unique opportunity for
              investors who believe in the potential of NFTs and blockchain
              applications. Thanks to the efficient architecture, Flow enables
              fast finality for transactions and on-chain operations.
            </div>
          </div>
          <div>
            <div className="text-4xl font-bold py-5">
              How Many Flow Coins Are in Circulation?
            </div>
            <div>
              There is currently a circulating supply of 1,036,200,000 FLOW, out
              of a total supply of 1,442,567,561.40385 FLOW FLOW. 1.25 billion
              FLOW were initially created, but the supply has since increased as
              Flow uses inflation to pay validator rewards to stakers. However,
              Flow has placed a cap on monetary inflation to avoid diluting the
              value of FLOW tokens. New tokens are used to make up the
              difference between transaction fees and the guaranteed payment for
              validators, meaning the inflation rate will decrease towards 0% as
              transaction fees increase. The number of FLOW tokens in
              circulation multiplied by the current price of FLOW in the market
              is equal to the market cap of Flow. The market cap ranks the
              cryptocurrency in comparison with its peers and determines its
              market share.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsFlow;
