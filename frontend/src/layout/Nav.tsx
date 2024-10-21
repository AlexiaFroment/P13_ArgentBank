import { NavLink } from "react-router-dom"
import Logo from "@/assets/img/argentBankLogo.png"
import { IoPersonCircleSharp } from "react-icons/io5"
export const Nav: React.FC = () => {
  return (
    <nav className='main-nav'>
      <ul className='flex justify-between items-center'>
        <li className='px-5'>
          <NavLink to='/home'>
            <img src={Logo} alt='Argent Bank Logo' className='w-[200px]' />
          </NavLink>
        </li>
        <li className=' px-5'>
          <NavLink to='/signin' className='flex items-center font-bold px-1'>
            <IoPersonCircleSharp className='text-xl mr-1' />
            Sign In
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
