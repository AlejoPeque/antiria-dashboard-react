const TableCategories = ({categoriaInfo}) => {
  return (
    <>
      <div class="row">
        <div class="col">{categoriaInfo.id}</div>
        <div class="col">{categoriaInfo.nombre}</div>
      </div>
    </>
  );
};

export default TableCategories;
