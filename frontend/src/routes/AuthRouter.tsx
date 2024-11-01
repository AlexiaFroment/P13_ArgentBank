import { Routes, Route } from "react-router-dom"
import { MainLayout } from "@/layout/MainLayout"
import { Welcome } from "@/pages/auth/index"
import { NotFound } from "@/pages/NotFound"
export const AuthRouter: React.FC = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        children:[
        <Route index element={<Welcome />} />
        <Route path='/welcome'>
          <Route path='user' element={<Welcome />} />
          {/* <Route path='Checking' element={<Checking />} />
          <Route path='savings' element={<Saving />} />
          <Route path='current' element={<CreditCard />} /> */}
        </Route>
        <Route path='*' element={<NotFound />} />]
      </Route>
    </Routes>
  )
}
