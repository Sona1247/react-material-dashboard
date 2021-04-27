import React from 'react'
import "../styles/Table.scss"
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import tableOval1 from "../images/tableOval1.png";
import tableOval2 from "../images/tableOval2.png";
import tableOval3 from "../images/tableOval3.png";
import moreIcon from "../images/moreIcon.png";
import editIcon from "../images/editIcon.png";
const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('23412355-21', "Adam Denisov", "04/28/2018",  [<img src={tableOval1} alt=""/>,'Delivered'], [<img src={moreIcon} alt=""/>,<img src={editIcon} alt=""/> ]),
    createData('234123355-23',"Ainara Vergara", "04/28/2018", [<img src={tableOval2} alt=""/>,'Pending'], [<img src={moreIcon} alt=""/>,<img src={editIcon} alt=""/> ]),
    createData('23412355-24',"Chioke Okonkwo", "04/28/2018",  [<img src={tableOval3} alt=""/>,'Refund'], [<img src={moreIcon} alt=""/>,<img src={editIcon} alt=""/> ]),
    createData('2346123555-25', "Erin Green", "04/28/2018", [<img src={tableOval2} alt=""/>,'Delivered'], [<img src={moreIcon} alt=""/>,<img src={editIcon} alt=""/> ]),
    createData('234123595-26', "Iruka Akuchi", "04/28/2018", [<img src={tableOval1} alt=""/>,'Delivered'], [<img src={moreIcon} alt=""/>,<img src={editIcon} alt=""/> ]),
    createData('234112355-28', "Iruka Akuchi", "04/28/2018", [<img src={tableOval1} alt=""/>,'Delivered'], [<img src={moreIcon} alt=""/>,<img src={editIcon} alt=""/> ]),
  ];
const Tables = () => {
    const classes = useStyles();

    return (
      <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell align="right">Customer</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs[0]}{row.carbs[1]}</TableCell>
                <TableCell align="right">{row.protein[0]}{row.protein[1]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    );
  
}

export default Tables




