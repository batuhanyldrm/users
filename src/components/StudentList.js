import React, { useState } from 'react'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { deleteUser } from '../actions/userAction';
import { connect } from 'react-redux';
import EditUser from './EditUser';

const StudentList = (props) => {

    const {user, deleteUser} = props

    const [id,setId] = useState("")
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    const handleEdit = (ID) => {
      setId(ID)
      setOpen(true);
    }

  return (
    <>
        <EditUser
          open={open}
          handleClose={handleClose}
          user={user}
          id={id}
        />
        <TableRow
          key={user.id}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell align='left'>
            {<img src={user.image} style={{width:50, height:50}}></img> }
            {user.firstName}{user.lastName}
          </TableCell>
          <TableCell component="th" scope="row" align="left">
          {user.email}
          </TableCell>
          <TableCell align="left">{user.phone}</TableCell>
          <TableCell align="left">{user.domain}</TableCell>
          <TableCell align="left">{user.company.name}</TableCell>
          <TableCell align="right">
            <IconButton
            onClick={()=>deleteUser(user.id)}
            >
                <DeleteIcon/>
            </IconButton>
          </TableCell>
          <TableCell align="right">
          <IconButton
          onClick={()=>handleEdit(user.id)}
          >
                <EditIcon/>
            </IconButton>
          </TableCell>
        </TableRow>
    </>
  )
}
const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    deleteUser: (id) => {
      dispatch(deleteUser(id));
    },
});

export default connect(mapStateToProps,mapDispatchToProps) (StudentList)