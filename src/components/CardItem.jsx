import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import UserDetail from "./UserDetail";

export default function CardItem({ props, id }) {
  // let [userFactData, setUserFactData] = useState([]);
  // let thisid = id;

  // let index;

  // function fetchUser() {
  //   fetch("https://cat-fact.herokuapp.com/facts")
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setUserFactData(result.all);
  //     });
  // }
  // function findIndexData() {
  //   const id = thisid;
  //   index = userFactData
  //     .map((item, i) => {
  //       return item._id;
  //     })
  //     .indexOf(id);

  //   let theUser = userFactData[index];
  //   // console.log(theUser);
  //   if (theUser !== undefined) {
  //     return theUser;
  //   }
  // }
  // // fetchUser();

  // useEffect(() => {
  //   // fetchFacts();
  //   fetchUser();
  //   // findIndexData();
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="card mb-3" style={{ width: "200px" }}>
      <h5 className="card-text">{props.text.slice(0, 20)}...</h5>

      <p>
        - {props.user.name.first} {props.user.name.last}
      </p>
      <p></p>
      <Link to={`/fact/${id}`}>Go to image detail</Link>
      {/* <UserDetail props={findIndexData()} /> */}
    </div>
  );
}
