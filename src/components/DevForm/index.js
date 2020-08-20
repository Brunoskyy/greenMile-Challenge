import React from 'react'
import './styles.css'

function DevForm() {

    return (
        <div className="form-wrapper">
            <form>
                <p className="App-title"><span>green</span>mile Challenge</p>
                <div className="input-block">
                <label htmlFor="github_username">Usuário do Github</label>
                <input 
                    name="github_username" 
                    id="github_username" 
                    required
                    // value={github_username}
                    // onChange={e => setGithubUsername(e.target.value)}
                    placeholder="Digite aqui o Perfil a ser consultado :D"
                />
                </div>
                
                <button type="submit" >Consultar Perfil</button>
            </form>
        </div>
    )
}

export default DevForm;