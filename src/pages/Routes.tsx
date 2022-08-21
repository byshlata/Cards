import React from 'react'

import { Path } from 'enums'
import { Forgot, Profile } from 'pages'
import { Route, Routes } from 'react-router-dom'

export const Routers = () => (
  <Routes>
    <Route path={`${Path.Forgot}`} element={<Forgot />} />
    <Route path={`${Path.Profile}`} element={<Profile />} />
  </Routes>
)
