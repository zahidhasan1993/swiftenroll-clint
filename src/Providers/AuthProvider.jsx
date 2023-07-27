import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../Authentications/firebase.config';



export const DataProvider = createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {

    const values = {name : "zahid", Age : 28}
    return (
        <DataProvider.Provider value={values}>
            {children}
        </DataProvider.Provider>
    );
};

export default AuthProvider;