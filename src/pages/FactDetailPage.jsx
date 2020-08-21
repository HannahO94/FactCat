import React from "react";
import { useEffect, useState } from "react";
import CardItemDetail from "../components/CardItemDetail";

export default function FactDetailPage(props) {
  let [factData, setFactData] = useState({});

  function fetchFact() {
    const factId = props.match.params.id;
    console.log(factId);
    fetch(`https://cat-fact.herokuapp.com/facts/${factId}`)
      .then((res) => res.json())
      .then((result) => {
        setFactData(result);
      });
  }
  //   function fetchUser() {
  //     const userId = props.user;
  //     fetch(`https://cat-fact.herokuapp.com/facts/${userId}`)
  //       .then((res) => res.json())
  //       .then((result) => {
  //         setFactData(result);
  //       });
  //   }

  useEffect(() => {
    fetchFact();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <h1>Fact Detail Page</h1>
      {console.log(factData)}
      <CardItemDetail props={factData} />
    </div>
  );
}
