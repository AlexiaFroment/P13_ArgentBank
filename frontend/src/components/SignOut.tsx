import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

import { RootState } from "@/_redux/store"
import { authService } from "@/_services"
import { FaSignOutAlt } from "react-icons/fa"
import { IoPersonCircleSharp } from "react-icons/io5"
import { SignIn } from "@/components/SignIn"

export const SignOut: React.FC = () => {
  const [isLoggedOut, setIsLoggedOut] = useState(false)
  const firstName = useSelector((state: RootState) => state.user.firstName)
  const navigate = useNavigate()
  const logout = () => {
    authService.logout()
    setIsLoggedOut(true)
    navigate("/home")
  }

  if (isLoggedOut) {
    return <SignIn />
  }
  const goToUserProfile = () => {
    navigate(`/auth/user-profile`)
  }
  return (
    <li className=' px-5'>
      <div className='flex items-center font-bold px-1'>
        <button onClick={goToUserProfile} className='flex items-center'>
          <IoPersonCircleSharp className='text-xl mr-1' />
          {firstName}
        </button>

        <FaSignOutAlt className='text-xl ml-4 mr-2' />
        <button onClick={logout}>Sign Out</button>
      </div>
    </li>
  )
}
