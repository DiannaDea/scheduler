import React, {Component} from 'react';

import {Redirect} from 'react-router-dom';

import LoginForm from './LoginForm';
import {login} from '../../actions/loginActions';


class Login extends Component {

    handleLogin = ({email, password}) => {
        this.props.dispatch(login(email, password, this.props.history));
    };

    render = () => {
        const {token} = this.props;
        if (token) {
            return <Redirect to="/account"/>;
        }
        return (
            <div className="form-container">
                <div className="auth-form">
                    <LoginForm onSubmit={this.handleLogin}/>
                </div>
            </div>
        );
    }
}

export default Login;
