import React from "react";
import { useEffect, useState } from "react";
import UserDetail from "./UserDetail";

export default function CardItemDetail({ text, name, upvotes }) {
  return (
    <div className="m-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{text}</h5>

          <p>- {name}</p>
          <span>Upvotes: {upvotes}</span>
        </div>
      </div>
    </div>
  );
}
