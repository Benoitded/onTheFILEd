import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import "./TableComponent.css";


interface Column {
  id: 'name' | 'code' | 'tvl' | 'size' | 'rate';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'tvl',
    label: 'TVL',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Team Size',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'rate',
    label: 'Win Rate',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
];

interface Data {
  name: string;
  code: string;
  tvl: number;
  size: number;
  rate: number;
}

function createData(
  name: string,
  code: string,
  tvl: number,
  size: number,
): Data {
  const rate = tvl / size;
  return { name, code, tvl, size, rate };
}

const rows = [
  createData('Spain', 'SP', 355523, 244),
  createData('Italy', 'IT', 334732, 90),
  createData('United States', 'US', 3847293, 983),
  createData('Canada', 'CA', 374992, 403),
  createData('Germany', 'DE', 830048, 374),
  createData('Mexico', 'MX', 389400, 366),
  createData('Japan', 'JP', 393843, 30),
  createData('France', 'FR', 3938432, 1998),
  createData('United Kingdom', 'GB', 493472, 99),
  createData('Argentina', 'NG', 3746249, 67),
  createData('Brazil', 'BR', 4849937, 1200),
  createData('Morocco', 'BR', 2938432, 800),
];

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

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [sortId,setSortId] = React.useState('name');

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  SortRows(rows,sortId)

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  onClick={()=>{setSortId(column.id)}}
                  style={{ minWidth: column.minWidth, backgroundColor:'rgba(0,0,0,0.9)',fontSize:16,fontWeight:'bold',color:'white' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row,index) => {
                let styleRow=index%2==0?{backgroundColor:'rgba(0,0,0,0.8)',color:'white'}:{backgroundColor:'rgba(0,0,0,0.7)',color:'white'}
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.code}
                    style={styleRow}
                    onClick={()=>{console.log('clicked',row.code)}}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} style={{backgroundColor:'transparent',color:'white'}}>
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
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        style={{backgroundColor:'rgba(0,0,0,0.9)',color:'white'}}
      />
    </Paper>
  );
}
