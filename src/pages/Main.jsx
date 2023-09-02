import CarouselComponent from "../components/CarouselComponent/CarouselComponent";
import { useNavigate } from "react-router-dom";

const Main = () => {
  return (
    <>
      <CarouselComponent
        images={[
          "https://cdn.cloudflare.steamstatic.com/steam/apps/222420/capsule_616x353.jpg?t=1643846921",
          "https://bnetcmsus-a.akamaihd.net/cms/blog_header/2g/2G4VZH5TIWJF1602720144046.jpg",
          "https://i.ytimg.com/vi/GKXS_YA9s7E/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBf5464tjEyqWFjaV2Y3nVgTws32Q",
        ]}
      />
      <div className="mx-auto w-full h-full">
        <div className="text-left py-5">
          <div className="text-4xl font-bold">Ongoing Contests</div>
        </div>
        <div className="flex flex-col px-5 py-5">
          <Content
            dest="whatisflow"
            name="PUBG Arena"
            desc="The Best PUBG Game contest on earth! join now to win 10 NEO"
            img="https://www.sisajournal-e.com/news/photo/first/201803/img_182092_1.png"
          />
          <Content
            dest="flowwallet"
            name="League of Legends"
            desc="The Best LOL Game contest on earth! join now to win 10 NEO"
            img="https://www.infobae.com/new-resizer/rxHVEte6mUhroD2hSfpeJW9ZEXM=/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/YABJ7CAXOZDVHAXSDRSQQ7NJR4.jpg"
          />

          <Content
            dest="tokenstandard"
            name="Dungeon Fighter Online"
            desc="The Best DFO Game contest on earth! join now to win 10 NEO"
            img="https://cdn1.epicgames.com/offer/b567cb36ae39435792fe40d2e913cd92/EGS_DungeonFighterOnline_NEOPLEInc_S1_2560x1440-2c7394fde0cf6d46650d44d2a0f141e3"
          />
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
          <div className="overflow-auto">{desc}</div>
          <div className="flex flex-row mx-auto gap-5 text-sm items-center">
            <DollarIcon />
            15,000 usdt
          </div>
          <button
            onClick={() => {
              navigate(`lesson/${dest}`);
            }}
            className="mx-auto mt-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

const DollarIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
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

export default Main;
