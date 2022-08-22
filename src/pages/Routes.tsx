import React from 'react'

import { Path } from 'enums'
import { Forgot, Login, Profile } from 'pages/index'
import { Route, Routes } from 'react-router-dom'

export const Routers = () => (
  <Routes>
    <Route path={`${Path.Forgot}${Path.Root}`} element={<Forgot />} />
    <Route path={`${Path.Login}${Path.Root}`} element={<Login />} />
  </Routes>
)
