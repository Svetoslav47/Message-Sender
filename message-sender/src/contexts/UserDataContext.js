import React, { createContext, useContext, useState } from 'react';

const UserDataContext = createContext();

export const useUserData = () => {
    return useContext(UserDataContext);
}

export const UserDataProvider = ({ children }) => {

    //const friends = 

    const value = {
    }

    return (
        <UserDataContext.Provider value={value}>
            {children}
        </UserDataContext.Provider>
    );
}