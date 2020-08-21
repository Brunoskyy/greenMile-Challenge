import React, { useState, useEffect } from 'react';
import api, { mapsApi } from '../../services/api'

import './styles.css'

import Map from '../../components/Map'

function Profile() {
    const [user, setUser] = useState({})
    const githubUsername = localStorage.getItem('gitUser')

    useEffect(() => {
        api.get(`/${githubUsername}`)
            .then(function (response) {
              // handle success
              console.log(response);
              setUser(response.data)
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
            .then(function () {
              // always executed
            });

        mapsApi.get('São Paulo')
            .then(function (response) {
                // handle success
                console.log(response.data.features[0].geometry.coordinates);
                })
                .catch(function (error) {
                // handle error
                console.log(error);
                })
                .then(function () {
                // always executed
                });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
                <Map />
            </main>
        </div>
    )
}

export default Profile;