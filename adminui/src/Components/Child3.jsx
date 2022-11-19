import React from 'react'
import { useContext } from 'react'
import { globalContxt } from './Context'

const Child3 = () => {
    const usec = useContext(globalContxt)
  return (
    <div>
      <h1>child3: {usec}</h1>
    </div>
  )
}

export default Child3
