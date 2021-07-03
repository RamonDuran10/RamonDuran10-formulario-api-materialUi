import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

const useStyles = makeStyles((theme) =>({
    table: {
        minWidth: 700,
      },
      margin: {
        margin: theme.spacing(1),
      },
}))


const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  


function DataTable(props) {
  
    
    const classes = useStyles();
    
    return (

        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>User information</StyledTableCell>
              <StyledTableCell align="right">ID</StyledTableCell>
              <StyledTableCell align="right">name</StyledTableCell>
              <StyledTableCell align="right">username</StyledTableCell>
              <StyledTableCell align="right"> Email</StyledTableCell>
              <StyledTableCell align="right">
                           <Button className={classes.margin} size="small" variant="contained" color="default">
                                Add User
                                <AddIcon/>
                                <EmojiPeopleIcon/>  
                            </Button>
              </StyledTableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
              {
                  props.infoUsers.map((user) =>{
                      return (

                       <StyledTableRow key={user.id} >
                            <StyledTableCell component="th" scope="row">User information</StyledTableCell>
                            <StyledTableCell align="right">{user.id}</StyledTableCell>
                            <StyledTableCell align="right">{user.name}</StyledTableCell>
                            <StyledTableCell align="right">{user.username}</StyledTableCell>
                            <StyledTableCell align="right">{user.email}</StyledTableCell>
                            <StyledTableCell align="right">

                            <Button onClick={() => props.handleDelete(user.id)}className={classes.margin} size="small" variant="contained" color="secondary">
                                Delete
                                <DeleteIcon/>  
                            </Button>

                            <Button  size="small" variant="contained" color="default">
                                Edit
                                <EditIcon/>
                            </Button>

                            </StyledTableCell>
                    </StyledTableRow>
                      )
                  })
              }        
          </TableBody>
        </Table>
      </TableContainer>
    )
}

export default DataTable;
