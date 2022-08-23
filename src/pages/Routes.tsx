import React from 'react'

import { Path } from 'enums'
import { Forgot, Profile, ForgotCreatePassword } from 'pages'
import { Login } from 'pages/login/Login'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

export const Routers = () => {
  return (
    <Routes>
      <Route path={`${Path.Forgot}`} element={<Forgot />} />
      <Route
        path={`${Path.NewPassword}${Path.Root}${Path.Token}`}
        element={<ForgotCreatePassword />}
      />
      <Route path={`${Path.Profile}`} element={<Profile />} />
      <Route path={`${Path.Login}`} element={<Login />} />
    </Routes>
  )
}
