import React from "react";

const TableUsers = ({ userInfo }) => {
  return (
    <div className="row">
      <div className="col">
        <div className="imgUser">
          <img src={`/img/user/${userInfo.avatar}`} alt={userInfo.avatar} />
        </div>
      </div>
      {userInfo.id === 1 ? (
        <div className="col admin">Admin</div>
      ) : (
        <div className="col user">User</div>
      )}
      <div className="col">{userInfo.nombre}</div>
      <div className="col">{userInfo.apellido}</div>
      <div className="col">{userInfo.email}</div>
    </div>
  );
};

export default TableUsers;
