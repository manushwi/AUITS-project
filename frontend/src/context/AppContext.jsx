import { createContext } from "react";


export const AppContext = createContext()

const AppContextProvider = () => {
    return (
        <AppContext.Provider>
            {props.childern}
        </AppContext.Provider>
    )
}

export default AppContextProvider