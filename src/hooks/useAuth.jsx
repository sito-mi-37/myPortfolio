import { useSelector } from "react-redux"
import { selectCurrentToken } from "../features/auth/authSlice"
import jwtDecode from "jwt-decode"

const useAuth = () => {
  const token = useSelector(selectCurrentToken)
  let status = null
  let isJefe = false

  if(token){
    const decoded = jwtDecode(token)
    const {username, roles} = decoded.UserInfo 

    isJefe = roles.includes(1970)
    if(isJefe) status = 'jefe'

    return {username, roles, status, isJefe}
  }


//return if no token
  return {username: '', roles: [], isJefe, status }
}

export default useAuth