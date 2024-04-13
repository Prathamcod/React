// eslint-disable-next-line no-unused-vars
import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
    const { User } = useContext(UserContext)

    if (!User) return <div>Please Register Here!!</div>

    return <div>
        welcome to my website:{User.username}
        <br>
        </br>
        My email is : {User.UserEmail}
        <br></br>
        My password is:{User.password}
        
    </div>

}

export default Profile