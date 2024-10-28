import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PublicRouter } from "@/routes/PublicRouter"
import { AuthRouter } from "@/routes/AuthRouter"

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<PublicRouter />} />
        <Route path='/auth/*' element={<AuthRouter />} />
      </Routes>
    </BrowserRouter>
  )
}
