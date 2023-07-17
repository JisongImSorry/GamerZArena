import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const FlowWallet = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div>
      <div className="flex flex-col gap-3">
        <img
          className="w-full h-[545px]"
          src="https://www.datocms-assets.com/75149/1675801227-cryptowallet.jpg"
        />
        <div className="text-left relative">
          <div className="absolute w-32 h-16 right-0">
            <button
              className="bg-blue-500 text-white rounded-md px-4 py-2"
              onClick={() => {
                navigate(`/quiz/flowwallet`);
              }}
            >
              Take QUIZ
            </button>
          </div>
          <div>
            <div className="text-4xl font-bold py-5">FLOW Wallet</div>
            <div className="text-right py-3 text-gray-500">
              Contents are from :
              <a
                className="text-blue-500 underline"
                href="https://developers.flow.com/concepts/flow-token/available-wallets"
              >
                FLOW Dev
              </a>
            </div>
            <div>
              Flow Wallets are applications that give access to your Flow
              accounts, allow you to send and receive funds, and enable you to
              interact with Flow applications.
            </div>
          </div>

          <div>
            <div className="text-4xl font-bold py-5">
              What features do wallets provide?
            </div>
            <div>
              A variety of wallets are available. Most commonly, they allow you
              to … Create Flow accounts Read address, balance, and transaction
              history Transfer tokens from one account to another Display NFTs
              and discover NFT collections Authenticate with Flow applications
              Send transactions
            </div>
          </div>
          <div>
            <div className="text-4xl font-bold py-5">
              What types of wallets exist?
            </div>
            <div>
              A wallet is only a tool to manage your Flow account. You can
              manage your account from different wallets. A wallet is build for
              a specific platform: A hardware wallet is a physical device that
              lets you keep your crypto offline A web wallet allows you to
              manage your account through the web browser. It is either
              integrated into a website or into your web browser itself. Web
              browser wallets need to be installed separately (Chrome, Firefox,
              or Opera) A desktop wallet allows you to manage your account on
              your computer (macOS, Windows or Linux) A mobile wallet makes your
              account accessible on your mobile device (Android or iOS) Wallets
              come in different ownership models: Some wallets will require you
              to be the “Custodian” (aka “non-custodial”). With that, you have
              the responsibility to securely store your private key, which is
              used to control your Flow account. If you lose your key, there is
              no-one that can retrieve them for you. Other wallets are
              “custodial”. In that case, the secure account storage is handled
              by the wallet provider on behalf of the account owner. You will
              create an account with login credentials - very similar to
              traditional web applications. If you forget your account
              credentials, you can reach out to the customer support of the
              wallet provider to retrieve your account.
            </div>
          </div>
          <div>
            <div className="text-4xl font-bold py-5">
              What wallets can I choose from?
            </div>
            <div>
              There are different Flow wallets you can choose from. They all
              serve the same purpose, but each one takes a different approach,
              supports different features, and makes different tradeoffs.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowWallet;
