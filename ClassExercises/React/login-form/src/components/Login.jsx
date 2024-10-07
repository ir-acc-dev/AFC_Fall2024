import { useState } from 'react'

const Login = () => {

    const[showPassword, setShowPassword] = useState(false)

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <form className = "form">
            <input type = {showPassword ? "text" : "password"} id = "password" placeholder = "Enter your password" />
            <input type = "checkbox" id="showPassword" onChange={handleShowPassword}/>
            <button type = "submit">Submit</button>
        </form>
    );
};

export default Login;