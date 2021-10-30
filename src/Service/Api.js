import axios from 'axios';

const url = 'http://localhost:3003/users'

export const getUsers = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`)
}

export const addUser = async (user) => {
    return await axios.post(url, user)
}
export const updateDataApi = async (id, user) => {
    return await axios.put(`${url}/${id}`, user)
}
export const delUserDataApi = async (id) => {
    return await axios.delete(`${url}/${id}`)
}
