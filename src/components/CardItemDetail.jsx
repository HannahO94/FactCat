import React from "react";
import UserDetail from "../components/UserDetail";

export default function CardItemDetail({ props }) {
  return (
    <div className="m-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.text}</h5>
          {/* <UserDetail props={props.user} /> */}
          <p></p>
        </div>
      </div>
    </div>
  );
}
