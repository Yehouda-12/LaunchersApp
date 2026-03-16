import api from './api.js'

export const getAllLaunchers = async ()=>{
    const res = await api.get('/api/launchers')
    return res.data
}

export const getLauncherById = async (id)=>{
    const res = await api.get(`/api/launchers/${id}`)
    return res.data
}

export const createLauncher = async (data)=>{
    const res = await api.post(`/api/launchers/`,data)
    return res.data
}

export const deleteLauncher = async (id)=>{
    const res = await api.delete(`/api/launchers/${id}`)
    return res.data
}

export const updateLauncher = async (id,data)=>{
    const res = await api.put(`/launchers/${id}`,data)
    return res.data
}
