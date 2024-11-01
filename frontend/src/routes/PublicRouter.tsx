import { Routes, Route } from "react-router-dom"

import { MainLayout } from "@/layout/MainLayout"
import { Home, SignIn } from "@/pages/public/index"
import { NotFound } from "@/pages/NotFound"

export const PublicRouter: React.FC = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        children:[
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='*' element={<NotFound />} />]
      </Route>
    </Routes>
  )
}
