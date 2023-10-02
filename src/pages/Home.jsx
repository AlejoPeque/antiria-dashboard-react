import InfoGen from "../components/InfoGen";
import Categories from "./Categories";
import Products from "./Products";
import Users from "./Users";

const Home = ({userInfo, productInfo, categoriaInfo}) => {
  return (
    <>
      <InfoGen userInfo={userInfo} productInfo={productInfo} categoriaInfo={categoriaInfo}/>
      <Users userInfo={userInfo}/>
      <Products productInfo={productInfo}/>
      <Categories categoriaInfo={categoriaInfo}/>
    </>
  );
};

export default Home;
