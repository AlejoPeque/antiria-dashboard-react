import React from 'react';
import { Cards } from './index'


export default function ContentRowMovies({userInfo, productInfo}) {
  return (
      <div className='row'>
          <Cards
            title = "User"
            quantity = {userInfo.user}
            color = "primary"
            icon = "fa-user" />
          <Cards
            title = "Products"
            quantity = {productInfo}
            color = "success"
            icon = "fa-ring" />
          <Cards
            title = "Visits"
            quantity = {productInfo}
            color = "warning"
            icon = "fa-globe" />
      </div>
  )
}

