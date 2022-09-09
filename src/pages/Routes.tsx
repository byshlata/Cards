import React from 'react'

import { Path } from 'enums'
import {
  Forgot,
  ForgotCreatePassword,
  Login,
  Profile,
  Registration,
  PacksList,
  CardsPack,
} from 'pages'
import { Page404 } from 'pages/page404/Page404'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { selectorIsAuth, selectorAuthUserId } from 'store'
import {Learn} from "./learn/Learn";

export const Routers = () => {
  const isAuth = useSelector(selectorIsAuth)
  const userId = useSelector(selectorAuthUserId)

  const PROFILE_PAGE = <Navigate to={`${Path.Profile}${Path.Root}${userId}`} />
  const LOGIN_PAGE = <Navigate to={`${Path.Login}`} />

  return (
    <Routes>
      <Route path={`${Path.Other}`} element={<Page404 />} />
      <Route path={`${Path.Root}`} element={isAuth ? PROFILE_PAGE : LOGIN_PAGE} />
      <Route path={`${Path.Forgot}`} element={!isAuth ? <Forgot /> : <Profile />} />
      <Route path={`${Path.PacksList}`} element={isAuth ? <PacksList /> : LOGIN_PAGE} />
      <Route
        path={`${Path.Pack}${Path.Root}${Path.Id}`}
        element={isAuth ? <CardsPack /> : LOGIN_PAGE}
      />
      <Route
        path={`${Path.NewPassword}${Path.Root}${Path.Token}`}
        element={!isAuth ? <ForgotCreatePassword /> : <Profile />}
      />
      <Route
        path={`${Path.Profile}${Path.Root}${Path.Id}`}
        element={isAuth ? <Profile /> : LOGIN_PAGE}
      />
      <Route path={`${Path.Register}`} element={<Registration />} />
      <Route path={`${Path.Login}`} element={isAuth ? PROFILE_PAGE : <Login />} />
        <Route path={`${Path.Learn}`} element={<Learn />} />
    </Routes>
  )
}
