import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
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
            setLoader(false)
        });

        return () => unsubscribe();

    },[]);


    const googleLogin = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider);
        
    }
    const emailSignup = (email,password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const logout = () => {
        return signOut(auth);
    }
    const values = {
        user,
        loader,
        googleLogin,
        emailSignup,
        logout
    }
    return (
        <DataProvider.Provider value={values}>
            {children}
        </DataProvider.Provider>
    );
};

export default AuthProvider;