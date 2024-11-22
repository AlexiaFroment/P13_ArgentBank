import { useNavigate } from "react-router-dom"
import { FaSignOutAlt } from "react-icons/fa"
import { IoPersonCircleSharp } from "react-icons/io5"

import { userService } from "@/_services/userService"

export const SignOut: React.FC = () => {
  const navigate = useNavigate()
  const logout = () => {
    userService.logout()
    navigate("/home")
  }
  return (
    <li className=' px-5'>
      <div className='flex items-center font-bold px-1'>
        <IoPersonCircleSharp className='text-xl mr-1' />

        <FaSignOutAlt className='text-xl mr-1' />
        <button onClick={logout}>Sign Out</button>
      </div>
    </li>
  )
}
