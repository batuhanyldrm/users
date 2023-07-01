import { BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import React from 'react'
import Login from './Login'

const RouterPage = () => {
  return (
    <BrowserRouter>
        <Routes>
        <Route>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login component={Login} title={"Home"} />}></Route>
          </Route>
          {/* <Route path="/sign-up" element={<SignUp component={SignUp} title={"Home"} />}></Route> */}
        </Routes>
          
    </BrowserRouter>
  )
}

export default RouterPage