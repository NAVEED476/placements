import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'
import Child from './Child';
import Child2 from './Child2';
import Child3 from './Child3';



export const globalContxt = createContext();


const Context = () => {
    const [state,setsate] = useState("naveed")
  return (
    <globalContxt.Provider value={state}>
    <div>
      <h1>this is context api</h1>
      <Child/>
      <Child2/>
    </div>
    </globalContxt.Provider>
  )
}

export default Context
