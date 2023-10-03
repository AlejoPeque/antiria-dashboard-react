import React from "react";
import TableUsers from "../Table/TableUsers";

const Users = ({ userInfo }) => {
  return (
    <div className="contenedorPages">
      <div className="containerPages">
        <div className="containerTablas">
          <div className="container">
            <h3 className="tablaName">Users</h3>
            <div className="row">
              <div className="col colTitle">User</div>
              <div className="col colTitle">Rango</div>
              <div className="col colTitle">Nombre</div>
              <div className="col colTitle">Apellido</div>
              <div className="col colTitle">Email</div>
            </div>
            {Array.isArray(userInfo) &&
              userInfo.map((user, index) => (
                <TableUsers key={index} userInfo={user} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
