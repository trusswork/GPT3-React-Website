import React from "react";
import { Feature } from "../../components";
import "./whatGPT3.css";

const whatGPT3 = () => {
  return (
    <div
      className="gpt3__whatgpt3 section__padding"
      id="whpt3 ">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          Title="What is GPT3"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p className="gradient__text">
          Explore The Library
        </p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          Title="Chatbots"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
        />
        <Feature
          Title="Knownledgebase"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments"
        />
        <Feature
          Title="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments "
        />
      </div>
    </div>
  );
};

export default whatGPT3;
