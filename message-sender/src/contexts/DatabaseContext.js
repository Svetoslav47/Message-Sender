import React, { createContext, useContext, useState } from 'react';
import { doc } from "firebase/firestore";
import { db } from '../firebase';

const DatabaseContext = createContext();

export const useDatabase = () => {
    return useContext(DatabaseContext);
}

export const DatabaseProvider = ({ children }) => {
    const getUserDocRef = (uid) => {
        return doc(db, `users/`, uid);
    }
    
    //const friends = 

    const value = {
        db,
        getUserDocRef
    }

    return (
        <DatabaseContext.Provider value={value}>
            {children}
        </DatabaseContext.Provider>
    );
}