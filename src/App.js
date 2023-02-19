import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "../src/assets/style/global.scss";
import Loader from "./component/loader";
import Footer from "./pages/footer";
import Header from "./pages/header";
import Routing from "./routing";
import useLoader from "./useLoader";

function App() {
  let MyRef = useRef();
  let [scrl, setScrl] = useState(0);
  window.onscroll = () => {
    setScrl(Math.floor(window.scrollY));
  };
  useEffect(() => {
    if (scrl >= 100) {
      MyRef.current.style.display = "flex";
    } else if (scrl <= 99) {
      MyRef.current.style.display = "none";
    }
  }, [scrl]);

  let location = useLocation();
  let [s, setS] = useState(false);
  const { loading } = useLoader();
  useEffect(() => {
    setS(false);
  }, [location.pathname]);
  console.log(s);
  if (loading) {
    return <Loader />;
  }
  return (
    <div
      className="App G-container"
      onClick={() => {
        setS(false);
      }}
    >
      <Header s={s} setS={setS} />
      <Routing />
      <Footer/>
      <a ref={MyRef} className="myBtn" href="#header">
        To Top
      </a>
    </div>
  );
}

export default App;
