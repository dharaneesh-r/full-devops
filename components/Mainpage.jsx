import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const Navigate = useNavigate();
  return (
    <div className="bg-black h-screen place-content-center">
      <div className="text-white  font-semibold text-center text-3xl">
        DEVOPS FULL TUTORIAL{" "}
      </div>
      <div className="text-center my-10">
        <Button variant="outlined" onClick={() => Navigate("/article")}>
          ARTICLE
        </Button>
      </div>
    </div>
  );
};

export default MainPage;
