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
            <header>
                <img src={user.avatar_url} alt="avatar"/>
                <p className="login">{user.login}</p>
                <p className="bio">{user.bio}</p>
                <p className="url">{user.html_url}</p>
            </header>
        </div>
    )
}

export default Profile;