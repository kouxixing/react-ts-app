import React, { useEffect } from "react";
import './login.less';
import LoginForm from './components/loginForm';


function Login() {
    
    useEffect(() => {
        console.log("aaa")
    }, [])
    return (
        <div className="login-page">
            <div className="header">
                <img src={require("../../assets/images/CityWorks.png")} alt=""/>
                <span className="title">CityWorks OS</span>
            </div>
            <div className="login-form">
                <LoginForm />
                <img src={require("../../assets/images/login-bg.png")} alt=""/>
            </div>
        </div>
    )
}
export default Login;