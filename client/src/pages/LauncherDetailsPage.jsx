import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { deleteLauncher, getLauncherById } from "../services/launcherService";

function LauncherDetailsPage() {
    const { id } = useParams()
    const navigate = useNavigate()

    const [launcher, setLauncher] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchLauncher = async () => {
            try {
                setLoading(true)
                setError('')
                const data = await getLauncherById(id)
                setLauncher(data)

            } catch (error) {
                setError('Error in loading launcher')

            } finally {
                setLoading(false)
            }
        }
        fetchLauncher()
    }, [id])

    const handleDelete = async ()=>{
        try {
            await deleteLauncher(id)
            navigate('/')

        } catch (error) {
            setError("Error in delete this launcher ")
            
        }
    }
    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>
    if (!launcher) return <p>Launcher not found.</p>
    return (
        <div className="detail-contenair">
            <div className="card">
            <h1>{launcher.name}</h1>
            <p>City : <strong>{launcher.city}</strong></p>
            <p>Type : <strong>{launcher.rocketType}</strong></p>
            <p>Latitude : <strong>{launcher.latitude}</strong></p>
            <p>Longitude : <strong>{launcher.longitude}</strong></p>
            </div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )


}


export default LauncherDetailsPage