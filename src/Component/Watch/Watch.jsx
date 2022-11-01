import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Data, recommended } from "../Data/Data.jsx";
import "./Watch.scss";
import fb from "../../Images/fb.png";
import twitter from "../../Images/twitter.png";
import linkedin from "../../Images/linkedin.png";
import Upcomming from "../Upcomming/Upcomming";

const Watch = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    let item = Data.find((item) => item.id === parseInt(id));
    if (item) {
      setItem(item);
    }
  }, [id]);

  const [rec, setRec] = useState(recommended);

  return (
    <div>
      {item ? (
        <div>
          <section className="watch">
            <div className="watchHeading">
              <h1>{item.name}</h1>
              <span>| {item.time} | </span>
              <span>HD</span>
            </div>
            <div className="container">
              <video src={item.video} controls></video>
              <div className="para">
                <h3> Date : {item.date}</h3>
                <p>{item.desc}</p>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, mollitia. Mollitia ullam, eaque aliquam sunt
                  cupiditate perferendis corporis doloribus! Incidunt quos esse
                  ducimus assumenda placeat amet omnis saepe ipsam ea!
                </p>
                <p>
                  Get access to the direct Project Overview with this report.
                  Just by a quick glance, you’ll have an idea of the total tasks
                  allotted to the team, number of milestones given & completed,
                  total Links created for the project and the total time taken
                  by all the users. Each section would elaborate the data
                  further, if chosen.
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quibusdam placeat cumque impedit fugit hic cupiditate odio
                  sapiente ex eum rerum mollitia a nulla sequi dolore quia odit,
                  est libero accusantium tenetur! Accusamus, doloremque
                  voluptatibus repellat dignissimos optio accusantium excepturi
                  ut.
                </p>
              </div>
              <div className="social">
                <h3>Share: </h3>
                <img src={fb} alt="" />
                <img src={twitter} alt="" />
                <img src={linkedin} alt="" />
              </div>
            </div>
          </section>
          <Upcomming items={rec} title="Recommended Movies" />
        </div>
      ) : null}
    </div>
  );
};

export default Watch;
