import { useLocation, NavLink } from "react-router-dom"
import Logo from "@/assets/img/argentBankLogo.png"

import { SignIn } from "@/components/SignIn"
import { SignOut } from "@/components/SignOut"

import { authService } from "@/_services"

export const Nav: React.FC = () => {
  const location = useLocation()
  const isUserProfile = location.pathname === "/auth/user-profile"
  return (
    <nav className='main-nav'>
      <ul className='flex justify-between items-center'>
        <li className='px-5'>
          <NavLink to='/home'>
            <img src={Logo} alt='Argent Bank Logo' className='w-[200px]' />
          </NavLink>
        </li>
        {authService.isLogged() && isUserProfile ? <SignOut /> : <SignIn />}
      </ul>
    </nav>
  )
}
