import CarouselComponent from "../components/CarouselComponent/CarouselComponent";
import { useNavigate } from "react-router-dom";

const Main = () => {
  return (
    <>
      <CarouselComponent
        images={[
          "https://assets-global.website-files.com/5f734f4dbd95382f4fdfa0ea/62868269e75da82e059537a4_FlowOGImage%20(1).png",
          "https://www.coinkolik.com/wp-content/uploads/2022/11/FLOW.jpg",
        ]}
      />
      <div className="mx-auto w-full h-full">
        <div className="text-left py-5">
          <div className="text-4xl font-bold">How to build on FLOW</div>
        </div>
        <div className="flex flex-col px-5 py-5">
          <Content
            dest="whatisflow"
            name="What is FLOW?"
            desc="Learn what is FLOW, and get to know about the key concept of it!"
            img="https://blog.kakaocdn.net/dn/b3XWfc/btq84vL2PS6/9vcPD4UYWioGWLA3K0HMk1/img.png"
          />
          <Content
            dest="flowwallet"
            name="FLOW Wallet"
            desc="Learn about crypto wallet, but especially about what is used in FLOW Blockchain."
            img="https://www.datocms-assets.com/75149/1675801227-cryptowallet.jpg"
          />
          <Content
            dest="cadence"
            name="Cadence Programming Language"
            desc="To BUILD on FLOW, you need to use Cadence Programming language. Get to know how to use it efficiently to build on FLOW."
            img="https://raw.githubusercontent.com/onflow/cadence/master/cadence_furever.png"
          />
          <Content
            dest="tokenstandard"
            name="Token Standard"
            desc="To BUILD on FLOW, you need to use Cadence Programming language. Get to know how to use it efficiently to build on FLOW."
            img="https://opengraph.githubassets.com/3be230164edc27254870150a0bd9083a28104c35402a1c5b0cd4d82dbe63ce8a/onflow/flow-ft"
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
            <ClockIcon />5 mins
          </div>
          <button
            onClick={() => {
              navigate(`lesson/${dest}`);
            }}
            className="mx-auto mt-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Start Learning
          </button>
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

export default Main;
