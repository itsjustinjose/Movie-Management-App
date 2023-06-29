import { AppBar, Button,Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography align='left' sx={{flexGrow: 1 }}>Movie Mangement App</Typography>
                <Button variant='outlined'><Link to = {'/'} style={{color:'white', textDecoration:'none'}}>View</Link></Button>
                <Button><Link to = {'/add'} style={{color:'white', textDecoration:'none'}}>Edit</Link></Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar