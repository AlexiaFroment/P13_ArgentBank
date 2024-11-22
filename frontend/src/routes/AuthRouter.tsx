import { Routes, Route } from "react-router-dom"
import { MainLayout } from "@/layout/MainLayout"
import { UserProfile } from "@/pages/auth/index"
import { NotFound } from "@/pages/NotFound"
export const AuthRouter: React.FC = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        children:[
        <Route index element={<UserProfile />} />
        <Route path='/user-profile' element={<UserProfile />} />
        <Route path='*' element={<NotFound />} />]
      </Route>
    </Routes>
  )
}
