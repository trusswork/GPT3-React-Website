import React from "react";
import "./possibilty.css";
import possibiltyImage from "../../assets/possibility.png";

const posibilty = () => {
  return (
    <div className="gpt3__possibility section__padding">
      <div className="gpt3__possibility-image">
        <img src={possibiltyImage} alt="possiblity" />
      </div>
      <div className="gpt3__possibilty-content">
        <h4>Request Early access to get started</h4>
        <h1 className="gradient__text">
          The possiblity are beyond our imagination.
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence
          unpleasing. Not thoughts all exercise blessing.
          Indulgence way everything joy alteration
          boisterous the attachment. Party we years to order
          allow asked of
        </p>
        <h4>Request Early access to get started</h4>
      </div>
    </div>
  );
};

export default posibilty;
