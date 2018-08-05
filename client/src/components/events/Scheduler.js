import React, {Component} from 'react';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import {Container} from 'reactstrap'

import EventModal from './EventModal';
import AddModal from './AddEventModal';

import {getEvents, deleteEvent, addEvent} from '../../actions/eventsActions';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import './customCalendar.css';

BigCalendar.momentLocalizer(moment);

const minDate = moment({hour: 8}).toDate();
const maxDate = moment({hour: 17, minute: 1}).toDate();

export default class Scheduler extends Component {
    constructor(props) {
        super(props);

        this.state = {
            eventInfoModal: false,
            addModal: false,
            currentEventId: null,
            timeFrom: null,
            timeTo: null
        };

        this.toggleModalEvent = this.toggleModalEvent.bind(this);
        this.toggleAddModal = this.toggleAddModal.bind(this);

        this.deleteEvent = this.deleteEvent.bind(this);
        this.addEvent = this.addEvent.bind(this);

        this.props.dispatch(getEvents());
    }

    toggleModalEvent(event) {
        this.setState({
            eventInfoModal: !this.state.eventInfoModal,
            currentEventId: (event) ? event.id : null
        });
    }

    toggleAddModal(slotInfo) {
        this.setState({
            addModal: !this.state.addModal,
            timeFrom:
                (slotInfo && slotInfo.start)
                    ? slotInfo.start.toLocaleString()
                    : null,
            timeTo:
                (slotInfo && slotInfo.end)
                    ? slotInfo.end.toLocaleString()
                    : null
        });
    }

    transformEvents() {
        return this.props.events.map((event) => {
            const {
                start, duration, title, _id
            } = event;
            return {
                id: _id,
                title,
                start: moment({hour: 8}).add({minute: start}).toDate(),
                end: moment({hour: 8}).add({minute: start + duration}).toDate()
            };
        });
    }

    deleteEvent(id) {
        this.props.dispatch(deleteEvent(id));
    }

    addEvent(title) {
        const newStartDate = moment(this.state.timeFrom);
        const newEndDate = moment(this.state.timeTo);

        const start = newStartDate.diff(moment({hour: 8}), 'minutes');

        const duration = newEndDate.diff(newStartDate, 'minutes');

        this.props.dispatch(addEvent(start, title.title, duration));
        this.toggleAddModal();

    }

    render() {
        const newEvents = (this.props.events) ? this.transformEvents() : [];
        return (
            <Container>
                <BigCalendar
                    selectable
                    onSelectEvent={event => this.toggleModalEvent(event)}
                    events={newEvents}
                    view="day"
                    views={['day']}
                    step={15}
                    min={minDate}
                    max={maxDate}
                    defaultDate={new Date()}
                    toolbar={false}
                    onSelectSlot={(slotInfo) => this.toggleAddModal(slotInfo)}
                />
                <EventModal
                    isOpen={this.state.eventInfoModal}
                    toggle={this.toggleModalEvent}
                    eventId={this.state.currentEventId}
                    events={newEvents}
                    deleteEvent={this.deleteEvent}
                />
                <AddModal
                    isOpen={this.state.addModal}
                    toggle={this.toggleAddModal}
                    timeFrom={this.state.timeFrom}
                    timeTo={this.state.timeTo}
                    addEvent={this.addEvent}
                />
            </Container>
        );
    }
}
