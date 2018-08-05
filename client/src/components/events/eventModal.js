import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

class EventModal extends React.Component {

    render() {
        const {isOpen, toggle, eventId, events} = this.props;

        const curEvent = events.filter(event => event.id === eventId)[0];

        return (
            <div>
                <Modal isOpen={isOpen} toggle={toggle} className={this.props.className}>
                    <ModalHeader toggle={toggle}>Event information</ModalHeader>
                    <ModalBody>
                        {
                            (curEvent)
                                ? <React.Fragment>
                                    <p><b>Title:</b> {curEvent.title}</p>
                                    <p><b>Start:</b> {curEvent.start.toString()}</p>
                                    <p><b>End:</b> {curEvent.end.toString()}</p>
                                </React.Fragment>
                                : null
                        }
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={toggle}>Delete</Button>{' '}
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default EventModal;
