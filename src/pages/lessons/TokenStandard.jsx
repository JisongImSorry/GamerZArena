import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const TokenStandard = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div>
      <div className="flex flex-col gap-3">
        <img
          className="w-full h-[545px]"
          src="https://opengraph.githubassets.com/3be230164edc27254870150a0bd9083a28104c35402a1c5b0cd4d82dbe63ce8a/onflow/flow-ft"
        />
        <div className="text-left relative">
          <div className="absolute w-32 h-16 right-0">
            <button
              className="bg-blue-500 text-white rounded-md px-4 py-2"
              onClick={() => {
                navigate(`/quiz/tokenstandard`);
              }}
            >
              Take QUIZ
            </button>
          </div>
          <div>
            <div className="text-4xl font-bold py-5">Token Standards</div>
            <div className="text-right py-3 text-gray-500">
              Contents are from :
              <a
                className="text-blue-500 underline"
                href="https://developers.flow.com/concepts/token-standards"
              >
                FLOW Devs
              </a>
            </div>
            <div>
              This section is designed to provide you with comprehensive
              information and guidance on the various token standards available
              on the Flow blockchain. These standards establish a unified
              framework for developers, ensuring seamless interoperability and
              compatibility between tokens, applications, and wallets.
            </div>
          </div>

          <div>
            <div className="text-4xl font-bold py-5">Token Standards</div>
            <div>
              In this documentation section, we'll cover the following Flow
              token standards: Fungible Token Standard (FT): The FT is a
              specification for creating and managing fungible tokens, which are
              tokens with equal value and interchangeable. This standard is most
              commonly used for creating cryptocurrencies and other digital
              assets with uniform value. Non-Fungible Token Standard (NFT): The
              NFT is a specification for creating and managing non-fungible
              tokens, which are unique and indivisible digital assets. This
              standard is used for creating digital art, in-game items, and
              other one-of-a-kind digital assets.
            </div>
          </div>
          <div>
            <div className="text-4xl font-bold py-5">Core Features</div>
            <a
              className="ml-auto flex flex-row gap-3 items-center bg-white text-black px-8 py-1 font-bold rounded-[1000px] shadow-md bg-gray-300 bg-opacity-30 border-2 border-gray-400 mx-auto w-60"
              href={
                "https://github.com/onflow/flow-ft/blob/master/contracts/FungibleToken.cdc"
              }
              target="_blank"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                className="w-12 h-12"
              />
              Watch Code
            </a>
          </div>
          <div className="px-10">
            <div>
              <div className="text-4xl font-bold py-5">
                Getting metadata for the token smart contract via the fields of
                the contract:
              </div>
              <div>
                Balance interface pub var balance: UFix64 The only required
                field of the Vault type
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold py-5">
                Withdrawing a specific amount of tokens amount using the
                withdraw function of the owner's Vault
              </div>
              <div>
                provider interface pub fun withdraw(amount: UFix64):
                @FungibleToken.Vault Conditions the returned Vault's balance
                must equal the amount withdrawn The amount withdrawn must be
                less than or equal to the balance The resulting balance must
                equal the initial balance - amount Users can give other accounts
                a reference to their Vault cast as a Provider to allow them to
                withdraw and send tokens for them. A contract can define any
                custom logic to govern the amount of tokens that can be
                withdrawn at a time with a Provider. This can mimic the approve,
                transferFrom functionality of ERC20. withdraw event Indicates
                how much was withdrawn and from what account the Vault is stored
                in. If the Vault is not in account storage when the event is
                emitted, from will be nil. pub event TokensWithdrawn(amount:
                UFix64, from: Address?)
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold py-5">
                Depositing a specific amount of tokens from using the deposit
                function of the recipient's Vault
              </div>
              <div>
                Receiver interface pub fun deposit(from: @FungibleToken.Vault)
                Conditions from balance must be non-zero The resulting balance
                must be equal to the initial balance + the balance of from
                deposit event Indicates how much was deposited and to what
                account the Vault is stored in. If the Vault is not in account
                storage when the event is emitted, to will be nil. pub event
                TokensDeposited(amount: UFix64, to: Address?) Users could create
                custom Receivers to trigger special code when transfers to them
                happen, like forwarding the tokens to another account, splitting
                them up, and much more. It is important that if you are making
                your own implementation of the fungible token interface that you
                cast the input to deposit as the type of your token. let vault
                from as! @ExampleToken.Vault The interface specifies the
                argument as @FungibleToken.Vault, any resource that satisfies
                this can be sent to the deposit function. The interface checks
                that the concrete types match, but you'll still need to cast the
                Vault before storing it.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenStandard;
