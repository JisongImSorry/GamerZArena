import { useEffect, useState, useContext } from "react";
import { useFlow } from "../hooks/useFlow";
import { FlowContext } from "../context/FlowContext";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const { walletLogin, mintNFT, getNFTs, user } = useContext(FlowContext);
  const [isLogin, setIsLogin] = useState(false);

  const navigate = useNavigate();

  return (
    <div
      className={`mt-auto flex flex-col items-start bg-gray-400 bg-opacity-50 border-t border-allco-g3 font-notokr font-medium w-full mt-24`}
      style={{
        borderTop: "1.5px solid #8E8E8E",
      }}
    >
      <div className="w-full">
        <div className="flex items-center text-center gap-5 text-alco-gray-400 mx-auto w-alco-md flex-row text-sm pt-2 pb-2 w-[1200px] mx-auto">
          <a target="_blank">Terms of Service</a>
          <div>|</div>
          <a target="_blank">Privacy Policy</a>
          <div>|</div>
          <a target="_blank">User Policy</a>
        </div>
        <div className="w-full" style={{ borderTop: "1.5px solid #8E8E8E" }} />
        <div className="mx-auto w-alco-md pb-10 w-[1200px] mx-auto">
          <div className="flex items-start mt-10 text-alco-gray-400 text-sm"></div>
          <div className="flex items-start text-alco-gray-400 text-sm">
            Ⓒ GamerZ ARENA all right reserved.
          </div>
          <div className="flex items-center gap-1.5 ml-113 mt-5 min-w-[591px] h-35">
            <img src="/logo.png" className="w-16 h-16 mr-10" />
            <div className="flex flex-col text-alco-gray-300 text-sm text-left">
              <p>Contact: @Hoichate</p>
              <p>Email: jisongimsorry@gmail.com</p>
              <p className="">Location: Seoul, Korea</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
