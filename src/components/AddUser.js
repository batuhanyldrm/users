import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import DialogContent from '@mui/material/DialogContent';
import { postUser } from '../api/userApi';
import { addUser, fetchUsers } from '../actions/userAction';

function AddUser(props) {

    const {open, handleClose, addUser, users} = props

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [domain, setDomain] = useState("")
    const [name, setName] = useState("")

    const handleCreateProduct = async () => {
      const data = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        domain: domain,
        name: name,
      }
      await postUser(data
        ).then((res) => {
        addUser(res.data)
      }).finally(() => {
        handleClose(false)
      })
    }

    useEffect(() => {
        setFirstName("")
        setLastName("")
        setEmail("")
        setPhone("")
        setDomain("")
        setName("")
    }, [users])

    return(
    <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          fullWidth
        >
          <DialogTitle id="alert-dialog-title">
            <div style={{ textAlign : "center" }}>
              Add Stock
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
            <Button onClick={handleCreateProduct}>ADD</Button>
          </DialogActions>
      </Dialog>
    </div>
    );
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  addUser: (data) => {
    dispatch(addUser(data));
  },
  fetchUsers: () => {
    dispatch(fetchUsers());
  },
});

export default connect(mapStateToProps, mapDispatchToProps) (AddUser)