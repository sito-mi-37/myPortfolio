import React from 'react'
import { DotLoader } from 'react-spinners/DotLoader'

const Spinner = ({loading}) => {
  return (
    <DotLoader
     color="#36b8d6" 
     loading={loading}
    //  cssOverride={override}
     size={150}
     aria-label="Loading Spinner"
     data-testid="loader"
    />
  )
}

export default Spinner