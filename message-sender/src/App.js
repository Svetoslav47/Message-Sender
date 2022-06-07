import React from 'react'
import { AuthProvider } from './contexts/AuthContext.js';
import { DatabaseProvider } from './contexts/DatabaseContext.js';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import SignIn from './pages/SignIn/SignIn.jsx'
import SignUp from './pages/SignUp/SignUp.jsx';
import MainPage from "./pages/MainPage/MainPage.jsx"

const App = () => {
    return (
        <DatabaseProvider>
            <AuthProvider>
                <Router>
                    <Routes>
                        <Route path='/signup' element={<SignUp />}/>
                        <Route path='/signin' element={<SignIn />}/>
                        <Route exact path='/' element={<MainPage />}/>
                    </Routes>
                </Router>
            </AuthProvider>
        </DatabaseProvider>
    );
}

function About() {
    return <h2>About</h2>;
}

export default App;