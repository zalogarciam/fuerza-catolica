import Header from "./Header";
import { useEffect } from "react";
import { fetchHomeData } from "../../redux/thunks/homeThunk";
import useHome from "../../hooks/useHome";
import { useDispatch } from "react-redux";
import Footer from "./Footer";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, homeData } = useHome();
  useEffect(() => {
    document.title = "Fuerza Catolica - Inicio";
    Object.keys(homeData).length === 0 && dispatch(fetchHomeData());
  }, []);
  console.log(homeData);
  return (
    <div>
      <Header></Header>
      <div className="container " style={{ height: "60vh" }}>
        <h2>Fuerza Catolica</h2>
        <br></br>
        <div className="f-elements--center" style={{ columns: "2 auto" }}>
          {Object.entries(homeData)
            .slice(0, 6)
            .map(([key, value]) => (
              <div key={value.id} style={{ textAlign: "center" }}>
                <h5>{value.title}</h5>
                <img src={value.thumbnailUrl} />
              </div>
            ))}
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Home;
