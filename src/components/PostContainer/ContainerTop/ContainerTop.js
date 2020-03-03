import React from "react";

const ContainerTop = props => {
  return (
    <section className="container-top">
      <div className="ct-title">
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
      </div>
      <div className="splash">
        <img className="splash" src={props.img} alt="city"></img>
      </div>
    </section>
  );
};

export default ContainerTop;
