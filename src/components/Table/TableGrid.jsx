import React from 'react'
import './table.css'
import { TableRows, HeaderFooter } from '../index'

export default function MoviesTable({data, header}) {
  return (
          <div className='containerMoviesTable'>
            <div className='moviesTableContainer'>
              <HeaderFooter  header = {header} />

              <TableRows data = {data} header = {header}/>
    
              <HeaderFooter  header = {header}/>
            </div>
          </div>

  );
}

