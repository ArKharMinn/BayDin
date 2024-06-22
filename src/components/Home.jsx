import React, { useState } from "react";

const Home = ({ cookie }) => {
  const [fortune, setFortune] = useState("");
  const drawCard = () => {
    var randomIndex = Math.floor(Math.random() * cookie.length);
    setFortune(cookie[randomIndex]);
  };
  return (
    <div>
      <div className="min-vh-100 py-3">
        <h1 className="text-center">Welcome to Our Fortune Site!</h1>
        <p className="text-center my-2">
          Drawing the fortune card felt like grasping a fragment of destiny
        </p>
        <div className="d-flex justify-content-center row align-items-center">
          <img src="/fortune.png" className="col-lg-3 col-sm-4" />
          <img
            src="/card.png"
            className="col-lg-1 col-sm-2"
            onClick={() => drawCard()}
          />
        </div>
        <div className="text-center my-4 p-3">
          <h3 className="">{fortune.fortune}</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
