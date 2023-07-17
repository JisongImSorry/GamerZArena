import CarouselComponent from "../components/CarouselComponent/CarouselComponent";
import { useNavigate } from "react-router-dom";

const VideoList = () => {
  return (
    <>
      <div className="mx-auto w-full h-full">
        <div className="text-left py-5">
          <div className="text-4xl font-bold">Watch to LEARN</div>
        </div>
        <div className="text-left py-5">
          <div className="text-2xl font-medium">
            Watch and learn what FLOW is.
            <br /> Our curated list of videos will help you learn more about
            FLOW and Crypto
          </div>
        </div>
        <div className="flex flex-col px-5 py-5">
          <Content
            dest="https://www.youtube.com/watch?v=Q0rtqO827Ks"
            name="What is FLOW blockchain ? - Flow explained"
            desc="kkay technologies"
            tags={["FLOW", "BLOCKCHAIN"]}
            img="/1.jpeg"
          />
          <Content
            dest="https://www.youtube.com/watch?v=TKqPxb5JUF8"
            name="Flow: Any Potential?! This You NEED To Know!"
            desc="Coin Bureau"
            tags={["FLOW", "CRYPTO"]}
            img="/2.jpeg"
          />
          <Content
            dest="https://www.youtube.com/watch?v=DAeaFssmSzc"
            name="Flow Blockchain: The Most Exciting Project in Crypto!"
            desc="Sin City Crypto"
            tags={["FLOW", "PROJECTS"]}
            img="/3.jpeg"
          />
          <Content
            dest="https://www.youtube.com/watch?v=pRz7EzrWchs"
            name="Learn Cadence - Hello World on Flow - an instructional on coding language of Flow Blockchain!"
            desc="Flow - Blockchain"
            tags={["FLOW", "CADENCE", "CODE"]}
            img="/4.jpeg"
          />
          <Content
            dest="https://www.youtube.com/watch?v=iVevnipJbHo"
            name="Learn Cadence (Part 1) - What is the Flow Blockchain and Cadence?"
            desc="Jacob Tucker"
            tags={["FLOW", "CADENCE", "CODE"]}
            img="/5.jpeg"
          />
          <Content
            dest="https://www.youtube.com/watch?v=SQyg9pyJ1Ac"
            name="What is a Cryptocurrency Wallet? (3 Types + Key Examples)"
            desc="
            Whiteboard Crypto
            "
            tags={["CRYPTO", "WALLET"]}
            img="/6.jpeg"
          />
        </div>
      </div>
    </>
  );
};

const Content = ({ img, name, desc, dest, tags }) => {
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
        <div className="w-2/3 flex flex-col gap-3 p-1 my-auto">
          <div className="font-bold text-xl">{name}</div>
          <div className="overflow-auto">{desc}</div>
          <div className="flex flex-row gap-5 mx-auto">
            {tags.map((tag) => {
              return <div>#{tag}</div>;
            })}
          </div>
          <a
            className="ml-auto flex flex-row gap-3 items-center bg-white text-black px-8 py-1 font-bold rounded-[1000px] shadow-md bg-white bg-opacity-30 border-2 border-red-400 mx-auto"
            href={dest}
            target="_blank"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png"
              className="w-12 h-8"
            />
            Watch Video
          </a>
        </div>
      </div>
    </div>
  );
};

const ClockIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-4 h-4"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};

export default VideoList;
