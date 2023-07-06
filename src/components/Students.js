import React, { useEffect } from 'react'
import { fetchUsers } from '../actions/userAction';
import { connect } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import StudentList from './StudentList';

const Students = (props) => {

    const {
        fetchUsers,
        users
    } = props

    useEffect(() => {
        fetchUsers()
      }, [])

  return (
    <div>
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