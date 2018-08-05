import React, {Component} from 'react';

import {connect} from 'react-redux';
import {withRouter} from 'react-router'
import {Container} from 'reactstrap';

import LoginForm from './LoginForm';
import {login} from '../../actions/authActions';


class Login extends Component {

    handleLogin({email, password}) {
        this.props.dispatch(login(email, password));
    };

    render() {
        const token = localStorage.getItem('token');
        (token)
            ? this.props.history.push('/schedule')
            : null;

        return (
            <Container>
                <LoginForm onSubmit={this.handleLogin}/>
            </Container>
        );
    }
}

export default withRouter(connect(() => {})(Login))
