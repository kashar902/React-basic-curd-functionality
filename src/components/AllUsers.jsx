// import { TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import React, {useEffect, useState} from 'react'
import { delUserDataApi, getUsers } from '../Service/Api'
import {
    Table,
    TableHead,
    TableRow,
    TableBody,
    TableCell, makeStyles, Button
} from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    table: {
        width: '80%',
        margin: '50px auto'

    },
    TableHead: {
        "& > *": {
            background: '#121554',
            fontSize: '22px',
            fontWeight: 'bolder',
            color: "#fffff3"
        }
    },
    row: {
        "& > *": {
            background: '#015684',
            fontSize: '18px',
            color: "#fffff3",
        }
    }
})
 
const AllUsers = () => {

    const classes = useStyles()
    const [users, setUsers] = useState([]) 

    useEffect(() => {
        getAllUsers()
        
    }, [])

    const getAllUsers = async () => {
        const response = await getUsers()
        // console.log(response.data)
        setUsers(response.data)
    }

    const deleteUser = async(id) => {
        await delUserDataApi(id)
        getAllUsers()
    }

    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.TableHead}>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>UserName</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Ph.Number</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    users.map(user => (
                        <TableRow className={classes.row} key={user.id}>
                            <TableCell>{ user.id }</TableCell>
                            <TableCell>{ user.name }</TableCell>
                            <TableCell>{ user.username }</TableCell>
                            <TableCell>{ user.email }</TableCell>
                            <TableCell>{ user.number }</TableCell>
                            <TableCell>
                                <Button variant='contained' component={Link} to={`/edituser/${user.id}`} style={{marginRight: 8}}>Edit</Button>
                                <Button variant='contained' onClick={() => deleteUser(user.id)} >Delete</Button>
                            </TableCell>
                        
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}

export default AllUsers
