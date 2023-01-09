'use client';

import { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export function AuthWrapper({children}) {

    const [globalState, SetGlobalState] = useState({
        tokens : null,
        login,
    })

    async function login(userInfo) {
        const url = "https://cookie-stands-a-o.herokuapp.com/api/token/"; 
        const res = await axios.post(url, userInfo);
        SetGlobalState({
            tokens : res.data,
            login,
        })
    }


    return(
        <AuthContext.Provider value={globalState}>
            {children}
        </AuthContext.Provider>
    )
}