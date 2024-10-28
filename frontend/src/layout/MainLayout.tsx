import { Outlet } from "react-router-dom"
import { Nav } from "@/layout/Nav"
import { Footer } from "@/layout/Footer"
export const MainLayout: React.FC = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Nav />
      <main className='flex-grow flex flex-col'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
