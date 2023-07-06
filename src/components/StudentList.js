import React from 'react'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

const StudentList = (props) => {

    const {user} = props

  return (
    <>
        <TableRow
          key={user.id}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell align='left'>
            {<img src={user.image} style={{width:50, height:50}} /* className={classes.listImgBlock} */></img> }
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
            /* onClick={()=>deleteProduct(product.id)} */
            >
                <DeleteIcon/>
            </IconButton>
          </TableCell>
          <TableCell align="right">
          <IconButton
          /* onClick={()=>handleEdit(product.id)} */
          >
                <EditIcon/>
            </IconButton>
          </TableCell>
        </TableRow>
    </>
  )
}

export default StudentList