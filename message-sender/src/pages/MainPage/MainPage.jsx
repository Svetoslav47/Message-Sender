import React, { useEffect, useState } from 'react'

import { useAuth } from '../../contexts/AuthContext';

import { useNavigate } from 'react-router-dom';

import "./styles.css"

const MainPage = () => {
    const { currentUser, logOut } = useAuth();
    const [chatsType, setChatsType] = useState("both");

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

    const testFunc = (event) => {
        setChatsType(event.target.value);
    }

    return (
        <div className='mainPage'>
            <nav className='navBar'>
                <h1 className='title'>Message Sender</h1>
                <button onClick={handleSignOut}>log out</button>
            </nav>
            <main className='main'>
                <div className='chatsAndGroups'>
                    <h1 className='title'>Chats</h1>
                    <div className='chatOptions' onChange={testFunc}>
                        <input type="radio" id='chat' name='chatOptions' className='option' value={"chat"} />
                        <label htmlFor="chat" className='optionLabel'>Chat</label>

                        <input type="radio" id='both' name='chatOptions' className='option' value={"both"} defaultChecked />
                        <label htmlFor="both" className='optionLabel'>Both</label>

                        <input type="radio" id='groups' name='chatOptions' className='option' value={"groups"} />
                        <label htmlFor="groups" className='optionLabel'>Groups</label>
                    </div>

                    <ul>
                        <li>{chatsType}</li>
                    </ul>
                </div>
                <div className='chat'>
                    <div className='friendInfo'></div>
                    <div className='messageContainer'>

                    </div>
                    <div className='typeBox'>

                    </div>
                </div>
            </main>
        </div>
    )
}

export default MainPage