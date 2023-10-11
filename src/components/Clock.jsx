import React, {useState, useEffect} from 'react'

const Clock = () => {
    let date = new Date()
    const [time, setTime] = useState(date)
    
    const getTime =() =>{
        let time = new Date()
        setTime(time)
    } 
    
    setInterval(getTime, 1000)

    let h = time.getHours()
    let m = time.getMinutes()
    let s = time.getSeconds()
    const am = h >= 12 
            ? 'pm'
            : 'am'

  return (
    <div className='digital__clock'>
        <p>{h <10 ? `0${h}` : h}</p>
        <p>{m <10 ? `0${m}` : m}</p>
        <p>{s <10 ? `0${s}` : s}</p>
        <p>{am}</p>
    </div>
  )
}

export default Clock