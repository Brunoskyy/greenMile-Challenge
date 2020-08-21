import React, { useEffect, useState } from 'react';
import api from '../../services/api'

import './styles.css'

function Profile() {
    const [user, setUser] = useState({})
    const githubUsername = localStorage.getItem('gitUser')

    useEffect(() => {
        api.get(`/${githubUsername}`)
            .then(response => {
                setUser(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    })

    return (
        <div className="profile-container">
            <aside className="profile-info">
                <img src={user.avatar_url} alt="avatar"/>
                <p className="info name">{user.name}</p>
                <p className="info login">{user.login}</p>
                <p className="info bio">{user.bio}</p>
                <a className="info url" href={user.html_url}>{user.html_url}</a>
            </aside>
            <main>

            </main> 
        </div>
    )
}

export default Profile;