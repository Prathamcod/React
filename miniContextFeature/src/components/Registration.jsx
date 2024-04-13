// To set The User 
import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

function Register() {
    const [UserEmail, setUserEmail] = React.useState('')
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('')
    const [male, setMale] = React.useState('')
    const [female, setFemale] = React.useState('')

    const { setUser } = useContext(UserContext)

    const handleRegister = (e) => {
        e.preventDefault()
        setUser({ username, password, male, female, UserEmail })
    }
    return (
        <>
            <div>
                <h1>Registration</h1>
                {/* Email */}
                <label htmlFor="Email">Email: </label>
                <input
                    className="text-left rounded-4"
                    value={UserEmail}
                    type="email"
                    placeholder="Enter your email"
                    onChange={(e) => setUserEmail(e.target.value)}
                />
                {"   "}
                {/* Name */}
                <label htmlFor="Name">Name: </label>

                <input
                    className="text-left rounded-4"
                    value={username}
                    type="text"
                    placeholder="Name"
                    onChange={(e) => setUsername(e.target.value)} />

                {/* Password */}
                {"   "}
                <label htmlFor="Password">Password: </label>

                <input
                    className="text-left rounded-4"
                    type="password"
                    value={password}
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                {"   "}
                {/* Gender */}
                <h3>Gender</h3>


                <input
                    type="radio"
                    name="gender"
                    id="male"
                    value={male}
                    onChange={() => {
                        setMale((prev) => !prev)
                    }}
                    checked />

                <label htmlFor="">Female: </label>
                {"   "}
                <input
                    type="radio"
                    name="gender"
                    id="female"
                    value={female}
                    onChange={() => {
                        setFemale((prev) => !prev)
                    }}
                />
                <label htmlFor="">Male: </label>
                <br></br>

                <button onClick={handleRegister}>Register</button>
            </div>
        </>
    )
}

export default Register