import React from 'react'
import { AuthProvider } from './contexts/AuthContext.js';
import { UserDataProvider } from './contexts/UserDataContext.js';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import SignIn from './pages/SignIn/SignIn.jsx'
import SignUp from './pages/SignUp/SignUp.jsx';
import MainPage from "./pages/MainPage/MainPage.jsx"

const App = () => {
    return (
        <AuthProvider>
            <UserDataProvider>
                <Router>
                    <Routes>
                        <Route path='/signup' element={<SignUp />}/>
                        <Route path='/signin' element={<SignIn />}/>
                        <Route exact path='/' element={<MainPage />}/>
                    </Routes>
                </Router>
            </UserDataProvider>
        </AuthProvider>
    );
}

function About() {
    return <h2>About</h2>;
}

export default App;