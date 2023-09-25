import React from 'react'
import './table.css'

export default function HeaderFooter({header}) {
  return (
        <ul className='headerFooter'>
          {header.map((col, i) => {
            return <li key={col + i}>{col}</li>
          })}
        </ul>
  );
}

