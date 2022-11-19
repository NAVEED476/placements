import { Button, Modal, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useState } from 'react'


const Model = () => {
    const [open,setopen] = useState(true);
    const [btn,setbtn] = useState(null);

  return (
    <>
    {
        open ? <h1>hello this is naveed</h1> : <h1>hello bro</h1>
    }
    { btn ? <Button onClick={()=>setopen(true)}>show</Button> :
    <Button onClick={()=>setopen(false)}>hide</Button>}
    </>
  )
}

export default Model
