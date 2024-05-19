import React from "react";
import { Link } from "react-router-dom";

const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">{text}
    <Link to={link}>{btnText}</Link></div>
  );

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Aisha</span> 👋
      <br/>
      A Software Developer from Sri Lanka
    </h1>
  ),
  2: (<InfoBox text="hhhhhhhhhhh"/>),
  3: (<InfoBox text="hhhhhhhhhhh"/>),
  4: (<InfoBox text="hhhhhhhhhhh"/>),
};



const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
