import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import api from '../../services/api'

import './styles.css'

function DevForm() {
    const [github_username, setGithubUsername] = useState('')
    const history = useHistory()

    
    async function handleQuery(e) {
        e.preventDefault()
        
        try {
            const response = await api.get(`/${github_username}`)
                console.log(response.data)
                localStorage.setItem('gitUser', github_username)
                history.push('/profile')
            } catch (error) {
                console.log(error.message)
                const alerta = document.querySelector('.error')
                alerta.innerText = 'Usuário não foi encontrado.'
            }
    }

    return (
        <div className="form-wrapper">
            <form onSubmit={handleQuery}>
                <p className="App-title"><span>green</span>mile Challenge</p>
                <div className="input-block">
                <label htmlFor="github_username">Usuário do Github</label>
                <input 
                    name="github_username" 
                    id="github_username" 
                    required
                    value={github_username}
                    onChange={e => setGithubUsername(e.target.value)}
                    placeholder="Digite aqui o Usuário"
                />
                <p className="error"></p>
                </div>
                
                <button type="submit" >Consultar Perfil</button>
            </form>
        </div>
    )
}

export default DevForm;