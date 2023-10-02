import React from "react";

const TableUsers = ({ userInfo }) => {
  return (
    <div className="row">
      <div className="col">{userInfo.id}</div>
      <div className="col">{userInfo.nombre}</div>
      <div className="col">{userInfo.apellido}</div>
      <div className="col">{userInfo.email}</div>
      <div className="col">{userInfo.avatar}</div>
    </div>
  );
};

export default TableUsers;
