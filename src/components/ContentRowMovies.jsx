import React from 'react';
import { Cards } from './index'


export default function ContentRowMovies({usersCount, productInfo}) {
  return (
      <div className='row'>
          <Cards
            title = "User"
            quantity = {usersCount}
            color = "primary"
            icon = "fa-user" />
          <Cards
            title = "Products"
            quantity = {productInfo.countByCategory.Producto}
            color = "success"
            icon = "fa-ring" />
          <Cards
            title = "Visits"
            quantity = {productInfo.countByCategory.Servicio}
            color = "warning"
            icon = "fa-globe" />
      </div>
  )
}

