import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import "./TableComponent.css";

import {useNavigate} from 'react-router-dom';

function SortRows(rows,id){
    let new_rows=rows.sort((a,b)=>{
        let fa = a[id],
        fb = b[id];

        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    })
    return (new_rows)
}

export default function StickyHeadTable(data) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [sortId,setSortId] = React.useState('name');
  const [hoverId,setHoverId] = React.useState(null);
  const [actualData,setActualData] = React.useState(data);

  const navigate = useNavigate();

  let rows=actualData.rows
  let columns=actualData.columns

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  if(sortId!='logo'){
    let new_rows=SortRows(rows,sortId)
    rows = new_rows
  }


  return (
    <Paper sx={{ width: '100%', overflow: 'hidden',borderRadius:'16px' }}>
      <TableContainer sx={{  }} onMouseLeave={()=>{setHoverId(null)}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  onClick={()=>{setSortId(column.id)}}
                  style={{ minWidth: column.minWidth, backgroundColor:'#141414',fontSize:16,fontWeight:'bold',color:'white' }}
                >
                    {column.label}
                  {/*<p align={column.align} style={{backgroundColor:'red',width:'fit-content',padding:10,borderRadius:0,backgroundColor:'rgba(0,0,0,0.8)'}}>{column.label}</p>*/}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .map((row,index) => {
                let styleRow=hoverId==index?{backgroundColor:'rgba(0,0,0,0.8)',color:'white'}:{backgroundColor:'rgba(0,0,0,0.9)',color:'white'}
                return (
                  <TableRow
                    hover
                    onMouseEnter={()=>{setHoverId(index)}}
                    role="checkbox"
                    tabIndex={-1}
                    key={row.code}
                    style={styleRow}
                    onClick={()=>navigate('/'+row.name)}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return(
                        <TableCell key={column.id} align={column.align} style={{color:'white',fontSize:16,borderColor:'#737373'}}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
