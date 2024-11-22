import { NavLink } from "react-router-dom"
import Logo from "@/assets/img/argentBankLogo.png"

import { SignIn } from "@/components/SignIn"
import { SignOut } from "@/components/SignOut"

import { userService } from "@/_services/userService"

export const Nav: React.FC = () => {
  return (
    <nav className='main-nav'>
      <ul className='flex justify-between items-center'>
        <li className='px-5'>
          <NavLink to='/home'>
            <img src={Logo} alt='Argent Bank Logo' className='w-[200px]' />
          </NavLink>
        </li>
        {userService.isLogged() ? <SignOut /> : <SignIn />}
      </ul>
    </nav>
  )
}
