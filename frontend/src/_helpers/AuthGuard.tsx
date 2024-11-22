import { Navigate } from "react-router-dom"
import { userService } from "@/_services/userService"
export const AuthGuard = ({ children }: { children: JSX.Element }) => {
  if (!userService.isLogged()) {
    console.log("Not logged, You must be identified to open the road")
    return <Navigate to='/signin' />
  }
  return children
}
