import React from 'react';
import classes from "./People.module.css";

const People = (props) => {
  return (
    <li className={classes.people}>
      <h2>{props.name}</h2>
      <h3>{props.birthYear}</h3>
      <h3>{props.gender}</h3>
      <p>{props.ownedVehicle}</p>
    </li>
  )
}

export default People
