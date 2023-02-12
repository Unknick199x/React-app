import React from 'react';
import People from './People';
import classes from "./PeopleList.module.css";

const PeopleList = (props) => {
  return (
    <ul className={classes["people-list"]}>
      {props.people.map((people) => (
        <People 
          key= {people.none}
          name={people.name}
          birthYear={people.birthYear}
          gender={people.gender}
          ownedVehicle={people.ownedVehicle}
        />
      ))}
    </ul>
  )
}

export default PeopleList