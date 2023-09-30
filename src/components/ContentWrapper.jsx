import React from "react";
import { TopBar, ContentRowTop, Footer, TableGrid } from "./index";

export default function ContentWrapper({ userInfo, productInfo }) {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <TopBar />

        <ContentRowTop
          categories={productInfo.products}
          usersCount={userInfo.user}
          productInfo={productInfo.products}
        />

        <TableGrid
          data={productInfo}
          header={["id", "name", "description", "detail", "category"]}
        />

        <TableGrid
          data={userInfo}
          header={["id", "name", "email", "detail"]}
        />
      </div>
      <Footer />
    </div>
  );
}
