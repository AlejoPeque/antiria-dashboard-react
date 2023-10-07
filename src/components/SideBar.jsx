import "./Sidebar.css";
import React, { useEffect } from "react";

function Sidebar() {
  useEffect(() => {
    const handleMenuClick = (e) => {
      const clickedItem = e.currentTarget;
      const submenu = clickedItem.querySelector(".sub-menu"); // Seleccione solo .sub-menu dentro del elemento actual

      // Cierra cualquier sub-menú activo en cualquier .menu
      const menuItems = document.querySelectorAll(".menu > ul > li");
      menuItems.forEach((item) => {
        if (item !== clickedItem) {
          item.classList.remove("active");
          const itemSubmenu = item.querySelector(".sub-menu");
          if (itemSubmenu) {
            itemSubmenu.style.display = "none";
          }
        }
      });

      // Si submenu ya tiene display: block, cambia a display: none
      if (submenu) {
        if (submenu.style.display === "block") {
          submenu.style.display = "none";
          clickedItem.classList.remove("active"); // Remueve la clase "active" si el submenú se cierra
        } else {
          submenu.style.display = "block";
          clickedItem.classList.add("active"); // Añade la clase "active" si el submenú se abre
        }
      }

      // Añade .active al elemento <li> actual
      clickedItem.classList.add("active");
    };

    const handleMenuBtnClick = () => {
      const sidebar = document.querySelector(".sidebar");
      if (sidebar) {
        sidebar.classList.toggle("active");
      }
    };

    const menuItems = document.querySelectorAll(".menu > ul > li");
    menuItems.forEach((item) => {
      item.addEventListener("click", handleMenuClick);
    });

    const menuBtn = document.querySelector(".menu-btn");
    if (menuBtn) {
      menuBtn.addEventListener("click", handleMenuBtnClick);
    }

    // Limpia los event listeners al desmontar el componente
    return () => {
      menuItems.forEach((item) => {
        item.removeEventListener("click", handleMenuClick);
      });

      if (menuBtn) {
        menuBtn.removeEventListener("click", handleMenuBtnClick);
      }
    };
  }, []);

  return (
    <div className="container">
      <div className="sidebar active">
        <div className="menu-btn">
          <i className="ph-bold ph-caret-left"></i>
        </div>
        <div className="head">
          <div className="user-img">
            <img src="/user.jpg" alt="user" />
          </div>
          <div className="user-details">
            <p className="title">Web Developer</p>
            <p className="name">Alejo Pequeño</p>
          </div>
        </div>
        <div className="nav">
          <div className="menu">
            <p className="title">Main</p>
            <ul>
              <li className="active">
                <a href="#">
                  <i className="icon ph-bold ph-house-simple"></i>
                  <span className="text">Dashboard</span>
                </a>
              </li>
              <li className="submenus">
                <div href="#">
                  <i className="icon ph-bold ph-archive"></i>
                  <span className="text">Tables</span>
                  <i className="arrow ph-bold ph-caret-down"></i>
                </div>
                <ul className="sub-menu">
                  <li>
                    <a href="#">
                      <span className="text">Users</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="text">Products</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <i className="icon ph-bold ph-baseball"></i>
                  <span className="text">Last product added</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon ph-bold ph-cell-signal-full"></i>
                  <span className="text">Charts</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="menu">
            <p className="title">Settings</p>
            <ul>
              <li>
                <a href="#">
                  <i className="icon ph-bold ph-gear-six"></i>
                  <span className="text">Settings</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="menu">
          <p className="title">Account</p>
          <ul>
            <li>
              <a href="#">
                <i className="icon ph-bold ph-info"></i>
                <span className="text">Help</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="icon ph-bold ph-sign-out"></i>
                <span class="text">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
