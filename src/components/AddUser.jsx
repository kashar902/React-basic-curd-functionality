import { Button, FormControl, FormGroup, Input, InputLabel , makeStyles, Typography} from '@material-ui/core'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { addUser } from '../Service/Api'

const useStyle = makeStyles({
    head: {
        width: '55%',
        margin: '5% auto',
        '& > *': {
            marginTop: 20
        }
    }
})
//  make the object of initial values
const initialValues = {
    name: '',
    username: '',
    email: '',
    number: '',
}

const AddUser = () => {

    // used to redirect on the different page
    const history = useHistory()
// make the state to access the form and user edit name 
    const [user, setUser] = useState(initialValues)
// destructing of user if this not be done then we have to access this with the "user.name, user.username, etc"
    // const { name, username, email, number } = user;
    
    const onValueChange = (e) => {
        setUser({
            ...user, [e.target.name]: e.target.value
        })
    }

    const onClickAdd = async () => {
        await addUser(user)
        history.push('/userdetail')
    }

    const style = useStyle()
    return (
        <FormGroup className={style.head}>
            <Typography variant='h5'>Add A User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={e => onValueChange(e)} name="name" />
            </FormControl>
            <FormControl>
                <InputLabel>UserName</InputLabel>
                <Input onChange={e => onValueChange(e)} name="username"/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={e => onValueChange(e)} name="email" />
            </FormControl>
            <FormControl>
                <InputLabel>Number</InputLabel>
                <Input onChange={e => onValueChange(e)} name="number" />
            </FormControl>
            <Button color='primary' onClick={() => onClickAdd() } variant='contained'>Add User</Button>
        </FormGroup>
    )
}

export default AddUser
