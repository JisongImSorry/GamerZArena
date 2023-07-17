import CarouselComponent from "../components/CarouselComponent/CarouselComponent";
import { useNavigate } from "react-router-dom";

const QuizList = () => {
  return (
    <>
      <div className="mx-auto w-full h-full">
        <div className="text-left py-5">
          <div className="text-4xl font-bold">Content Quiz</div>
        </div>
        <div className="flex flex-col px-5 py-5">
          <Content
            dest="whatisflow"
            name="What is FLOW?"
            desc="Check your knowledge about what FLOW is"
            img="https://blog.kakaocdn.net/dn/b3XWfc/btq84vL2PS6/9vcPD4UYWioGWLA3K0HMk1/img.png"
          />
          <Content
            dest="flowwallet"
            name="FLOW Wallet"
            desc="Test how much you know about crypto wallet"
            img="https://www.datocms-assets.com/75149/1675801227-cryptowallet.jpg"
          />
          <Content
            dest="cadence"
            name="Cadence Programming Language"
            desc="Test your knowledge on Cadence"
            img="https://raw.githubusercontent.com/onflow/cadence/master/cadence_furever.png"
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
          <button
            onClick={() => {
              navigate(`/quiz/${dest}`);
            }}
            className="mx-auto mt-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Take QUIZ
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

export default QuizList;
