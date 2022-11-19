import React from 'react'
import { useContext } from 'react';
import {globalContxt} from "./Context";


const Child = () => {
    const usec = useContext(globalContxt);
  return (
    <div>
      <h1>{usec}</h1>
    </div>
  )
}

export default Child
