import { useEffect, useState, useContext } from "react";
import { useFlow } from "../hooks/useFlow";
import { FlowContext } from "../context/FlowContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { walletLogin, mintNFT, getNFTs, user } = useContext(FlowContext);
  const [isLogin, setIsLogin] = useState(false);

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
          Learn Cadence DAO
        </div>
        <div
          className="text-2xl mr-10 underline cursor-pointer"
          onClick={() => {
            navigate("/quizlist");
          }}
        >
          Quiz
        </div>
        <div
          className="text-2xl underline cursor-pointer"
          onClick={() => {
            navigate("/videolist");
          }}
        >
          Video
        </div>
        {!user && (
          <button
            className="ml-auto flex flex-row gap-3 items-center bg-white text-black px-8 py-1 font-bold rounded-[1000px] shadow-md bg-green-300 bg-opacity-30 border-2 border-green-400"
            onClick={() => {
              walletLogin();
            }}
          >
            <img
              src="https://cryptologos.cc/logos/flow-flow-logo.png?v=025"
              className="h-8 w-8"
            />
            Connect
          </button>
        )}
        {user && (
          <>
            <button
              className="ml-auto flex flex-row gap-3 items-center bg-white text-black px-8 py-1 font-bold rounded-[1000px] shadow-md bg-green-300 bg-opacity-30 border-2 border-green-400 hover:bg-green-400 hover:bg-opacity-30"
              onClick={() => {
                navigate("/mypage");
              }}
            >
              <img
                src="https://cryptologos.cc/logos/flow-flow-logo.png?v=025"
                className="h-8 w-8"
              />
              {user.addr}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
