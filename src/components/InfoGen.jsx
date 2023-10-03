import * as FaIcons from "react-icons/fa";

const InfoGen = ({userInfo, productInfo, categoriaInfo}) => {
  console.log(userInfo)
  console.log(productInfo)
  console.log(categoriaInfo)
  return (
    <div className="contenedorPages">
      <div className="containerInfoGen">
        <div>
          <p>
            <FaIcons.FaUserAlt className="me-2" />
            Users
          </p>
          <p>{userInfo.length}</p>
        </div>
        <div>
          <p>
            <FaIcons.FaMagic className="me-2" />
            Products
          </p>
          <p>{productInfo.length}</p>
        </div>
        <div>
          <p>
            <FaIcons.FaChessBoard className="me-2" />
            Categories
          </p>
          <p>{categoriaInfo.length}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoGen;