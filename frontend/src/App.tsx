import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PublicRouter } from "@/routes/PublicRouter"

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PublicRouter />} />
      </Routes>
    </BrowserRouter>
  )
}
