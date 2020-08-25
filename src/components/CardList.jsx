import React from "react";
import { useState, useEffect } from "react";
import CardItem from "./CardItem";

export default function CardList() {
  let [factsList, setCatList] = useState([]);

  function fetchImageList() {
    fetch("https://cat-fact.herokuapp.com/facts")
      .then((res) => res.json())
      .then((result) => {
        setCatList(result);
      });
  }

  useEffect(() => {
    fetchImageList();
  }, []);

  return (
    <div className="container">
      <h2 className="mb-3">Kitty Fun Facts!</h2>
      <div className="d-flex flex-wrap justify-content-between">
        {Object.keys(factsList).map((item, i) =>
          factsList[item]
            .sort(() => Math.random() - Math.random())
            .slice(0, 21)
            .map((item, index) => <CardItem props={item} id={index} />)
        )}
      </div>
    </div>
  );
}
