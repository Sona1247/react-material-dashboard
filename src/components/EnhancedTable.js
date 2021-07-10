import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import tableAvatar from "../images/tableAvatarPhoto.png";
import "../styles/EnhancedTable.scss";
import PropTypes from "prop-types";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import EnhancedTableToolbar from "./EnhancedTableToolbar"
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import moreIcon from "../images/moreIcon.png";
import editIcon from "../images/editIcon.png";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: "name", numeric: false, disablePadding: true, label: "User Name" },
  { id: "id", numeric: true, disablePadding: false, label: "User Id" },
  { id: "number", numeric: true, disablePadding: false, label: "Phone Number" },
  { id: "email", numeric: true, disablePadding: false, label: "Email Address" },
  {
    id: "date",
    numeric: true,
    disablePadding: false,
    label: "Account Created",
  },
  {
    id: "density",
    label: "Actions",
    minWidth: 100,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function EnhancedTableHead(props) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all users" }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};



const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
}));

export default function EnhancedTable() {
  const data1 = useSelector((state) => state.allDataReducer);
  useEffect(() => {
    console.log(data1);
  });
  function createData(name, id, number, email, date, density) {
    return { name, id, number, email, date, density };
  }

  const rows = [
    createData(
      [<img src={tableAvatar} alt="avatar" />, data1.data.mailFirstRow.name],
      data1.data.mailFirstRow.id,
      data1.data.mailFirstRow.number,
      data1.data.mailFirstRow.mail,
      data1.data.mailFirstRow.date,
      [<img src={moreIcon} alt="" className="moreImage" />, <img src={editIcon} alt="" className="editImage"/>]
    ),
    createData(
      [<img src={tableAvatar} alt="avatar" />, data1.data.mailSecondRow.name],
      data1.data.mailSecondRow.id,
      data1.data.mailSecondRow.number,
      data1.data.mailSecondRow.mail,
      data1.data.mailSecondRow.date,
      [<img src={moreIcon} alt="" className="moreImage" />, <img src={editIcon} alt="" className="editImage"/>]
    ),
    createData(
      [<img src={tableAvatar} alt="avatar" />, data1.data.mailThirdRow.name],
      data1.data.mailThirdRow.id,
      data1.data.mailThirdRow.number,
      data1.data.mailThirdRow.mail,
      data1.data.mailThirdRow.date,
      [<img src={moreIcon} alt="" className="moreImage" />, <img src={editIcon} alt="" className="editImage" />]
    ),
    createData(
      [<img src={tableAvatar} alt="avatar" />, data1.data.mailFourthRow.name],
      data1.data.mailFourthRow.id,
      data1.data.mailFourthRow.phone,
      data1.data.mailFourthRow.mail,
      data1.data.mailFourthRow.date,
      [<img src={moreIcon} alt="" className="moreImage" />, <img src={editIcon} alt="" className="editImage" />]
    ),
    createData(
      [<img src={tableAvatar} alt="avatar" />, data1.data.mailFifthRow.name],
      data1.data.mailFifthRow.id,
      data1.data.mailFifthRow.number,
      data1.data.mailFifthRow.email,
      data1.data.mailFifthRow.date,
      [<img src={moreIcon} alt="" className="moreImage" />, <img src={editIcon} alt="" className="editImage" />]
    ),
    createData(
      [<img src={tableAvatar} alt="avatar" />, data1.data.mailSixthRow.name],
      data1.data.mailSixthRow.id,
      data1.data.mailSixthRow.number,
      data1.data.mailSixthRow.email,
      data1.data.mailSixthRow.date,
      [<img src={moreIcon} alt="" className="moreImage" />, <img src={editIcon} alt="" className="editImage"/>]
    ),
    createData(
      [<img src={tableAvatar} alt="avatar" />, data1.data.mailSeventhRow.name],
      data1.data.mailSeventhRow.id,
      data1.data.mailSeventhRow.number,
      data1.data.mailSeventhRow.email,
      data1.data.mailSeventhRow.date,
      [<img src={moreIcon} alt="" className="moreImage" />, <img src={editIcon} alt="" className="editImage" />]
    ),
    createData(
      [<img src={tableAvatar} alt="avatar" />, data1.data.mailEighthRow.name],
      data1.data.mailEighthRow.id,
      data1.data.mailEighthRow.number,
      data1.data.mailEighthRow.email,
      data1.data.mailEighthRow.date,
      [<img src={moreIcon} alt="" className="moreImage" />, <img src={editIcon} alt="" className="editImage" />]
    ),
    createData(
      [<img src={tableAvatar} alt="avatar" />, data1.data.mailNinethRow.name],
      data1.data.mailNinethRow.id,
      data1.data.mailNinethRow.number,
      data1.data.mailNinethRow.email,
      data1.data.mailNinethRow.date,
      [<img src={moreIcon} alt="" className="moreImage"/>, <img src={editIcon} alt="" className="editImage"/>]
    ),
  ];
  const classes = useStyles();
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(9);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.email);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };
  const handleDeleteAllChecked = (event) => {
    if (event.target.checked) {
      const newSelecteds = 0;
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, email) => {
    const selectedIndex = selected.indexOf(email);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, email);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root} id="enhanced-table">
      <div className="email-table-size">
        <Paper className={classes.paper}>
          <EnhancedTableToolbar
            numSelected={selected.length}
            onDeletedChecked={handleDeleteAllChecked}
          />
          <TableContainer>
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              
              aria-label="enhanced table"
            >
              <EnhancedTableHead
                classes={classes}
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.email);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.email)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        color="primary"
                        key={row.email}
                        selected={isItemSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={isItemSelected}
                            color="primary"
                            inputProps={{ "aria-labelledby": labelId }}
                          />
                        </TableCell>
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          <div className="tableAvatarPic"> {row.name}</div>
                        </TableCell>
                        <TableCell align="center">{row.id}</TableCell>
                        <TableCell align="right">{row.number}</TableCell>
                        <TableCell align="left">{row.email}</TableCell>
                        <TableCell align="right">{row.date}</TableCell>
                        <TableCell align="left">{row.density}</TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[9, 10, 15]}
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
}
