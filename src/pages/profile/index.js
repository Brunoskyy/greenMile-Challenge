import React from 'react';

function Profile() {
    const githubUsername = localStorage.getItem('gitUser')

    return (
        <div>
            <h1>{githubUsername}</h1>
        </div>
    )
}

export default Profile;