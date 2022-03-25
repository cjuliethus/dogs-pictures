import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Axios from "axios";

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    getDogs();
  }, []);

  const getDogs = async () => {
    await Axios.get("https://dog.ceo/api/breeds/image/random/10").then(
      ({ data }) => {
        setData(data);
      }
    );
  };

  return (
    <div className="App">
      <div className="container-doggos">
        <div className="section-photos-dogs">
          {data?.message?.map((item) => {
            return (
              <div
                className="item-img"
                style={{
                  background: `url(${item}) no-repeat`,
                  backgroundSize: "100% 100%",
                }}
              >
                {/* <img src={item} /> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
