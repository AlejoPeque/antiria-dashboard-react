import React from "react";
import TableCategories from "../Table/TableCategories";

const Categories = ({ categoriaInfo }) => {
  return (
    <div className="containerPages">
      <div className="containerTablas">
        <div className="container">
          <h3 className="tablaName">Categories</h3>
          <div className="row">
            <div className="col colTitle">id</div>
            <div className="col colTitle">nombre</div>
          </div>
          {categoriaInfo.map((categoria, index) => (
            <TableCategories key={index} categoriaInfo={categoria} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
