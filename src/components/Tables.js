import React from 'react'
import "../styles/Table.scss"
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import tableOval1 from "../images/tableOval1.png";
import tableOval2 from "../images/tableOval2.png";
import tableOval3 from "../images/tableOval3.png";
import moreIcon from "../images/moreIcon.png";
import editIcon from "../images/editIcon.png";
import directionImage from "../images/tableDirection.png";
const columns = [
  { id: 'name', label: 'Order ID', minWidth: 170 },
  { id: 'code', label: 'Customer', minWidth: 100 },
  {
    id: 'population',
    label: 'Date',
    minWidth: 200,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Status',
    minWidth: 100,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Actions',
    minWidth: 100,
    align: 'left',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size,density) {
  return { name, code, population, size, density };
}

const rows = [
  createData('23412355-21', "Adam Denisov", "04/28/2018",  [<img src={tableOval1} alt=""/>,'Delivered'], [<img src={moreIcon} alt=""/>,<img src={editIcon} alt=""/> ]),
  createData('234123355-23',"Ainara Vergara", "04/28/2018", [<img src={tableOval2} alt=""/>,'Pending'], [<img src={moreIcon} alt=""/>,<img src={editIcon} alt=""/> ]),
  createData('23412355-24',"Chioke Okonkwo", "04/28/2018",  [<img src={tableOval3} alt=""/>,'Refund'], [<img src={moreIcon} alt=""/>,<img src={editIcon} alt=""/> ]),
  createData('2346123555-25', "Erin Green", "04/28/2018", [<img src={tableOval2} alt=""/>,'Delivered'], [<img src={moreIcon} alt=""/>,<img src={editIcon} alt=""/> ]),
  createData('234123595-26', "Iruka Akuchi", "04/28/2018", [<img src={tableOval1} alt=""/>,'Delivered'], [<img src={moreIcon} alt=""/>,<img src={editIcon} alt=""/> ]),
  createData('234112355-28', "Iruka Akuchi", "04/28/2018", [<img src={tableOval1} alt=""/>,'Delivered'], [<img src={moreIcon} alt=""/>,<img src={editIcon} alt=""/> ]),
  
  createData('2346123555-25', "Sona Jabrailova", "04/28/2018", [<img src={tableOval2} alt=""/>,'Delivered'], [<img src={moreIcon} alt=""/>,<img src={editIcon} alt=""/> ]),
  createData('23412355-21', "Rahil Aliyev", "04/28/2018",  [<img src={tableOval1} alt=""/>,'Delivered'], [<img src={moreIcon} alt=""/>,<img src={editIcon} alt=""/> ]),
  createData('234123355-23',"Ali Qasimzadeh", "04/28/2018", [<img src={tableOval2} alt=""/>,'Pending'], [<img src={moreIcon} alt=""/>,<img src={editIcon} alt=""/> ]),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});
const Tables = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


    return (
      <div className="table-content">
        <div className="table-header">
          <div className="table-header-first-side">
            <h2 className="table-header-title">Latest Orders</h2>
            <p className="table-header-value">3200 total</p>
          </div>
<div className="table-header-second-side">
  <h3 className="table-header-subtitle">Sort by: Newest</h3>
  <img src={directionImage} alt="direction" className="table-direction"/>
  <button className="table-button">NEW ENTRY</button>
</div>
        </div>
      <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
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
        rowsPerPageOptions={[5,10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
      </div>
    );
  
}

export default Tables












  