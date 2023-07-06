import axios from "axios";

export const getUsers = async () => {
    const resp = await axios.get("https://dummyjson.com/users")
    return resp;
}

export const postUser = async (data) => {
    const resp = await axios.post(`https://dummyjson.com/users/add`,{
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        domain: data.domain,
        name: data.name,
    }, {
        headers: { 'Content-Type': 'application/json' },
    })
      return resp.status === 200 ? resp : false
}

export const removeUser = async (id) => {
    const resp = await axios.delete(`https://dummyjson.com/users/${id}`)
    return resp;
}

export const changeUser = async (data) => {
   
    const resp = await axios.put(`https://dummyjson.com/users/${data.id}`, {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        domain: data.domain,
        name: data.name,
    }, {
        headers: { 'Content-Type': 'application/json' },
    })
    return resp; 
}