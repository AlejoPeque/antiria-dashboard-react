import React from 'react';
import './table.css'
import { TableData } from '../index'

export default function TableRows({data, header}) {
  

  return (
    data.map( (row, i) => {
      return <TableData key={row + i} data = {{...row}} header = {header} />})
  )
}

