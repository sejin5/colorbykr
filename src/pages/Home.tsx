import { useNavigate } from "react-router-dom";
import { COLOR_LIST } from "../constants/color";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        {COLOR_LIST.map(({ label, code }) => (
          <button key={code} onClick={() => navigate(`/colors/${code}`)}>
            {label}
          </button>
        ))}
      </div>
    </>
  );
}

export default Home;
