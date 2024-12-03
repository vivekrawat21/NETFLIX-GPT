import Header from "../components/Header";
import { useRouteSafe } from "../utils/hooks/useRouteSafe";

const Browse = () => {
  useRouteSafe(); 
  return (
    <div>
      <Header />
      <div className="text-white text-2xl text-center"></div>
    </div>
  );
};

export default Browse;
