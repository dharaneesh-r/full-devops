import { Route, Routes } from "react-router-dom";
import MainPage from "../components/Mainpage";
import Article from "../components/Article";

const App = () => {
  return (
    <div className="bg-black h-screen place-content-center">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/article" element={<Article />} />
      </Routes>
    </div>
  );
};

export default App;
