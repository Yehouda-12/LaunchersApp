import { useState, useEffect } from "react";
import { getAllLaunchers } from "../services/launcherService";
import {Link} from "react-router"

const rocket = ['Shahab3', 'Fetah110', 'Radwan', 'Kheibar']
function HomePage() {
    const [launchers, setLaunchers] = useState([])
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')


    useEffect(() => {
        const fetchLaunchers = async () => {
            try {
                setLoading(true)
                setError('')
                const data = await getAllLaunchers()
                setLaunchers(data)

            } catch (error) {
                setError('Error in loading launchers')

            } finally {
                setLoading(false)
            }
        }
        fetchLaunchers()
    }, [])

    const filtered = launchers
        .filter((l) => l.city.toLowerCase().includes(search.toLowerCase()))
        .filter((l) => (filter ? l.rocketType === filter : true))

    if (loading) return <p>Loading...</p>
    if (error) return <p className="error">{error}</p>
    return (
        <div className="home-container">
            <h1>Launchers</h1>
            <input
                type="text"
                value={search}
                placeholder="Search By city ..."
                onChange={(e) => setSearch(e.target.value)}
            />
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="">All Types</option>
                {rocket.map((type) => (
                    <option key={type} value={type}>{type}</option>
                )
                )}
            </select>
            {filtered.length === 0? (
                <p>No launcher found</p>
            ):(
                <table>
                    <thead>
                        <tr>
                        <th>City</th>
                        <th>Type</th>
                        <th>latitude</th>
                        <th>longitude</th>
                        <th>Name</th>
                      
                        <th>Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map((l)=>(
                            <tr key={l._id}>
                                <td>{l.city}</td>
                                <td>{l.rocketType}</td>
                                <td>{l.latitude}</td>
                                <td>{l.longitude}</td>
                                <td>{l.name}</td>
                                <td>
                                    <Link to={`/launcher/${l._id}`}>See</Link>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            )}


        </div>
    )
}
export default HomePage