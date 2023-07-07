import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../actions/userAction';
import { connect } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import StudentList from './StudentList';
import { Button, Container, IconButton, Pagination, Stack, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddUser from './AddUser';
import { makeStyles } from '@mui/styles';
import UserManage from './UserManage';

const useStyles = makeStyles((theme) => ({
  pagination: {
    display: "flex",
    justifyContent: "center",
    marginTop: "5%"
  }
}));

const Students = (props) => {

  const classes = useStyles();

  const {
    fetchUsers,
    users
  } = props;

  const [open, setOpen] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPageNumber, setTotalPageNumber] = useState(0);
  const [lastFilteredUsers, setLastFilteredUsers] = useState([]);
  const [currentSearch, setCurrentSearch] = useState("");
  const [lastSearched, setLastSearched] = useState("");

  const sliceUsers = (pageNo) => {
    if (Array.isArray(users)) {
      const newDisplayedUsers = users.slice((pageNo - 1) * 6, pageNo * 6);
      setLastFilteredUsers(newDisplayedUsers);
    }
  };

  const handleShownUsers = (value) => {
    const newPageNo = value;
    sliceUsers(newPageNo);
    setPageNumber(newPageNo);
  };

  const handleFilteredSearch = () => {
    let trimmedCurrentSearch = currentSearch.trim()/* .toLowerCase(); */
  
    if (trimmedCurrentSearch === "") {
      handleShownUsers(pageNumber);
      return;
    }
  
    if (trimmedCurrentSearch === lastSearched) {
      return;
    }
  
    const filteredUsers = users.filter(user => (user.firstName && user.firstName.includes(trimmedCurrentSearch)) || (user.lastName && user.lastName.includes(trimmedCurrentSearch)));
    setLastFilteredUsers(filteredUsers);
    setLastSearched(trimmedCurrentSearch);
  };
  

  const checkPressedEnter = (key) => {
    if (key === "Enter") {
      handleFilteredSearch();
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    if (users) {
      sliceUsers(pageNumber);
      setTotalPageNumber(Math.ceil(users.length / 6));
    }
  }, [users]);

  return (
    <div>
    <UserManage/>
    <Container >
      <AddUser
        open={open}
        handleClose={handleClose}
        users={users}
      />
      <div style={{ display: "flex", alignItems: "center" }}>
      <h1 style={{ justifyContent: "start", flex: 1 }}>Students</h1>
      <div style={{ justifyContent: "end", display: "flex" }}>
        <TextField
          style={{ marginTop: "5px" }}
          id="outlined-basic"
          label="Search"
          size="small"
          variant="outlined"
          value={currentSearch}
          onChange={(e) => setCurrentSearch(e.target.value)}
          onKeyPress={(e) => checkPressedEnter(e.key)}
          InputProps={{
            endAdornment: (
              <>
                <IconButton size="small" onClick={handleFilteredSearch}>
                  <SearchIcon />
                </IconButton>
              </>
            ),
          }}
        />
        <Button
          variant="contained"
          style={{ margin: "5px", backgroundColor: "orange" }}
          onClick={() => setOpen(true)}
        >
          ADD PRODUCT
        </Button>
      </div>
      </div>
      <Table component={Paper} sx={{ minWidth: 5, marginTop: 2, maxWidth: 1150 }} aria-label="simple table">
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
          {lastFilteredUsers && lastFilteredUsers.map((user, index) => (
            <StudentList
              user={user}
              index={index}
              key={user.id + "" + index}
            />
          ))}
        </TableBody>
      </Table>
      </Container>

      <Stack spacing={2}>
        <Pagination
          id="list-users-pagination"
          className={classes.pagination}
          page={pageNumber}
          onChange={(event, value) => handleShownUsers(value)}
          count={totalPageNumber}
          size="medium"
          showFirstButton
          showLastButton
          color="primary"
        />
      </Stack>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users.users
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => {
    dispatch(fetchUsers());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Students);