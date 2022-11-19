import TableComponent from "../../components/TableComponent/TableComponent.jsx";
import React, { useEffect, useState } from "react";
import {dataCountries} from '../../data/dataCountries.jsx'

/*
interface Column {
  id: 'name' | 'code' | 'tvl' | 'size' | 'rate';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}*/

const columns = [
  { id: 'logo', label: '', minWidth: 50 },
  { id: 'name', label: 'Name', minWidth: 170 },
  {
    id: 'TVL',
    label: 'TVL',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'nombreFans',
    label: 'Team Size',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'ratio',
    label: 'Win Rate',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
];

/*
interface Data {
  name: string;
  code: string;
  tvl: number;
  size: number;
  rate: number;
}
*/


function createData2(rows){
  let tot_tvl=0
  for(let i=0;i<rows.length;i++){
    if(rows[i].TVL) tot_tvl+=rows[i].TVL
  }
  let new_rows=[]
  for(let i=0;i<rows.length;i++){
      let row=rows[i]
      row['ratio']=tot_tvl/row.TVL
      new_rows.push(row)
  }
  return new_rows
}

const rows=createData2(dataCountries)

function App() {
  return (
  <div>
    <TableComponent rows={rows} columns={columns}/>
  </div>
  );
}

export default App;