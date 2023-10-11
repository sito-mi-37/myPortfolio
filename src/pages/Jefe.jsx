import React, { useEffect } from 'react'
import {Link, Outlet, useLocation, useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../features/auth/authSlice'
import { useSendLogoutMutation } from '../features/auth/authApiSlice'

const Jefe = () => {
  const user  = useSelector(selectCurrentUser)

  const [sendLogout, {isLoading, isSuccess, isError, error}] = useSendLogoutMutation()

  const navigate = useNavigate()
  const {pathname} = useLocation()

  useEffect(() => {
    if(isSuccess) navigate('/')
  },[isSuccess, navigate])

  
  return (
    <main>
      <div className='px-5 flex justify-between items-center'>
        <ul className='flex gap-3 my-5'>
          <li className={`hover:text-secondaryDark ${pathname === '/jefe' ? 'border-b-2' : ""}`}><Link to={'/jefe'}>Home</Link></li>
          <li className={`hover:text-secondaryDark ${pathname === '/jefe/projects' ? 'border-b-2' : ""}`}><Link to={'/jefe/projects'}>Projects</Link></li>
          <li className={`hover:text-secondaryDark ${pathname === '/jefe/skills' ? 'border-b-2' : ""}`}><Link to={'/jefe/skills'}>Skills</Link></li>
        </ul>
        <div>
          <p>{user}</p>
          <button onClick={() => sendLogout()}>Logout</button>
        </div>
        
      </div>
      <div>
        {
          isLoading
                ? <p>Logging out</p>
                : isError
                  ? <p>Error: {error.data?.message}</p>
                  : <Outlet />
        }
        
      </div>

    </main>
  )
}

export default Jefe