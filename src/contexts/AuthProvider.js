import React, { createContext, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import app from '../firebase/firebase.config';

const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        user,
        createUser
    }




    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;