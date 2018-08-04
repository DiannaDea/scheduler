import React from 'react';
import {Field, reduxForm} from 'redux-form';

import {Link} from 'react-router-dom';

import {Input, Form, FormGroup, Button, InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';


let LoginForm = (props) => {
    const {handleSubmit} = props;
    return (
        <React.Fragment>
            <Form onSubmit={handleSubmit}>

                <h2>Sign In</h2>
                <p>Please fill in this form to login to your account!</p>
                <hr/>


                <InputGroup>
                    <Input tag={Field} type="email" component="input" name="email" placeholder="Email Address"/>
                </InputGroup>

                <InputGroup>
                    <Input tag={Field} type="password" component="input" name="password" placeholder="Password"/>
                </InputGroup>


                <FormGroup>
                    <div className="text-center">Don't have an account? <Link to='/register'>Sign up here</Link></div>
                </FormGroup>
                <FormGroup check row>
                    <Button>Sign In</Button>
                </FormGroup>
            </Form>
        </React.Fragment>
    )
};


LoginForm = reduxForm({
    form: 'login'
})(LoginForm);
export default LoginForm;
