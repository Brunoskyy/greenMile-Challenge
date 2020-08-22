import React, { useState, useEffect } from 'react';
import api, { mapsApi } from '../../services/api'

import './styles.css'

import Map from '../../components/Map'

function Profile() {
    const [user, setUser] = useState({})
    const [coordinates, setCoordinates] = useState([])
    const githubUsername = localStorage.getItem('gitUser')

    useEffect(() => {
        api.get(`/${githubUsername}`)
            .then(function (response) {
              // handle success
            //   console.log(response.data);
              setUser(response.data)
              getCoordinates(response.data.location)
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function getCoordinates(coordinate) {
        mapsApi.get(`${coordinate}`)
            .then(function (response) {
                const coordinates = response.data.features[0].geometry.coordinates
                setCoordinates(coordinates)
                // console.log('teste')
                })
                .catch(function (error) {
                console.log(error);
                })
    }

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
                <Map coordinate={ coordinates }/>
            </main>
        </div>
    )
}

export default Profile;