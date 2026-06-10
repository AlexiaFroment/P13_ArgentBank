import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PublicRouter } from "@/routes/PublicRouter"
import { AuthRouter } from "@/routes/AuthRouter"
import { AuthGuard } from "@/_helpers/AuthGuard"

export const App: React.FC = () => {
  return (
    <BrowserRouter basename='/P13_ArgentBank'>
      <Routes>
        <Route path='/*' element={<PublicRouter />} />
        <Route
          path='/auth/*'
          element={
            <AuthGuard>
              <AuthRouter />
            </AuthGuard>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
