import React, { useState } from "react";
import { Data } from "../Data/Data";
import "./Home.css";
import HomeSlider from "./HomeSlider";


const HomePage = () => {
  

  const [items, setItems] = useState(Data);
  return (
    <div>
      <section className="home">
        <HomeSlider items={items} />
      </section>
      <div className="margin"></div>
    </div>
  );
};

export default HomePage;
