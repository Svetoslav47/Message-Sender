import React, { useEffect } from 'react'

import { useAuth } from '../../contexts/AuthContext';

import { useNavigate } from 'react-router-dom';

const MainPage = () => {
    const { currentUser, logOut } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        if (currentUser == null) {

            navigate("/signin");
        }
    }, [])

    const handleSignOut = () => {
        logOut().then(() => {
            navigate("/signin");
        })
    }

    return (
        <div>
            <h1>Logged In as: {currentUser?.email}</h1>
            <button onClick={handleSignOut}>Sign Out</button>
        </div>
    )
}

export default MainPage