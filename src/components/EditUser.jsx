import { Button, FormControl, FormGroup, Input, InputLabel , makeStyles, Typography} from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { getUsers, updateDataApi } from '../Service/Api'

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

const EditUser = () => {

    // to fetch the id from the Url
    const { id } = useParams()

    // used to redirect on the different page
    const history = useHistory()
// make the state to access the form and user edit name 
    const [user, setUser] = useState(initialValues)
// destructing of user if this not be done then we have to access this with the "user.name, user.username, etc"
    const { name, username, email, number } = user;
    
    useEffect(() => {
        loadUserData()

    }, [])
    const loadUserData = async () => {
        const response = await getUsers(id)
        setUser(response.data)

    }
    
    const onValueChange = (e) => {
        setUser({
            ...user, [e.target.name]: e.target.value
        })
    }

    const onClickEdit = async () => {
        await updateDataApi(id, user)
        history.push('/userdetail')
    }

    const style = useStyle()
    return (
        <FormGroup className={style.head}>
            <Typography variant='h5'>Edit User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={e => onValueChange(e)} name="name" value={name} />
            </FormControl>
            <FormControl>
                <InputLabel>UserName</InputLabel>
                <Input onChange={e => onValueChange(e)} name="username" value={username} />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={e => onValueChange(e)} name="email" value={email}  />
            </FormControl>
            <FormControl>
                <InputLabel>Number</InputLabel>
                <Input onChange={e => onValueChange(e)} name="number" value={number}  />
            </FormControl>
            <Button color='primary' onClick={() => onClickEdit() } variant='contained'>Edit User</Button>
        </FormGroup>
    )
}

export default EditUser
