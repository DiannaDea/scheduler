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
            <p><b>From:</b> {from}</p>
            <p><b>To:</b> {to}</p>
            <hr/>
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
