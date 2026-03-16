import api from './api.js'

export const getAllLaunchers = async ()=>{
    const res = await api.get('/launchers')
    return res.data
}

export const getLauncherById = async (id)=>{
    const res = await api.get(`/launchers/${id}`)
    return res.data
}

export const createLauncher = async (data)=>{
    const res = await api.post(`/launchers/`,data)
    return res.data
}

export const deleteLauncher = async (id)=>{
    const res = await api.delete(`/launchers/${id}`)
    return res.data
}
