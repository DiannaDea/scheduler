import React, {Component} from 'react';

import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

export default class EventModal extends Component {
    constructor(props) {
        super(props);
        this.deleteEvent = this.deleteEvent.bind(this);
    }

    deleteEvent() {
        this.props.toggle();
        this.props.deleteEvent(this.props.eventId);
    }

    render() {
        const {isOpen, toggle, eventId, events} = this.props;
        const curEvent = events.filter(event => event.id === eventId)[0];
        return (
            <div>
                <Modal isOpen={isOpen} toggle={toggle} className={this.props.className}>
                    <ModalHeader toggle={toggle}>
                        {
                            (curEvent)
                                ? curEvent.title
                                : 'Event information'
                        }
                    </ModalHeader>
                    <ModalBody>
                        {
                            (curEvent)
                                ? <React.Fragment>
                                    <p><b>Start:</b> {curEvent.start.toLocaleString()}</p>
                                    <p><b>End:</b> {curEvent.end.toLocaleString()}</p>
                                </React.Fragment>
                                : null
                        }
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={this.deleteEvent}>Delete</Button>{' '}
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
