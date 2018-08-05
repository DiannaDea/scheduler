import React from 'react';
import {Field, reduxForm} from 'redux-form';

import {
    Input,
    Form,
    FormGroup,
    Button,
    Label
} from 'reactstrap';


let LoginForm = (props) => {
    const {handleSubmit} = props;

    return (
        <React.Fragment>
            <Form onSubmit={handleSubmit}>

                <h2>Sign In</h2>

                <hr/>

                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                        tag={Field}
                        type="email"
                        component="input"
                        name="email"
                        placeholder="Email Address"/>
                </FormGroup>

                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                        tag={Field}
                        type="password"
                        component="input"
                        name="password"
                        placeholder="Password"/>
                    </FormGroup>

                <hr/>

                <FormGroup check row>
                    <Button color="info">Sign in</Button>
                </FormGroup>
            </Form>
        </React.Fragment>
    )
};


LoginForm = reduxForm({
    form: 'login'
})(LoginForm);
export default LoginForm;
