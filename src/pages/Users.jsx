import React from "react";
import TableUsers from "../Table/TableUsers";

const Users = ({ userInfo }) => {
  return (
    <div className="containerPages">
      <div className="containerTablas">
        <div className="container">
          <h3 className="tablaName">Users</h3>
          <div className="row">
            <div className="col colTitle">id</div>
            <div className="col colTitle">nombre</div>
            <div className="col colTitle">apellido</div>
            <div className="col colTitle">email</div>
            <div className="col colTitle">avatar</div>
          </div>
          {userInfo.map((user, index) => (
            <TableUsers key={index} userInfo={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
