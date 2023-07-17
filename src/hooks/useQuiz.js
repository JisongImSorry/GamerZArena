import { useEffect, useState } from "react";

export const useQuiz = (quiz) => {
  const [questions, setQuestions] = useState([
    {
      questionText: "",
      answerOptions: [],
    },
  ]);
  const [nftTitle, setNftTitle] = useState("");
  const [nftImage, setNftImage] = useState("");
  useEffect(() => {
    if (quiz === "flowwallet") {
      setNftTitle("Expert of FLOW WALLET");
      setNftImage(
        "https://media.istockphoto.com/id/1439874970/photo/3d-badge-with-check-mark.webp?b=1&s=170667a&w=0&k=20&c=e2Y7-ah8WC6yMI4grZQLxJSOdmTeFxvLQXtVfneBxIg="
      );
      setQuestions([
        {
          questionText: "What is a FLOW wallet?",
          answerOptions: [
            {
              answerText: "Application that gives access to FLOW Accounts",
              isCorrect: true,
            },
            { answerText: "Keep ETH Assets securely", isCorrect: false },
            { answerText: "Physical wallet to keep Crypto", isCorrect: false },
          ],
        },
        {
          questionText: "Is wallet the only tool to manage FLOW Account?",
          answerOptions: [
            { answerText: "YES", isCorrect: true },
            { answerText: "NO", isCorrect: false },
            { answerText: "Consensus Node", isCorrect: false },
          ],
        },
        {
          questionText: "How many wallets are there in FLOW?",
          answerOptions: [
            { answerText: "1", isCorrect: false },
            { answerText: "2", isCorrect: false },
            { answerText: "Several, and even more to come!", isCorrect: true },
          ],
        },
        {
          questionText: "What feature does FLOW Wallet does NOT provide?",
          answerOptions: [
            { answerText: "View Crypto assets ON FLOW", isCorrect: true },
            { answerText: "View my NFTs", isCorrect: false },
            { answerText: "Earn Dollars", isCorrect: true },
            { answerText: "Transfer my NFTs", isCorrect: false },
          ],
        },
        {
          questionText: "Which is NOT Flow Wallet?",
          answerOptions: [
            { answerText: "Dapper wallet", isCorrect: true },
            { answerText: "Metamask", isCorrect: true },
            { answerText: "Lilico", isCorrect: false },
          ],
        },
      ]);
    } else if (quiz === "whatisflow") {
      setNftTitle("Now I Know FLOW!");
      setNftImage(
        "https://media.istockphoto.com/id/1439874970/photo/3d-badge-with-check-mark.webp?b=1&s=170667a&w=0&k=20&c=e2Y7-ah8WC6yMI4grZQLxJSOdmTeFxvLQXtVfneBxIg="
      );
      setQuestions([
        {
          questionText: "Which protocol does FLOW use?",
          answerOptions: [
            { answerText: "POS (Proof Of Stake)", isCorrect: true },
            { answerText: "POW (Proof Of Work)", isCorrect: false },
            { answerText: "POL (Proof Of Learn)", isCorrect: false },
          ],
        },
        {
          questionText: "Which is NOT FLOW Node Type?",
          answerOptions: [
            { answerText: "Verification Node", isCorrect: false },
            { answerText: "Execution Node", isCorrect: false },
            { answerText: "Consensus Node", isCorrect: false },
            { answerText: "Staking Node", isCorrect: true },
          ],
        },
        {
          questionText: "What is the Flow Coin Total Circulation?",
          answerOptions: [
            { answerText: "1,036,200,000", isCorrect: false },
            { answerText: "2,036,200,000", isCorrect: false },
            { answerText: "It is increasing", isCorrect: true },
          ],
        },
        {
          questionText: "Is it possible to build NFT on FLOW??",
          answerOptions: [
            { answerText: "YES", isCorrect: true },
            { answerText: "NO", isCorrect: false },
          ],
        },
        {
          questionText: "Which is NOT Flow Project?",
          answerOptions: [
            { answerText: "NBA Topshot", isCorrect: true },
            { answerText: "Bored Ape Yacht Club", isCorrect: true },
            { answerText: "Flunks", isCorrect: false },
          ],
        },
        // Add more questions as required
      ]);
    } else if (quiz === "tokenstandard") {
      setNftTitle("Token Standards is Great!");
      setNftImage(
        "https://media.istockphoto.com/id/1439874970/photo/3d-badge-with-check-mark.webp?b=1&s=170667a&w=0&k=20&c=e2Y7-ah8WC6yMI4grZQLxJSOdmTeFxvLQXtVfneBxIg="
      );
      setQuestions([
        {
          questionText:
            "What programming environment is said to be perfect for currencies ?",
          answerOptions: [
            { answerText: "JavaScript", isCorrect: false },
            { answerText: "Resource-oriented programming", isCorrect: true },
            { answerText: "Functional programming", isCorrect: false },
          ],
        },
        {
          questionText:
            "What type is used to represent token balance information in the fungible token standard?",
          answerOptions: [
            { answerText: "String", isCorrect: false },
            {
              answerText: "Signed 64-bit fixed point numbers",
              isCorrect: false,
            },
            {
              answerText: "Unsigned 64-bit fixed point numbers (UFix64)",
              isCorrect: true,
            },
            { answerText: "Float", isCorrect: false },
          ],
        },
        {
          questionText:
            "What type is used to represent token balance information in the fungible token standard?",
          answerOptions: [
            { answerText: "String", isCorrect: false },
            {
              answerText: "Signed 64-bit fixed point numbers",
              isCorrect: false,
            },
            {
              answerText: "Unsigned 64-bit fixed point numbers (UFix64)",
              isCorrect: true,
            },
            { answerText: "Float", isCorrect: false },
          ],
        },
        {
          questionText:
            "What does the function [withdraw] do in the FungibleToken interface?",
          answerOptions: [
            {
              answerText: "It adds tokens to a user's Vault",
              isCorrect: false,
            },
            {
              answerText: "It allows users to create a Vault",
              isCorrect: false,
            },
            {
              answerText:
                "It removes a specific amount of tokens from the owner's Vault",
              isCorrect: true,
            },
            {
              answerText: "It changes the value of a specific amount of tokens",
              isCorrect: false,
            },
          ],
        },
        {
          questionText:
            "How does the Flow token standard compare to similar standards such as ERC-20?",
          answerOptions: [
            { answerText: "It is identical to ERC-20", isCorrect: false },
            {
              answerText: "It is a simpler version of ERC-20",
              isCorrect: false,
            },
            {
              answerText:
                "It covers much of the same ground but without most of the downsides",
              isCorrect: true,
            },
            {
              answerText: "It is a more complicated version of ERC-20",
              isCorrect: false,
            },
          ],
        },
      ]);
    } else if (quiz === "cadence") {
      setNftTitle("I know Cadence Well :)");
      setNftImage(
        "https://media.istockphoto.com/id/1439874970/photo/3d-badge-with-check-mark.webp?b=1&s=170667a&w=0&k=20&c=e2Y7-ah8WC6yMI4grZQLxJSOdmTeFxvLQXtVfneBxIg="
      );
      setQuestions([
        {
          questionText: "What is Cadence?",
          answerOptions: [
            { answerText: "A blockchain platform", isCorrect: false },
            { answerText: "A smart contract", isCorrect: false },
            {
              answerText: "A resource-oriented programming language",
              isCorrect: true,
            },
          ],
        },
        {
          questionText:
            "What is one of the features introduced by Cadence to improve smart contract programming?",
          answerOptions: [
            { answerText: "Dynamic typing", isCorrect: false },
            { answerText: "Resource-oriented programming", isCorrect: true },
            {
              answerText: "Dependency-based programming",
              isCorrect: false,
            },
          ],
        },
        {
          questionText:
            "Which programming languages inspired the syntax of Cadence?",
          answerOptions: [
            { answerText: "Python, Java, and C++", isCorrect: false },
            { answerText: "Swift, Kotlin, and Rust", isCorrect: true },
            {
              answerText: "Ruby, Perl, and PHP",
              isCorrect: false,
            },
            {
              answerText: "JavaScript, TypeScript, and Go",
              isCorrect: false,
            },
          ],
        },
        {
          questionText:
            "What does Cadence's strong static type system ensure when dealing with resources?",
          answerOptions: [
            {
              answerText: "Resources can exist in multiple locations at once",
              isCorrect: false,
            },
            {
              answerText:
                "Resources can be copied and lost due to coding errors",
              isCorrect: false,
            },
            {
              answerText:
                "Resources can only exist in one location at a time and cannot be copied or lost",
              isCorrect: true,
            },
          ],
        },
        {
          questionText:
            "How does Cadence approach the issue of smart contract safety and security?",
          answerOptions: [
            {
              answerText:
                "By allowing any user to modify the smart contract after deployment",
              isCorrect: false,
            },
            {
              answerText:
                "By relying solely on extensive auditing and review processes",
              isCorrect: false,
            },
            {
              answerText:
                "By using a strong static type system, design by contract, and ownership primitives inspired by linear types",
              isCorrect: true,
            },
          ],
        },
      ]);
    }
  }, [quiz]);

  return { questions, nftTitle, nftImage };
};
