import React from 'react';
import { TopBar, ContentRowTop, Footer, TableGrid } from './index'

export default function ContentWrapper({userInfo, productInfo}) {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
        <div id='content'>
              <TopBar />
              
              <ContentRowTop 
                categories = {Object.keys(productInfo.countByCategory)} 
                usersCount = {userInfo.count} 
                productInfo = {productInfo}
              />

              <TableGrid 
                data = {productInfo.products} 
                header = {['id', 'name', 'description', 'detail', 'category']}
              />
              
              <TableGrid 
                data = {userInfo.users} 
                header = {['id', 'name', 'email', 'detail']}
              />
        </div>
              <Footer /> 
    </div>
  );
}