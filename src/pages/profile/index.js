/* eslint-disable eqeqeq */
/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import ReactLoading from 'react-loading';

import api, { mapsApi } from '../../services/api'
import './styles.css'

import Map from '../../components/Map'
import Repositories from '../../components/Repositories'

function Profile() {
  const [user, setUser] = useState({})
  const [coordinates, setCoordinates] = useState([])
  const [repositories, setRepositories] = useState([])
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const githubUsername = localStorage.getItem('gitUser')

  useEffect(() => {
    api.get(`/${githubUsername}`)
      .then(function (response) {
        setUser(response.data)
        getCoordinates(response.data.location)
      })
      .catch(function (error) {
        console.log(error);
      }).then(() => {
        getRepositories(githubUsername)
      })
      setLoading(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function getCoordinates(coordinate) {
    mapsApi.get(`${coordinate}`)
      .then(function (response) {
        const coordinates = response.data.features[0].geometry.coordinates
        setCoordinates(coordinates)
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  function getRepositories(username) {
    api.get(`/${username}/starred`)
      .then(function (response) {
        console.log(response.data)
        setRepositories(response.data)
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  function handleLogoff() {
    localStorage.removeItem('gitUser')
    history.push('/')
  }

  if(loading) {
    return (
      <div data-testid="container-profile" className="profile-container">
        <header className="profile-info">
          <div className="profile-wrapper">
            <img src={user.avatar_url} alt="avatar" />
            <div className="info">
              <p className="name">{user.name}</p>
              <p className="login">{user.login}</p>
              <p className="bio">{user.bio}</p>
              <a className="url" href={user.html_url}>{user.html_url}</a>
            </div>
          </div>
          <button className="btn-logoff" onClick={handleLogoff}>Sair</button>
        </header>
        <main>
          <div data-testid="map-container" className="map">
            <Map coordinate={ coordinates } />
          </div>
          <div className="repositories">
            <p className="title">Repositórios</p>
            <div data-testid="repositories-container" className="repositories-wrapper">
              {repositories.map(repositorie => (
                <Repositories repositories={repositorie} />
                ))}
            </div>
          </div>
        </main>
      </div>
    )
  } else {
    return (
      <div className="loading-spinner">
        <ReactLoading type={"spin"} color={"#555"} height={100} width={100} />
      </div>
    )
  }

}

export default Profile;
