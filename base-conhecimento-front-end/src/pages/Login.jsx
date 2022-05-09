import { useState } from "react";
import Routes from "../Routes";

import '../styles.css';
import { Link } from 'react-router-dom';
import { LayoutComponents } from "../components/LayoutComponents";

export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <LayoutComponents>
            <form className="login-form">
                <span className="login-form-title">Bem Vindo!</span>
                <span className="login-form-title">

                </span>
                <div className="wrap-input">
                    <input className="has-val input" type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                    <span className="focus-input" data-placeholder="Email"></span>
                </div>
                <div className="wrap-input">
                    <input className="has-val input" type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)} />
                    <span className="focus-input" data-placeholder="Password"></span>
                </div>
                < div className="container-login-form-btn">
                    <button className="login-form-btn">Login</button>
                </div>
                <div className="text-center">
                    <span className="txt1">Não possui conta?</span>

                    <Link className="txt2" to="/register">Criar Conta</Link>
                </div>
            </form>
        </LayoutComponents>

    );

}