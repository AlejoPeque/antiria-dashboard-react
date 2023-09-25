import React from 'react';
import './table.css'

export default function TableData({data, header}) {
  return (

        <ul className='tableGridRows'>
            {header.map((row, i) => {
              return <li key={row + i}>{data[row]}</li>
            })}
        </ul>
  );
}
