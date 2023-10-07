import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

//Components
import Sidebar from "./components/Sidebar";

//Pages
import Home from "./pages/Home";
import Users from "./pages/Users";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" exact={true} element={<Home />}></Route>
          <Route path="/users" exact={true} element={<Users />}></Route>
          <Route path="/products" exact={true} element={<Products />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
