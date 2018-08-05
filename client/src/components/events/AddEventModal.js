import React, {Component} from 'react';
import {Modal, ModalHeader, ModalBody} from 'reactstrap';

import AddForm from './AddForm';

export default class AddModal extends Component {
    render() {
        const {isOpen, toggle, timeFrom, timeTo, addEvent} = this.props;
        return (
            <div>
                <Modal isOpen={isOpen} toggle={toggle} className={this.props.className}>
                    <ModalHeader toggle={toggle}>Create new event</ModalHeader>
                    <ModalBody>
                        <AddForm onSubmit={addEvent} from={timeFrom} to={timeTo}/>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}
