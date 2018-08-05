import React from 'react';

import AddForm from './AddForm';

import {Modal, ModalHeader, ModalBody} from 'reactstrap';

class AddModal extends React.Component {

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

export default AddModal;
