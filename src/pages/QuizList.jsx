import CarouselComponent from "../components/CarouselComponent/CarouselComponent";
import { useNavigate } from "react-router-dom";

const QuizList = () => {
  return (
    <>
      <div className="mx-auto w-full h-full">
        <div className="text-left py-5">
          <div className="text-4xl font-bold">Featured Games</div>
        </div>
        <div className="flex flex-col px-5 py-5">
          <Content
            dest="whatisflow"
            name="PUBG"
            desc="Player Unknown's Battlegraound is a survival game with up to 100 players"
            img="https://www.sisajournal-e.com/news/photo/first/201803/img_182092_1.png"
          />
          <Content
            dest="flowwallet"
            name="League of Legends"
            desc="League of Legeneds is a 5 vs 5 game, where you can enjoy with your friends. Destroy the enemy nexus to win the game"
            img="https://www.infobae.com/new-resizer/rxHVEte6mUhroD2hSfpeJW9ZEXM=/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/YABJ7CAXOZDVHAXSDRSQQ7NJR4.jpg"
          />
          <Content
            dest="CounterStrike"
            name="Counter Strike"
            desc="Counter Strike is a 5 vs 5 game, where you can enjoy with your friends. Gun shooting game"
            img="https://media.steampowered.com/apps/csgo/blog/images/fb_image.png?v=6"
          />
          <Content
            dest="tokenstandard"
            name="Dungeon Fighter Online"
            desc="The best MMO game ever!"
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
          <div className="overflow-auto my-auto">{desc}</div>
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

export default QuizList;
