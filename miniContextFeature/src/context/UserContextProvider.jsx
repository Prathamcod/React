import React from "react";

import UserContext from "./UserContext";
import { useState } from "react";

const UserContextProvider = ({ children }) => {
    const [User, setUser] = useState(null)
    return (
        // Wrap the data
        <UserContext.Provider value={{ User, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider