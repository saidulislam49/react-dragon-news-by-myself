import { createContext, useEffect, useState } from "react";
import auth from './../firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //logIn
    const logIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // LogOut
    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    // Logged in user
    useEffect(()=>{
        onAuthStateChanged(auth, (currentUser)=>{
            console.log('currentUser:', currentUser);
            setUser(currentUser);
            setLoading(false)
        })
    },[])

    const authInfo = {
        user,
        logIn,
        createUser,
        logOut,
        loading,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;