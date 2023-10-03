import React from "react";
import TableProducts from "../Table/TableProducts";

const Products = ({ productInfo }) => {
  return (
    <div className="containerPages">
      <div className="containerTablas">
        <div className="container">
          <h3 className="tablaName">Products</h3>
          <div className="row">
            <div className="col colTitle">id</div>
            <div className="col colTitle">nombre</div>
            <div className="col colTitle">descripcion</div>
            <div className="col colTitle">precio</div>
            <div className="col colTitle">id_user</div>
            <div className="col colTitle">id_marca</div>
            <div className="col colTitle">id_categoria</div>
          </div>
          {Array.isArray(productInfo) &&
            productInfo.map((product, index) => (
              <TableProducts key={index} productInfo={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
