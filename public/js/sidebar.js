document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".menu > ul > li");
  const menuBtn = document.querySelector(".menu-btn");
  const sidebar = document.querySelector(".sidebar");

  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("click", function (e) {
      // Cierra cualquier sub-menú activo en cualquier .menu
      menuItems.forEach(function (item) {
        if (item !== menuItem) {
          item.classList.remove("active");
          item.querySelector("ul").style.display = "none";
        }
      });

      // Añade .active al elemento <li> actual
      menuItem.classList.add("active");

      // Abre el sub-menú
      const subMenu = menuItem.querySelector("ul");
      if (subMenu.style.display === "none" || subMenu.style.display === "") {
        subMenu.style.display = "block";
      } else {
        subMenu.style.display = "none";
      }
    });
  });

  menuBtn.addEventListener("click", function () {
    sidebar.classList.toggle("active");
  });
});
