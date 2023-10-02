import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

//Components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

//Pages
import Home from "./pages/Home";
import Users from "./pages/Users";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import { useEffect, useState } from "react";

function App() {
  const [userInfo, setUserInfo] = useState({
    success: true,
    endPoint: "/api/users",
    count: 0,
    data: null,
  });
  const [productInfo, setProductInfo] = useState({
    success: true,
    endPoint: "/api/products",
    count: 0,
    data: null,
  });
  const [categoriaInfo, setCategoriaInfo] = useState({
    success: true,
    endPoint: "/api/categorias",
    count: 0,
    data: null,
  });
  async function fetchData(endpoint, setState) {
    try {
      const apiFetch = await fetch(endpoint);
      const data = await apiFetch.json();

      setState(data.data);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    async function data() {
      await Promise.all([
        fetchData("/api/users", setUserInfo),
        fetchData("/api/products", setProductInfo),
        fetchData("/api/categorias", setCategoriaInfo),
      ]);
    }
    data();
  }, []);

  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="content w-100">
          <Navbar />
          <Routes>
            <Route
              path="/"
              exact={true}
              element={
                <Home
                  userInfo={userInfo}
                  productInfo={productInfo}
                  categoriaInfo={categoriaInfo}
                />
              }
            ></Route>
            <Route
              path="/users"
              exact={true}
              element={<Users userInfo={userInfo} />}
            ></Route>
            <Route
              path="/products"
              exact={true}
              element={<Products productInfo={productInfo} />}
            ></Route>
            <Route
              path="/categories"
              exact={true}
              element={<Categories categoriaInfo={categoriaInfo} />}
            ></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
