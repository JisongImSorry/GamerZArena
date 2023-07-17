import React, { useState, useContext } from "react";
import { FlowContext } from "../context/FlowContext";
import { useParams, useNavigate } from "react-router-dom";
import { useQuiz } from "../hooks/useQuiz";

const Quiz = () => {
  const { type } = useParams();
  const { questions, nftTitle, nftImage } = useQuiz(type);

  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);

  const { mintNFT, nfts } = useContext(FlowContext);

  console.log(nfts);
  console.log(nftTitle);

  const handleAnswerOptionClick = (isCorrect, answerText) => {
    // Save the answer
    setAnswers([...answers, answerText]);

    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app bg-gray-100 min-h-screen p-5">
      {showScore ? (
        <div className="score-section text-3xl">
          You SCORED : <span className="text-green-500 font-bold">{score}</span>{" "}
          out of
          <span className="text-blue-500 font-bold"> {questions.length}</span>
          {score === questions.length ? (
            !nfts.find((item) => {
              return item.type === nftTitle;
            }) ? (
              <div className="my-5">
                <div>Claim your Badge NOW!</div>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-1 px-4 rounded my-5 text-md"
                  onClick={() => {
                    mintNFT(nftTitle, nftImage);
                  }}
                >
                  Mint
                </button>
              </div>
            ) : (
              <div className="my-5">
                You already have a badge!
                <br />
                Now, let's go to learn more!
                <br />
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-1 px-4 rounded my-5 text-md"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Learn more
                </button>
              </div>
            )
          ) : (
            <div className="my-10">
              Answer all questions correct
              <br /> & claim your badge!
              <div>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-1 px-4 rounded my-5 text-md"
                  onClick={() => {
                    setCurrentQuestion(0);
                    setShowScore(false);
                    setScore(0);
                    setAnswers([]);
                  }}
                >
                  Retake
                </button>
              </div>
            </div>
          )}
          {/* Show user's answers */}
          <div className="answer-section mt-5 flex flex-col">
            {answers.map((answer, index) => (
              <div
                key={index}
                className="border-2 border-gray-400 my-5 py-5 rounded-xl w-3/4 mx-auto"
              >
                <h2 className="underline font-bold text-4xl mb-4">
                  Q {index + 1}. {questions[index].questionText}
                </h2>
                {questions[index].answerOptions.map((answerOption, index) => {
                  return (
                    <div
                      className={`mt-2 text-gray-600 font-medium py-2 px-4 rounded w-3/4 mx-auto ${
                        answerOption.answerText === answer
                          ? answerOption.isCorrect
                            ? "bg-green-400 bg-opacity-50"
                            : "bg-red-400 bg-opacity-50"
                          : ""
                      }`}
                    >
                      {answerOption.answerText}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count text-2xl">
              <span className="font-bold">Quiz </span>
              <br />
              <span className="">{currentQuestion + 1}</span> out of
              <span> {questions.length}</span>
            </div>
            <div className="question-text text-4xl mt-2 font-bold my-10">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section mt-5 flex flex-col">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  key={index}
                  onClick={() =>
                    handleAnswerOptionClick(
                      answerOption.isCorrect,
                      answerOption.answerText
                    )
                  }
                  className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-3/4 mx-auto"
                >
                  {answerOption.answerText}
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
