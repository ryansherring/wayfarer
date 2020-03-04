import React from "react";

const City = props => {
  return (
    <section className="post-card">
      <img className="city-thumbnail" src={props.image} alt={props.name}></img>
      <div className="city-body">
        <div className="city-header">
          <h3>{props.name}</h3>
        </div>
      </div>
    </section>
  );
};

export default City;