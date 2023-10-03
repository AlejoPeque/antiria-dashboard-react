const TableProducts = ({productInfo}) => {
  return (
    <>
      <div class="row">
        <div class="col">{productInfo.id}</div>
        <div class="col">{productInfo.nombre}</div>
        <div class="col">
          {productInfo.descripcion}
        </div>
        <div class="col">$ {productInfo.precio}</div>
        <div class="col">{productInfo.id_user}</div>
        <div class="col">{productInfo.id_marca}</div>
        <div class="col">{productInfo.id_categoria}</div>
      </div>
    </>
  );
};

export default TableProducts;
