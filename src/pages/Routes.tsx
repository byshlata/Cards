import React from 'react'

import { Path } from 'enums'
import { Forgot } from 'pages/index'
import { Route, Routes } from 'react-router-dom'

export const Routers = () => (
  <Routes>
    <Route path={`${Path.Forgot}${Path.Root}`} element={<Forgot />} />
  </Routes>
)
