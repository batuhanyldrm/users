import React, { useEffect, useState } from 'react'
import { fetchUsers } from '../actions/userAction';
import { connect } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import StudentList from './StudentList';
import { Button, IconButton, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddUser from './AddUser';

const Students = (props) => {

    const {
        fetchUsers,
        users
    } = props

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
        };

    useEffect(() => {
        fetchUsers()
      }, [])

  return (
    <div>
        <AddUser
            open={open}
            handleClose={handleClose}
            users={users}
        />
        <div style={{display:"flex", justifyContent:"end"}}>
            <TextField 
                style={{marginTop:"5px"}} 
                id="outlined-basic" 
                label="Search" 
                size='small'
                variant="outlined" 
                InputProps={{
                    endAdornment: (
                        <>
                        <IconButton size="small">
                            <SearchIcon/>
                        </IconButton>
                        </>
                    ),
                }}
                />
            <Button variant="contained" style={{margin:"5px", backgroundColor:"orange"}} onClick={() => setOpen(true)}>
                ADD PRODUCT
            </Button>
        </div>
        <Table component={Paper} sx={{ minWidth: 5, marginTop:2, maxWidth:1150 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell align="left">Phone</TableCell>
            <TableCell align="left">Website</TableCell>
            <TableCell align="left">Company Name</TableCell>
            <TableCell align="right">Delete</TableCell>
            <TableCell align="right">Edit</TableCell>
          </TableRow>
            </TableHead>
            <TableBody>
            {users.users && users.users.map((user, index) => (
                <StudentList
                user={user}
                index={index}
                key={user.id + "" + index}
                />
            ))}
            </TableBody>
        </Table>
    </div>
  )
}
const mapStateToProps = (state) => ({
    users: state.users
  });
  
  const mapDispatchToProps = (dispatch) => ({
    fetchUsers: () => {
      dispatch(fetchUsers());
    },
  });

export default connect(mapStateToProps,mapDispatchToProps) (Students)