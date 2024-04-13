import React from "react";

import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
    const [User, setUser] = React.useState(null);
    return (
        // Wrap the data
        <UserContext.Provider value={{ User, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider