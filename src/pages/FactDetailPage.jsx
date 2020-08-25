import React from "react";
import { useEffect, useState } from "react";
import CardItemDetail from "../components/CardItemDetail";
import { Link } from "react-router-dom";
import UserDetail from "../components/UserDetail";

export default function FactDetailPage(props) {
  let [factData, setFactData] = useState({});
  let [userFactData, setUserFactData] = useState([]);
  const factId = props.match.params.id;

  let index;

  // let index;

  function fetchFacts() {
    let factId = props.match.params.id;
    fetch(`https://cat-fact.herokuapp.com/facts/${factId}`)
      .then((res) => res.json())
      .then((result) => {
        setFactData(result);
      });
  }

  function fetchUser() {
    fetch("https://cat-fact.herokuapp.com/facts")
      .then((res) => res.json())
      .then((result) => {
        setUserFactData(result.all);
      });
  }
  function findIndexData() {
    const id = factId;
    index = userFactData
      .map((item, i) => {
        return item._id;
      })
      .indexOf(id);

    let theUser = userFactData[index];
    // console.log(theUser);
    if (theUser !== undefined) {
      return theUser;
    }
  }
  // fetchUser();

  useEffect(() => {
    fetchFacts();
    fetchUser();
    // findIndexData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <Link to={`/`}>Home</Link>
      <h1>Fact Detail Page</h1>
      <CardItemDetail props={factData} id={factId} />
      <UserDetail props={findIndexData()} />
    </div>
  );
}
