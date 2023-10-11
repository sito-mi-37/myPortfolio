import {useEffect, useState, useRef} from 'react'
import { Outlet, Link } from 'react-router-dom'
import usePersist from '../../hooks/usePersist'
import { useSelector } from 'react-redux'
import { selectCurrentToken } from './authSlice'
import { useRefreshMutation } from './authApiSlice'
import DotLoader from 'react-spinners/DotLoader'

const PersistLogin = () => {
    const [persist] = usePersist()
    const token = useSelector(selectCurrentToken)
    const effectRan = useRef(false)

    const [trueSuccess, setTrueSuccess] = useState(false)

    const [refresh,{
        isUninitialized,
        isLoading,
        isSuccess,
        isError,
        error
    }] = useRefreshMutation()
   
    useEffect(() => {
        if(effectRan.current === true || process.env.NODE_ENV !== 'development'){
            // React 18 Strict Mode
            const verifyRefreshToken = async () => {
                console.log('verifying refresh token')
                try {
                   // const response = 
                    await refresh()
                   // const {accessToken} = response.data
                    setTrueSuccess(true)
                } catch (err) {
                    
                }
            }

            if(!token && persist) verifyRefreshToken()
        }

        return () => effectRan.current = true

        //eslint-disable-next-line
    }, [])

    let content

    if(!persist) { // persist: no
        console.log('no persist')
        content = <Outlet />
    }else if(isLoading){// persist: yes, token: no
        <DotLoader loading={isLoading} size={54} />
    }else if(isError){// persist: yes, token: no
        console.log('error')
        content = (
            <p>
                {error.data?.message}
                <Link className='underline' to='/login'> Please login again</Link>
            </p>
        )
    }else if(isSuccess && trueSuccess){//persist: yes, token: yes
        console.log('success')
        content = <Outlet />
    }else if(token && isUninitialized){ //persist: yes, token: yes
        console.log('token and unint')
        console.log(isUninitialized)
        content = <Outlet />
    }

  return content
}

export default PersistLogin