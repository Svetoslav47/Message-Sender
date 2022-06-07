import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,  onAuthStateChanged, signOut } from "firebase/auth"
import { useDatabase } from './DatabaseContext';
import { setDoc, getDoc } from "firebase/firestore";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const {getUserDocRef, getUserFromDocs} = useDatabase();

    const [currentUser, setCurrentUser] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const signUp = (email, password) => {
        setIsLoading(true);
        const res = createUserWithEmailAndPassword(auth, email, password);
        res.then((userCredentials) => {
            const userDocumentRef = getUserDocRef(userCredentials.user.uid);
            setDoc(userDocumentRef,{
                email : userCredentials.user.email
            });
        })
        return res;
    }

    const signIn = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsebscribe = onAuthStateChanged(auth, (user) => {
            try {
                if(user == null){
                    setCurrentUser(null);
                    setIsLoading(false);
                }else{
                    const userDocumentRef = getUserDocRef(user?.uid);
                    
                    getDoc(userDocumentRef).then((userDocFromServer) => {
                        setCurrentUser(userDocFromServer.data());
                        setIsLoading(false);
                    })
                }
            } catch (error) {
                console.log(error)
            }
            
        })

        return unsebscribe
    }, [])
    

    const value = {
        currentUser,
        logOut,
        signUp,
        signIn
    }

    return (
        <AuthContext.Provider value={value}>
            {!isLoading && children}
        </AuthContext.Provider>
    );
}