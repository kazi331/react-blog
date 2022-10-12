import axios from 'axios'
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
    // get curent user form localStorage or set to null if no user found!
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')) || null)

    // CREATE LOGIN FUNCTION
    const login = async (inputs) => {
        const res = await axios.post('http://localhost:5000/api/auth/login', inputs)
        setCurrentUser(res.data)
    }
    // CREATE LOGOUT FUNCTION
    const logout = async () => {
        const res = await axios.post('http://localhost:5000/api/auth/logout')
        setCurrentUser(null);
        console.log(res)
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser))
    }, [currentUser])
    return (
        <AuthContext.Provider value={{ currentUser, login, logout }} >
            {children}
        </AuthContext.Provider>
    );
}
