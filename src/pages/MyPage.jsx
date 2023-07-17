import CarouselComponent from "../components/CarouselComponent/CarouselComponent";
import { useNavigate } from "react-router-dom";
import { FlowContext } from "../context/FlowContext";
import { useEffect, useState, useContext } from "react";

const MyPage = () => {
  const { nfts, getNFTs, user } = useContext(FlowContext);
  useEffect(() => {
    if (user) {
      console.log(user);
      getNFTs(user.addr);
    }
  }, [user]);
  return (
    <>
      <div className="mx-auto w-full h-full">
        <div className="text-left py-5">
          <div className="text-4xl font-bold">My Badge NFT</div>
        </div>
        <div className="flex flex-col px-5 py-5 h-screen overflow-auto">
          {nfts.map((nft, index) => {
            return (
              <>
                <Content
                  dest="whatisflow"
                  name={nft.type}
                  desc="This NFT Badge proves that you passed the QUIZ!"
                  img={nft.url}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

const Content = ({ img, name, desc, dest }) => {
  const navigate = useNavigate();
  return (
    <div className="border-b-4 border-gray py-3">
      <div className="flex flex-row gap-3 h-48">
        <div className="w-1/3">
          <img
            className="h-full w-full"
            src={img}
            style={{
              borderRadius: "20px",
            }}
          />
        </div>
        <div className="w-2/3 flex flex-col gap-3 p-1">
          <div className="font-bold text-xl">{name}</div>
          <div className="overflow-auto my-auto text-xl overflow-hidden">
            {desc}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
