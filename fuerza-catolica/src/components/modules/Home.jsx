import Header from "./Header";
import { useEffect } from "react";
import { fetchHomeData } from "../../redux/thunks/homeThunk";
import useHome from "../../hooks/useHome";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, homeData } = useHome();
  useEffect(() => {
    document.title = "Fuerza Catolica - Inicio";
    // Object.keys(homeData).length === 0 && dispatch(fetchHomeData());
    console.log(homeData);
  }, []);

  console.log(homeData);

  return (
    <div>
      <Header></Header>
      <div className="container " style={{ height: "60vh" }}>
        <h2>Fuerza Catolica</h2>
      </div>
    </div>
  );
};

export default Home;
