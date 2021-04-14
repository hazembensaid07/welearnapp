import React from "react";
import { Link } from "react-router-dom";
const AdminLand = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexwrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <Link to="/userlist">
          {" "}
          <h1> Users</h1>{" "}
        </Link>
        <Link to="/bloglist">
          {" "}
          <h1>Blog</h1>{" "}
        </Link>
      </div>
    </div>
  );
};

export default AdminLand;
