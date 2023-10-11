import {useEffect, useState} from 'react'

const getLocalValue = (key, initValue) => {
    // cnsidering SSR NextJs
    if(typeof window === 'undefined') return initValue

    const localValue = JSON.parse(localStorage.getItem(key))
    //considering a local value already exist

    if(localValue) return localValue

    if(initValue instanceof Function) return initValue()

    return initValue
}

const useLocalStorage = ({key, initValue}) => {
    const [value, setValue] = useState(() => getLocalValue(key, initValue))

    useEffect(() =>{
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])
  return [key, value]
}

export default useLocalStorage