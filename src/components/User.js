import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function User() {
    const [user, setUser] = useState({})
    const { username } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://api.github.com/users/${username}`)
            const data = await response.json()
            setUser(data)
        }

        fetchData()
    }, [])

    return (
        <div className="container p-4">
            <div className="row">
                <div className="col-6">
                    <img src={user.avatar_url} alt="" className='img-fluid' style={{}} />
                </div>
                <div className='col-6'>
                    <h2>{user.login}</h2>
                    <p>{user.name}</p>
                </div>
                <Link to="/">
                <div className='col-12 pt-2'>
                    <button className='btn btn-secondary'>Grįžti atgal</button>
                </div>
                </Link>
            </div>
        </div>
    )
}