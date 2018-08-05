import React, {Component} from 'react';

import {connect} from 'react-redux';
import {withRouter} from 'react-router'
import {Container} from 'reactstrap';

import LoginForm from './LoginForm';
import {login} from '../../actions/authActions';


class Login extends Component {
    constructor(props){
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin({email, password}) {
        this.props.dispatch(login(email, password));
    };

    render() {
        const token = localStorage.getItem('token');
        if (token) {
            this.props.history.push('/schedule')
        }
        return (
            <Container>
                <LoginForm onSubmit={this.handleLogin}/>
            </Container>
        );
    }
}

export default withRouter(connect(() => {})(Login))
