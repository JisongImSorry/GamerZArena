import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Main from "./pages/Main";
import Quiz from "./pages/Quiz";
import WhatIsFlow from "./pages/lessons/WhatIsFlow";
import FlowWallet from "./pages/lessons/FlowWallet";
import Cadence from "./pages/lessons/Cadence";
import MyPage from "./pages/MyPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import QuizList from "./pages/QuizList";
import VideoList from "./pages/VideoList";
import TokenStandard from "./pages/lessons/TokenStandard";
import ScrollToTop from "./components/ScrollToTop";
import { FlowContext } from "./context/FlowContext";
import { useMemo } from "react";
import { useFlow } from "./hooks/useFlow";

function App() {
  const provider = useFlow();
  return (
    <div className="App">
      <FlowContext.Provider value={provider}>
        <BrowserRouter>
          <ScrollToTop />
          <Header />
          <div className="w-[64rem] mx-auto">
            <Routes>
              <Route path="/*" element={<Main />} />
              <Route path="/lesson/whatisflow" element={<WhatIsFlow />} />
              <Route path="/lesson/flowwallet" element={<FlowWallet />} />
              <Route path="/lesson/cadence" element={<Cadence />} />
              <Route path="/lesson/tokenstandard" element={<TokenStandard />} />
              <Route path="/quiz/:type" element={<Quiz />} />

              <Route path="/mypage" element={<MyPage />} />
              <Route path="/quizlist" element={<QuizList />} />
              <Route path="/videolist" element={<VideoList />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </FlowContext.Provider>
    </div>
  );
}

export default App;
