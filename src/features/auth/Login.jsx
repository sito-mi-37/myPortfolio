import React, {useRef, useState, useEffect } from 'react'
import { setCredentials } from './authSlice'
import { useLoginMutation } from './authApiSlice'
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import useLocalStorage from '../../hooks/useLocalStorage'
import usePersist from '../../hooks/usePersist'


const Login = () => {
    const {register, handleSubmit, watch, formState:{errors}} = useForm()
    const errRef = useRef()
    const [persist, setPersist] = usePersist()

    // useEffect(() => {
    //     const subscription = watch((value) =>
    //       setUser(value.username)
    //     )
    //     return () => subscription.unsubscribe()
    // }, [watch])

    
    
   
    const [errMsg, setErrMsg] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [login, {isLoading}] = useLoginMutation()

    const handlePersistCheck = () => {
        setPersist(prev => !prev)
    }
 

    const handleLogin = async(data) => {
        try {
            const userData = await login(data).unwrap()
            dispatch(setCredentials({accessToken: userData.accessToken, user: data.username}))
            
            navigate('/jefe')
        } catch (err) {
            // console.log(err)
            if(!err?.status){
                setErrMsg('No server response')
            }else if(err.originalStatus === 400){
                setErrMsg('Missing username or password')
            }else if(err.originalStatus === 401){
                setErrMsg('Unauthorized')
            }else{
                setErrMsg(err?.data.message)
            }
            errRef.current.focus()
        }
    }

    const content = isLoading ? <h1>Loading...</h1> : (
        <section className="w-11/12 sm:w-3/5  mx-auto grid grid-cols-1 justify-items-center items-center py-7 font-mono">
        <div className='w-full flex flex-col justify-center items-center'>
            <p ref={errRef} className={errMsg ? 'text-red-500 text-sm' : "absolute left-[9999px]"} aria-label='error'>{errMsg}</p>
            <h1 className='text-3xl underline mb-5'>Login de el jefe</h1>

            <form  className="flex flex-col gap-3 max-w-[25rem]" onSubmit={handleSubmit(handleLogin)}>
            <div className="flex flex-col ">
              <label htmlFor="username">username:</label>
              <input
                type="text"
                id="username"
                name='username'
                placeholder="Enter username "
                className="text-buttonDark py-2 rounded-md px-2 "
                autoComplete="off"
                {...register("username", {
                  required: "Username is a required field",
        
                })}
              />
              {errors.username && (
                <p className="text-sm text-red-400 mt-1">
                  {errors.username.message}
                </p>
              )}
            </div>
            <div className="flex flex-col ">
              <label htmlFor="password">password:</label>
              <input
                type="password"
                id="password"
                name='password'
                placeholder="Enter password "
                className="text-buttonDark py-2 rounded-md px-2 "
                {...register("password", {
                  required: "password is a required field",
                })}
              />
              {errors.password && (
                <p className="text-sm text-red-400 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <button className="flex w-full text-sm sm:text-ld bg-secondaryDark  text-buttonDark justify-center items-center gap-2 py-2 px-2  rounded-lg  font-semibold">
                Login
            </button>
            <div>
                <input 
                type="checkbox"  
                checked={persist}
                onChange={handlePersistCheck}
                id='persist'
                />
                <label htmlFor="persist">Trust this device</label>
            </div>
            </form>
            </div>
        </section>
    )
  return content
}

export default Login