import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../Authentications/firebase.config';



export const DataProvider = createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user,setUser] = useState([]);
    const [loader,setLoader] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,currentUser => {
            setUser(currentUser)
            setLoader(true)
        });

        return () => unsubscribe();

    },[]);


    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const logout = () => {
        return signOut(auth);
    }
    const values = {
        user,
        loader,
        googleLogin,
        logout
    }
    return (
        <DataProvider.Provider value={values}>
            {children}
        </DataProvider.Provider>
    );
};

export default AuthProvider;