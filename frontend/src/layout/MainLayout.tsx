import { Outlet } from "react-router-dom"
import { Nav } from "@/layout/Nav"
import { Footer } from "@/layout/Footer"
export const MainLayout: React.FC = () => {
  return (
    <div>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
