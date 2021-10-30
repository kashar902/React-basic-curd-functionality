import React from 'react'
import {
    AppBar, Toolbar
} from '@material-ui/core';
import {NavLink} from 'react-router-dom'


// Color list
// #154562

const Appbar = () => {

    const myStyle = {
        head : {
            background: '#111111',
            height: 58
        },
        InnerStyleOfNavbar : {
            color: '#fff',
            textDecoration: 'none',
            marginRight: 20,
            fontSize: 20
        }
    }
    return (
        
        <AppBar position="static" style={myStyle.head}>
            <Toolbar variant="dense">
                <NavLink  to='/' style={myStyle.InnerStyleOfNavbar} > CRUD APP </NavLink>
                <NavLink to='/userdetail' style={myStyle.InnerStyleOfNavbar}  > All Users </NavLink>
                <NavLink to='/adduser' style={myStyle.InnerStyleOfNavbar}  > Add User  </NavLink>
            </Toolbar>
        </AppBar>

    )
}

export default Appbar
