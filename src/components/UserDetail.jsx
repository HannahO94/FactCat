import React from "react";

export default function UserDetail({ props }) {
  let userItem = props;
  let userData;
  if (userItem !== undefined) {
    userData = userItem;
    // console.log(userData);
  }
  console.log(userData);

  return (
    <div className="m-3">
      <div className="card">
        <div className="card-body">
          {/* <h5 className="card-title">{userData.user}</h5> */}
          <p></p>
        </div>
      </div>
    </div>
  );
}
