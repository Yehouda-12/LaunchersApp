import { create } from 'zustand'
import { getUser, login as loginServ } from '../services/authService.js'


const useAuthStore = create((set) => ({
    token: localStorage.getItem('token') || null,
    user: null,
    loading: false,
    error: null,
    loginUser: async (form) => {
        try {
            set({ loading: true, error: null })
            const data = await loginServ(form)
           
            localStorage.setItem('token', data.token)
            set({ token: data.token, loading: false })
            const user = await getUser()
            
            set({user:user})
        } catch (error) {
            console.log(error)
            set({ error: "username or password no good." })

        }
    },
    logout: () => {
        localStorage.removeItem('token')
        set({ token: null, user: null })
    },
    fetchUser: async () => {
        try {
           
            set({ loading: true, error: null })
            const data = await getUser()
            set({ user: data, loading: false })

        } catch (error) {
            set({ error: "error to fetch user.", loading: false })

        }
    }



}))

export default useAuthStore