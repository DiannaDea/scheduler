import React from 'react';
import {Field, reduxForm} from 'redux-form';

import {
    Input,
    Form,
    FormGroup,
    Button,
    Label
} from 'reactstrap';


let AddForm = (props) => {
    const {handleSubmit, from ,to} = props;

    return (
        <React.Fragment>
            <p>From: {from}</p>
            <p>To: {to}</p>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input
                        tag={Field}
                        type="text"
                        component="input"
                        name="title"
                        placeholder="Title"/>
                </FormGroup>
                <hr/>

                <FormGroup check row>
                    <Button color="info">Add</Button>
                </FormGroup>
            </Form>
        </React.Fragment>
    )
};


AddForm = reduxForm({
    form: 'addEvent'
})(AddForm);
export default AddForm;
