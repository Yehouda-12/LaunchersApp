import { useState } from "react";

import { createLauncher, getLauncherById, updateLauncher } from "../services/launcherService";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";


const rocket = ['Shahab3', 'Fetah110', 'Radwan', 'Kheibar']
function AddlauncherPage() {
    const { id } = useParams()
    const edit = !!id
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [form, setForm] = useState({
        name: "",
        city: '',
        rocketType: '',
        latitude: '',
        longitude: ''


    })
    useEffect(() => {
        if (edit) {
            const fetchLauncher = async () => {
                try {
                    setLoading(true)
                    const data = await getLauncherById(id)
                    setForm({
                        name: data.name,
                        city: data.city,
                        rocketType: data.rocketType,
                        latitude: data.latitude,
                        longitude: data.longitude
                    })


                } catch (error) {
                    setError('Error loading')

                } finally {
                    setLoading(false)
                }
            }
            fetchLauncher()
        }
    }, [id])

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            setError('')
            const payload = { ...form }
          
            if (edit) {
                await updateLauncher(id, payload)
                navigate(`/launcher/${id}`)

            } else {
                await createLauncher(payload)
                navigate('/dashboard')
            }

        } catch (err) {
            setError('Error in create launcher')

        } finally {
            setLoading(false)
        }
    }
    if (error) return <p className="error">{error}</p>
    return (
        <div className="add-container">
            <h1>{edit ? 'Update Launcher' : "Add Launcher"}</h1>
            {error && <p>{error}</p>}

            <form onSubmit={handleSubmit}>
                <div>
                    <label >Name</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required />
                </div>
                <div>
                    <label >City</label>
                    <input
                        type="text"
                        name="city"
                        value={form.city}
                        onChange={handleChange}
                        required />
                </div>
                <div>
                    <label >Type of Lancher</label>
                    <select
                        type="text"
                        name="rocketType"
                        value={form.rocketType}
                        onChange={handleChange}
                        required >
                        <option value="">Choose type</option>
                        {rocket.map((type) => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label >Latitude</label>
                    <input
                        type="number"
                        name="latitude"
                        value={form.latitude}
                        onChange={handleChange}
                        required />
                </div>
                <div>
                    <label >Longitude</label>
                    <input
                        type="number"
                        name="longitude"
                        value={form.longitude}
                        onChange={handleChange}
                        required />
                </div>
                <button type="submit" >
                    {loading ? "Add in run ..." : 'Add Launcher'}
                </button>

            </form>
        </div>
    )

}
export default AddlauncherPage