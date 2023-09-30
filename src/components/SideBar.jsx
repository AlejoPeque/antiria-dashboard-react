import React from "react";
import image from "../assets/images/logotipo.png";
import PropTypes from "prop-types";
import {
  ContentWrapper,
  GenresInDb,
  LastProductInDb,
  ContentRowMovies,
  TableGrid,
  SearchMovies,
  NotFound,
} from "./index";
import { Link, Route, Routes } from "react-router-dom";

import { useState, useEffect } from "react";

export default function SideBar(props) {
  const [userInfo, setUserInfo] = useState({
    success: true,
    endPoint: "/api/users",
  });
  const [productInfo, setProductInfo] = useState({
    success: true,
    endPoint: "/api/products",
  });

  async function fetchData(endpoint, setState) {
    try {
      const apiFetch = await fetch(endpoint);
      const data = await apiFetch.json();

      console.log(data);
    } catch (e) {
      console.error(e);
    }
  }

  function componentDidMount() {
    fetch("/api/users")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((data) => {
        setUserInfo([
          userInfo.success,
          userInfo.endPoint,
          (userInfo.user = data.data),
        ]);
        console.log(userInfo);
      });
    fetch("/api/products")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((data) => {
        setProductInfo([
          productInfo.success,
          productInfo.endPoint,
          (productInfo.products = data.data),
        ]);
        console.log(productInfo);
      });
  }
  componentDidMount();

  useEffect(() => {
    async function data() {
      await Promise.all([
        fetchData("/api/users", setUserInfo),
        fetchData("/api/products", setProductInfo),
      ]);
    }
    data();
  }, []);

  return (
    <>
      <ul
        className="navbar-nav bg-danger bg-gradient sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <Link
          exact
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/"
        >
          <div style={{ padding: "1.3rem" }}>
            <img className="w-100" src={image} alt="Antiria" />
          </div>
        </Link>

        <hr className="sidebar-divider my-0" />
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard - Antiria</span>
          </Link>
        </li>
        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Actions</div>
        {props.sideBar.map((nav) =>
          nav.title ? (
            <li key={nav.id} className="nav-item">
              <Link className="nav-link collapsed" to={nav.route}>
                <i className="fas fa-fw fa-folder"></i>
                <span>{nav.title}</span>
              </Link>
            </li>
          ) : null
        )}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>

      <Routes>
        <Route
          path="/"
          exact
          element={
            <ContentWrapper productInfo={productInfo} userInfo={userInfo} />
          }
        />

        <Route
          path="/genres"
          exact
          element={<GenresInDb categories={Object.keys(productInfo)} />}
        />

        <Route
          path="/lastProduct"
          exact
          element={<LastProductInDb lastProduct={productInfo} />}
        />

        <Route
          path="/stats"
          exact
          element={
            <ContentRowMovies userInfo={userInfo} productInfo={productInfo} />
          }
        />

        <Route
          path="/tableUsers"
          exact
          element={
            <TableGrid
              data={userInfo}
              header={["id", "name", "email", "detail"]}
            />
          }
        />

        <Route
          path="/tableProducts"
          exact
          element={
            <TableGrid
              data={productInfo}
              header={["id", "name", "description", "detail", "category"]}
            />
          }
        />

        <Route path="/searchmovies" exact element={SearchMovies} />
        <Route element={NotFound} />
      </Routes>
    </>
  );
}

// PROP TYPES

SideBar.propTypes = {
  sideBar: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

SideBar.defaultProps = {
  sideBar: [
    {
      id: "default",
      title: "Default",
    },
  ],
};
