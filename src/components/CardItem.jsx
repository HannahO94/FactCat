import React from "react";
import { Link } from "react-router-dom";

export default function CardItem({ props }) {
  return (
    <div className="card mb-3" style={{ width: "200px" }}>
      <h5 className="card-text">{props.text.slice(0, 200)}...</h5>

      <p>
        - {props.user.name.first} {props.user.name.last}
      </p>
      <p>{props._id}</p>
      <Link to={`/fact/${props._id}`}>Go to image detail</Link>
    </div>
  );
}
