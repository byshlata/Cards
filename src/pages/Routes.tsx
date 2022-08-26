import React from 'react'

import { Page404 } from 'components/page404/Page404'
import { Path } from 'enums'
import { Forgot, ForgotCreatePassword, Login, Profile, Registration } from 'pages'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import { selectorIsAuth, selectorUserId } from 'store'

export const Routers = () => {
  const isAuth = useSelector(selectorIsAuth)
  const userId = useSelector(selectorUserId)

  return (
    <Routes>
      <Route path={`${Path.Other}`} element={<Page404 />} />
      <Route
        path={`${Path.Root}`}
        element={
          isAuth ? (
            <Navigate to={`${Path.Profile}${Path.Root}${userId}`} />
          ) : (
            <Navigate to={`${Path.Login}`} />
          )
        }
      />
      <Route path={`${Path.Forgot}`} element={!isAuth ? <Forgot /> : <Profile />} />
      <Route
        path={`${Path.NewPassword}${Path.Root}${Path.Token}`}
        element={!isAuth ? <ForgotCreatePassword /> : <Profile />}
      />
      <Route
        path={`${Path.Profile}${Path.Root}${Path.Id}`}
        element={isAuth ? <Profile /> : <Navigate to={`${Path.Login}`} />}
      />
      <Route path={`${Path.Register}`} element={<Registration />} />
      <Route
        path={`${Path.Login}`}
        element={isAuth ? <Navigate to={`${Path.Profile}${Path.Root}${userId}`} /> : <Login />}
      />
    </Routes>
  )
}
