import React from "react";
import { ContentRowMovies, LastProductInDb, GenresInDb } from "./index";

export default function ContentRowTop({ categories, usersCount, productInfo }) {
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
      </div>
      <ContentRowMovies usersCount={usersCount} productInfo={productInfo} />

      <div className="row">
        <LastProductInDb lastProduct={productInfo} />
        <GenresInDb categories={categories} />
      </div>
    </div>
  );
}
