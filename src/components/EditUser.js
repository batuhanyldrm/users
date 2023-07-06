import React, { useState } from 'react'
import { connect } from 'react-redux';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import DialogContent from '@mui/material/DialogContent';
import { changeUser } from '../api/userApi';
import { updateUser } from '../actions/userAction';

function EditUser(props) {

    const {user, updateUser, open, handleClose, id} = props

    const [firstName, setFirstName] = useState(user.firstName)
    const [lastName, setLastName] = useState(user.lastName)
    const [email, setEmail] = useState(user.email)
    const [phone, setPhone] = useState(user.phone)
    const [domain, setDomain] = useState(user.domain)
    const [name, setName] = useState(user.company.name)

    const handleChageStock = async () => {
        const data = {
            id: id,
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            domain: domain,
            name: name,
        }
        await changeUser(data)
        .then(() => {
            updateUser(data)
        }).finally(() =>{
            handleClose(false)
        })
    }

    return(
        <>
         <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          fullWidth
        >
          <DialogTitle id="alert-dialog-title">
            <div style={{ textAlign : "center" }}>
              Edit Stock
            </div>
          </DialogTitle>
          <DialogContent>
            <div style={{display:"grid"}}>
            <TextField
            id="fName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            margin="normal"
            label="First Name"
            variant="outlined"
            size='small'
          />
          <TextField
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            autoFocus
            margin="normal"
            id="lName"
            label="Last Name"
            type="text"
            variant="outlined"
            size='small'
          />
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
            margin="normal"
            id="email"
            label="Email"
            type="text"
            variant="outlined"
            size='small'
          />
          <TextField
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            autoFocus
            margin="normal"
            id="phone"
            label="Phone"
            type="number"
            variant="outlined"
            size='small'
          />
          <TextField
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            autoFocus
            margin="normal"
            id="website"
            label="Website"
            type="text"
            variant="outlined"
            size='small'
          />
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
            margin="normal"
            id="cName"
            label="Company Name"
            type="text"
            variant="outlined"
            size='small'
          />
          </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleChageStock}>EDIT</Button>
          </DialogActions>
      </Dialog>
        </>
    )
}

const mapStateToProps = (state) => ({
  });
  
  const mapDispatchToProps = (dispatch) => ({
    updateUser: (data) => {
        dispatch(updateUser(data))
    },
  });

export default connect(mapStateToProps,mapDispatchToProps) (EditUser)