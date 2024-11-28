import { Navigate } from "react-router-dom"
import { authService } from "@/_services"

export const AuthGuard = ({ children }: { children: JSX.Element }) => {
  if (!authService.isLogged()) {
    console.log("Not logged, You must be identified to open the road")
    return <Navigate to='/signin' />
  }
  return children
}
