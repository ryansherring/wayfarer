import React from "react";
import CitiesView from '../../CitiesView';

// TODO Selected city needs to be made into a method passed as a prop in the CitiesView container.

const City = props => {

  // const handleClick = () => {
  //   props.selectedCity(props.name);
  // }

  return (
    <section className="post-card" onClick={() => props.handleSelectCity(props.name)}>
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