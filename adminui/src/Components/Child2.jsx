import React from 'react'
import { useContext } from 'react'
import Child3 from './Child3'
import {globalContxt} from "./Context"

const Child2 = () => {
    const usec= useContext(globalContxt)
  return (
    <div>
      <h1>child2: {usec}</h1>

      <h1>child 2</h1>
      <Child3/>
    </div>
  )
}

export default Child2
