import React from 'react';

import AddForm from './AddForm';

import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

class AddModal extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        const {isOpen, toggle, timeFrom, timeTo, addEvent} = this.props;

        return (
            <div>
                <Modal isOpen={isOpen} toggle={toggle} className={this.props.className}>
                    <ModalHeader toggle={toggle}>Add</ModalHeader>
                    <ModalBody>
                        <AddForm onSubmit={addEvent} from={timeFrom} to={timeTo}/>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default AddModal;
