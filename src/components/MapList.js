import React, { useEffect } from "react"
import useState from 'react-usestateref'
import { Link } from 'react-router-dom'

const MapList = () => {
    const [maps, setMaps, mapsRef] = useState()

    useEffect(() => {
        const fetchMaps = async () => {
            const result = await fetch('https//api.speedrun.io/v1/maps')
            const body = await result.json()
            setMaps(body)
        }
        fetchMaps()
    }, [])
    
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Mapname</th>
                    <th>Author</th>
                    <th>Difficulty</th>
                </tr>
            </thead>

            <tbody>
                {maps && maps.map((map, key) => (
                    <tr key={key} >
                        <td>
                            <Link to={`/map/${map._id}`}>
                                {map.name}
                            </Link>
                        </td>
                        <td>
                            {map.authorId}
                        </td>
                        <td>
                            {map.difficulty}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default MapList