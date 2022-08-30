import React from 'react'

import { Page404 } from 'components/page404/Page404'
import { Path } from 'enums'
import { Forgot, ForgotCreatePassword, Login, Profile, Registration, Pack } from 'pages'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { selectorIsAuth, selectorUserId } from 'store'

export const Routers = () => {
  const isAuth = useSelector(selectorIsAuth)
  const userId = useSelector(selectorUserId)

  const PROFILE_PAGE = <Navigate to={`${Path.Profile}${Path.Root}${userId}`} />
  const LOGIN_PAGE = <Navigate to={`${Path.Login}`} />

  return (
    <Routes>
      <Route path={`${Path.Other}`} element={<Page404 />} />
      <Route path={`${Path.Root}`} element={isAuth ? PROFILE_PAGE : LOGIN_PAGE} />
      <Route path={`${Path.Forgot}`} element={!isAuth ? <Forgot /> : <Profile />} />
      <Route path={`${Path.PacksList}`} element={isAuth ? <Pack /> : <Login />} />
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
    </Routes>
  )
}
