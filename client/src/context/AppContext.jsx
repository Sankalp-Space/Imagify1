import { createContext,useState } from "react";

export const AppContext=createContext()

const AppContextprovider=(props)=>{
    const [showLogin, setShowLogin]=useState(false)
    
    const [user, setUser]= useState(null);

    const value ={
        user, setUser, showLogin,setShowLogin
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}

        </AppContext.Provider>
    )
}
export default AppContextprovider