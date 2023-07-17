import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Cadence = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div>
      <div className="flex flex-col gap-3">
        <img
          className="w-full h-[545px]"
          src="https://raw.githubusercontent.com/onflow/cadence/master/cadence_furever.png"
        />
        <div className="text-left relative">
          <div className="absolute w-32 h-16 right-0">
            <button
              className="bg-blue-500 text-white rounded-md px-4 py-2"
              onClick={() => {
                navigate(`/quiz/cadence`);
              }}
            >
              Take QUIZ
            </button>
          </div>
          <div>
            <div className="text-4xl font-bold py-5">
              Introduction to Cadence
            </div>
            <div className="text-right py-3 text-gray-500">
              Contents are from :
              <a
                className="text-blue-500 underline"
                href="https://developers.flow.com/cadence/intro"
              >
                FLOW Devs
              </a>
            </div>
            <div>
              In a blockchain environment like Flow, programs that are stored
              on-chain in accounts are commonly referred to as smart contracts.
              A smart contract is a program that verifies and executes the
              performance of a contract without the need for a trusted third
              party. Programs that run on blockchains are commonly referred to
              as smart contracts because they mediate important functionality
              (such as currency) without having to rely on a central authority
              (like a bank).
            </div>
          </div>

          <div>
            <div className="text-4xl font-bold py-5">
              A New Programming Language
            </div>
            <div>
              Cadence is a resource-oriented programming language that
              introduces new features to smart contract programming that help
              developers ensure that their code is safe, secure, clear, and
              approachable. Some of these features are: Type safety and a strong
              static type system. Resource-oriented programming, a new paradigm
              that pairs linear types with object capabilities to create a
              secure and declarative model for digital ownership by ensuring
              that resources (which are used to represent scarce digital assets)
              can only exist in one location at a time, cannot be copied, and
              cannot be accidentally lost or deleted. Built-in pre-conditions
              and post-conditions for functions and transactions. The
              utilization of capability-based security, which enforces that
              access to objects is restricted to only the owner of the object
              and those who have a valid reference to it. This is Cadence's main
              form of access control. Cadence’s syntax is inspired by popular
              modern general-purpose programming languages like Swift, Kotlin,
              and Rust. Its use of resource types maps well to that of Move, the
              programming language being developed by the Diem team.
            </div>
          </div>
          <div>
            <div className="text-4xl font-bold py-5">
              Cadence's Programming Language Pillars
            </div>
          </div>
          <div className="px-10">
            <div>
              <div className="text-4xl font-bold py-5">Safety and Security</div>
              <div>
                Safety is the underlying reliability of any smart contract
                (i.e., it’s bug-free and performs its function). Security is the
                prevention of attacks on the network or smart contracts (i.e.,
                unauthorized actions by malicious actors). Safety and security
                are critical in smart contracts because of the immutable nature
                of blockchains, and because they often deal with high-value
                assets. While auditing and reviewing code will be a crucial part
                of smart contract development, Cadence maximizes efficiency
                while maintaining the highest levels of safety and security at
                its foundation. It accomplishes this via a strong static type
                system, design by contract, and ownership primitives inspired by
                linear types (which are useful when dealing with assets).
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold py-5">Clarity</div>
              <div>
                Code needs to be easy to read, and its meaning should be as
                unambiguous as possible. It should also be suited for
                verification so that tooling can help with ensuring safety and
                security guarantees. These guarantees can be achieved by making
                the code declarative and allowing the developer to express their
                intentions directly. We make those intentions explicit by
                design, which, along with readability, make auditing and
                reviewing more efficient, at a small cost to verbosity.
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold py-5">Approachability</div>
              <div>
                Writing code and creating programs should be as approachable as
                possible. Incorporating features from languages like Swift and
                Rust, developers should find Cadence’s syntax and semantics
                familiar. Practical tooling, documentation, and examples enable
                developers to start creating programs quickly and effectively.
                Developer Experience: The developer should be supported
                throughout the entire development lifecycle, from initial
                application logic to on-chain bugfixes.
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold py-5">
                Developer Experience
              </div>
              <div>
                The developer should be supported throughout the entire
                development lifecycle, from initial application logic to
                on-chain bugfixes.
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold py-5">
                Intuiting Ownership with Resources
              </div>
              <div>
                Resources are a composite data type, similar to a struct, that
                expresses direct ownership of assets. Cadence’s strong static
                type system ensures that resources can only exist in one
                location at a time and cannot be copied or lost because of a
                coding mistake. Most smart contract languages currently use a
                ledger-style approach to record ownership, where an asset like a
                fungible token is stored in the smart contract as an entry in a
                central ledger. Cadence’s resources directly tie an asset’s
                ownership to the account that owns it by saving the resource in
                the account’s storage. As a result, ownership isn’t centralized
                in a smart contract’s storage. Each account owns its assets, and
                the assets can be transferred freely between accounts without
                the need for arbitration by a central smart contract.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cadence;
