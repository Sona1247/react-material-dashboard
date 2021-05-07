import React, { useState, useEffect } from "react";
import "../styles/Table.scss";
import "../mediaqueries/TableMediaquery.scss";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import tableOval1 from "../images/tableOval1.png";
import tableOval2 from "../images/tableOval2.png";
import tableOval3 from "../images/tableOval3.png";
import moreIcon from "../images/moreIcon.png";
import editIcon from "../images/editIcon.png";
import directionImage from "../images/tableDirection.png";
const columns = [
  { id: "name", label: "Order ID", minWidth: 170 },
  { id: "code", label: "Customer", minWidth: 100 },
  {
    id: "population",
    label: "Date",
    minWidth: 200,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Status",
    minWidth: 100,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Actions",
    minWidth: 100,
    align: "left",
    format: (value) => value.toFixed(2),
  },
];
function createData(name, code, population, size, density) {
  return { name, code, population, size, density };
}

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});
const Tables = (props) => {
  useEffect(() => {
    console.log(props.table);
  }, []);

  const rows = [
    createData(
      props.table.data.tableFirstRow.firstId,
      props.table.data.tableFirstRow.customerName,
      props.table.data.tableFirstRow.date,
      [<img src={tableOval1} alt="" />, props.table.data.tableFirstRow.status],
      [<img src={moreIcon} alt="" />, <img src={editIcon} alt="" />]
    ),
    createData(
      props.table.data.tableSecondRow.secondId,
      props.table.data.tableSecondRow.customerName,
      props.table.data.tableSecondRow.date,
      [<img src={tableOval2} alt="" />, props.table.data.tableSecondRow.status],
      [<img src={moreIcon} alt="" />, <img src={editIcon} alt="" />]
    ),
    createData(
      props.table.data.tableThirdRow.thirdId,
       props.table.data.tableThirdRow.customerName,
       props.table.data.tableThirdRow.date,
      [<img src={tableOval3} alt="" />, props.table.data.tableThirdRow.status],
      [<img src={moreIcon} alt="" />, <img src={editIcon} alt="" />]
    ),
    createData(
      props.table.data.tableFourthRow.fourthId,
      props.table.data.tableFourthRow.customerName,
      props.table.data.tableFourthRow.date,
      [<img src={tableOval2} alt="" />, props.table.data.tableFourthRow.status],
      [<img src={moreIcon} alt="" />, <img src={editIcon} alt="" />]
    ),
    createData(
      props.table.data.tableFifthRow.fifthId,
      props.table.data.tableFifthRow.customerName,
      props.table.data.tableFifthRow.date,
      [<img src={tableOval1} alt="" />, props.table.data.tableFifthRow.status],
      [<img src={moreIcon} alt="" />, <img src={editIcon} alt="" />]
    ),
    createData(
      props.table.data.tableSixthRow.sixthId,
      props.table.data.tableSixthRow.customerName,
      props.table.data.tableSixthRow.date,
      [<img src={tableOval1} alt="" />, props.table.data.tableSixthRow.status],
      [<img src={moreIcon} alt="" />, <img src={editIcon} alt="" />]
    ),
    createData(
      props.table.data.tableSeventhRow.seventhId,
      props.table.data.tableSeventhRow.customerName,
      props.table.data.tableSeventhRow.date,
      [
        <img src={tableOval2} alt="" />,
        props.table.data.tableSeventhRow.status,
      ],
      [<img src={moreIcon} alt="" />, <img src={editIcon} alt="" />]
    ),
    createData(
      props.table.data.tableEigthtRow.eigthtId,
      props.table.data.tableEigthtRow.customerName,
      props.table.data.tableEigthtRow.date,
      [<img src={tableOval1} alt="" />, props.table.data.tableEigthtRow.status],
      [<img src={moreIcon} alt="" />, <img src={editIcon} alt="" />]
    ),
    createData(
      props.table.data.tableNinethRow.ninethId,
      props.table.data.tableNinethRow.customerName,
      props.table.data.tableNinethRow.date,
      [<img src={tableOval2} alt="" />, props.table.data.tableNinethRow.status],
      [<img src={moreIcon} alt="" />, <img src={editIcon} alt="" />]
    ),
  ]

  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="table-content">
      <div className="table-size">
      
        <div className="table-header">
          <div className="table-header-first-side">
            <h2 className="table-header-title">Latest Orders</h2>
            <p className="table-header-value">3200 total</p>
          </div>
          <div className="table-header-second-side">
            <h3 className="table-header-subtitle">Sort by: Newest</h3>
            <img
              src={directionImage}
              alt="direction"
              className="table-direction"
            />
            <button className="table-button">NEW ENTRY</button>
          </div>
        </div>
        <Paper className={classes.root}>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column, key) => (
                    <TableCell
                      key={key}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, key) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={key}>
                        {columns.map((column, key) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={key} align={column.align}>
                              {column.format && typeof value === "number"
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
            rowsPerPageOptions={[5, 10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </div>
  );
};

export default Tables;
