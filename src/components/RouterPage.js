import { BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import React from 'react'
import Login from './Login'
import UserManage from "./UserManage";
import Page from "./common/Page";

const RouterPage = () => {
  return (
    <BrowserRouter>
        <Routes>
        <Route>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login component={Login} title={"Login"} />}></Route>
          </Route>
          <Route path="/user" element={<Page component={UserManage} title={"User Manage"} />}></Route>
        </Routes>
          
    </BrowserRouter>
  )
}

export default RouterPage