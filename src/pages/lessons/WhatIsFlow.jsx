import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Web3 from "web3";

const WhatIsFlow = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  let abi = [
    {
      inputs: [],
      name: "fund",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "register",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "winner",
          type: "address",
        },
      ],
      name: "release",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
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
      name: "owner",
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
      name: "registered",
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
  ];
  return (
    <div>
      <div className="flex flex-col gap-3">
        <img
          className="w-full h-[545px]"
          src="https://www.sisajournal-e.com/news/photo/first/201803/img_182092_1.png"
        />
        <div className="text-left relative">
          <div className="absolute w-32 h-16 right-0 flex flex-row gap-4">
            <button
              className="bg-blue-500 text-white rounded-md px-4 py-2"
              onClick={() => {
                try {
                  const web3 = new Web3(window.ethereum);
                  let myContract = new web3.eth.Contract(
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
                  });
                } catch (e) {
                  console.log(e);
                }
              }}
            >
              Fund Contest
            </button>
            <button
              className="bg-blue-500 text-white rounded-md px-4 py-2"
              onClick={() => {
                try {
                  const web3 = new Web3(window.ethereum);
                  let myContract = new web3.eth.Contract(
                    abi,
                    "0x31043Bd9a71727329Bc32Ce912f59A2F14285910"
                  );

                  let response = myContract.methods.join().send({
                    from: window.web3.currentProvider.selectedAddress,

                    gas: 35000000,
                  });
                } catch (e) {
                  console.log(e);
                }
              }}
            >
              Join Contest
            </button>
          </div>
          <div>
            <div className="text-4xl font-bold py-5">PUBG Arena</div>
            <div className="text-right py-3 text-gray-500 flex flex-row gap-5">
              Contest Main Soponsor
              <a
                className="text-blue-500 underline"
                href="https://kriptomat.io/cryptocurrencies/flow/what-is-flow/"
              >
                PUBG
              </a>
            </div>
            <div>
              <div className="text-2xl font-bold py-5">Contest Description</div>
              <div>Max Participants: 100</div>
              <div>Map : Mirama</div>
              <div>Contest rules:</div>
              <div className="h-12" />
              <div>
                Player Age. In order to be eligible to participate in a
                Tournament as a player, an individual must have reached 16 years
                of age or older (i.e., the player has lived for at least 16
                calendar years) as of the Tournament start date. If a player is
                16 years of age or older but under the age of majority in his or
                her country of residence before the start of the Tournament, he
                or she may still compete in the Tournament if (1) he or she
                meets the other eligibility criteria in these General Rules and
                the applicable CompetitionSpecific Rules, and (2) a parent or
                legal guardian accepts these General Rules and the applicable
                Competition-Specific Rules on behalf of the player, and consents
                to the player’s participation in the Tournament using a parental
                consent form provided by the Tournament Organizer.
              </div>
              <div className="h-12" />
              <div>
                Multiple Teams. Players may not play for or contract with more
                than one Team at a time. If a player enters such an arrangement
                or contract, Tournament Officials reserve the right to bar the
                player from playing any future matches until the situation has
                been resolved and the player is in compliance with the
                requirements in this Section
              </div>
              <div className="h-24" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsFlow;
