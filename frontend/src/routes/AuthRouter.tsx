import { Routes, Route } from "react-router-dom"

import { MainLayout } from "@/layout/MainLayout"
import { Welcome } from "@/pages/auth/Welcome"
import type React from "react"
import { NotFound } from "@/pages/NotFound"
export const AuthRouter: React.FC = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        children:[
        <Route index element={<Welcome />} />
        <Route path='/welcome' element={<Welcome />} />
        <Route path='*' element={<NotFound />} />]
      </Route>
    </Routes>
  )
}
