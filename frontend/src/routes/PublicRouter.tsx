import { Routes, Route } from "react-router-dom"
import { MainLayout } from "@/layout/MainLayout"
import { Home } from "@/pages/public/Home"
import { SignIn } from "@/pages/public/SignIn"
import { NotFound } from "@/pages/NotFound"

export const PublicRouter: React.FC = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}
