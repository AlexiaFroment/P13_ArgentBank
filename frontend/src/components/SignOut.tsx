import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

import { RootState } from "@/_redux/store"
import { authService } from "@/_services"
import { FaSignOutAlt } from "react-icons/fa"
import { IoPersonCircleSharp } from "react-icons/io5"

export const SignOut: React.FC = () => {
  const firstName = useSelector((state: RootState) => state.user.firstName)
  const navigate = useNavigate()
  const logout = () => {
    authService.logout()
    navigate("/home")
  }
  return (
    <li className=' px-5'>
      <div className='flex items-center font-bold px-1'>
        <IoPersonCircleSharp className='text-xl mr-1' />
        {firstName}

        <FaSignOutAlt className='text-xl ml-4 mr-2' />
        <button onClick={logout}>Sign Out</button>
      </div>
    </li>
  )
}
