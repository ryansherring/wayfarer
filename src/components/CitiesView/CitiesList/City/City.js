import React from "react";

// TODO create event listener on the post-card to send props of selectedCity. 
// Do I need to turn this into a Class ? 
// How do I pass the selectedCity props to another component ?

const City = props => {
  const selectedCity = () => {
    console.log(props.name)
  }

  return (
    <section className="post-card" onClick={selectedCity}>
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