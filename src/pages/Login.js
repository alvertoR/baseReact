import React, { Component } from 'react';

//Assets
import icon from '../assets/icons/login.svg';
import './styles/Login.css';
//Components
import Footer from '../components/Footer';

class Login extends Component{

    state = {
        down: true,
    }

    render(){
        return(
            <div className="login">
                <form className="login-form">
                    <div className="login-form--image">
                        <img src={icon} alt="logo inicio sesión" />
                    </div>
                    <div className="login-form--container">
                        <label className="login-form-container--label">
                            Tu ser
                        </label>
                        <div className="login-form-container--input">
                            <input 
                                type="text"
                                name="user"
                                placeholder="..."
                            />
                        </div>
                    </div>
                    <div className="login-form--container">
                        <label className="login-form-container--label">
                            Tu Alma
                        </label>
                        <div className="login-form-container--input">
                            <input 
                                type="password"
                                name="user"
                                placeholder="..."
                            />
                        </div>
                    </div>
                    <button className="login-form--button">
                        Adelante
                    </button>
                </form>
                <Footer down={this.state.down} />
            </div>
        );
    }
}

export default Login;