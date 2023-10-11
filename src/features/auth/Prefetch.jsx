import {store} from '../../app/store'
import { projectApiSlice } from '../projectApiSlice'
import { skillApiSlice } from '../skillApiSlice'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

const Prefetch = () => {
    useEffect(() => {
         
       store.dispatch(projectApiSlice.util.prefetch('getProjects', 'projectsList', {force: true}))
       store.dispatch(skillApiSlice.util.prefetch('getSkills', 'skillsList', {force: true}))
    }, [])
  return <Outlet />
}

export default Prefetch