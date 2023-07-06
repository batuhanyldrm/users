import { BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import React from 'react'
import Login from './Login'
import UserManage from "./UserManage";
import Page from "./common/Page";
import Home from "./Home";
import Students from "./Students";

const RouterPage = () => {
  return (
    <BrowserRouter>
    <UserManage/>
        <Routes>
          <Route>
              <Route path="/" element={<Navigate to="/login" replace />} />
              <Route path="/login" element={<Login component={Login} title={"Login"} />}></Route>
          </Route>
          <Route path="/home" element={<Page component={Home} title={"Home"} />}></Route>
          <Route path="/students" element={<Page component={Students} title={"Students List"} />}></Route>
        </Routes>
          
    </BrowserRouter>
  )
}

export default RouterPage