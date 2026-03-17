import api from "./api.js"

export const login = async (data) => {
    const res = await api.post('/api/auth/login', data)
   
    
    return res.data
}

export const getUser = async () => {
   
    const res = await api.get('/api/auth/getUser')
    return res.data
}

export const getAllUsers = async ()=>{
    const res = await api.get('/api/auth/users')
    return res.data
}

export const createUser = async (data)=>{
    const res = await api.post('/api/auth/register/create')
    return res.data
}

export const updateUser = async (data)=>{
    const res = await api.put('/api/auth/register/update')
    return res.data
}

export const deleteUser = async (id)=>{
    const res = await api.put(`/api/auth/register/delete/${id}`)
}