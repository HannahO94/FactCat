import React from "react";
import { useEffect, useState } from "react";
import CardItemDetail from "../components/CardItemDetail";
import { Link } from "react-router-dom";
import UserDetail from "../components/UserDetail";

export default function FactDetailPage(props) {
  let [factData, setFactData] = useState({});
  // let [userFactData, setUserFactData] = useState([]);
  const [factName, setFactName] = useState("");

  let index;

  function fetchFacts() {
    const factId = props.match.params.id;
    fetch("https://cat-fact.herokuapp.com/facts")
      .then((res) => res.json())
      .then((result) => {
        setFactData(result.all[factId]);
        setFactName(
          result.all[factId].user.name.first +
            " " +
            result.all[factId].user.name.last
        );
      });
  }

  // function fetchUser() {
  //   fetch("https://cat-fact.herokuapp.com/facts")
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setUserFactData(result.all);
  //     });
  // }
  // function findIndexData() {
  //   const id = factId;
  //   index = userFactData
  //     .map((item, i) => {
  //       return item._id;
  //     })
  //     .indexOf(id);

  //   return userFactData[index];
  // }
  // fetchUser();

  useEffect(() => {
    fetchFacts();

    // fetchUser();
    // findIndexData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <Link to={`/`}>Home</Link>
      <h1>Fact Detail Page</h1>
      <CardItemDetail
        text={factData.text}
        name={factName}
        upvotes={factData.upvotes}
      />
    </div>
  );
}
