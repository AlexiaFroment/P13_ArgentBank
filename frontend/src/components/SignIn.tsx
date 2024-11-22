import { NavLink } from "react-router-dom"
import { IoPersonCircleSharp } from "react-icons/io5"

export const SignIn = () => {
  return (
    <li className=' px-5'>
      <NavLink to='/signin' className='flex items-center font-bold px-1'>
        <IoPersonCircleSharp className='text-xl mr-1' />
        Sign In
      </NavLink>
    </li>
  )
}
