import React, {Component} from 'react';

import EventModal from './eventModal';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';

import {getEvents} from '../../actions/eventsActions';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import './customCalendar.css';

BigCalendar.momentLocalizer(moment);

const minDate = moment({hour: 8}).toDate();
const maxDate = moment({hour: 17}).toDate();

// TODO show last time label
// TODO change color on select event

export default class Scheduler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalEvent: false,
            currentEventId : null
        };
        this.toggleModalEvent = this.toggleModalEvent.bind(this);

        this.props.dispatch(getEvents());
    }

    toggleModalEvent(event) {
        this.setState({
            modalEvent: !this.state.modalEvent,
            currentEventId: event.id
        });
    }

    transformEvents() {
        return this.props.events.map(event => {
            const {start, duration, title, _id} = event;
            return {
                id: _id,
                title,
                start: moment({hour: 8}).add({minute: start}).toDate(),
                end: moment({hour: 8}).add({minute: start + duration}).toDate()
            }
        })
    }

    render() {
        const newEvents = (this.props.events) ? this.transformEvents() : [];

        return (
            <div>
                <BigCalendar
                    selectable
                    onSelectEvent={(event) => this.toggleModalEvent(event)}
                    events={newEvents}
                    view="day"
                    views={['day']}
                    step={15}
                    min={minDate}
                    max={maxDate}
                    defaultDate={new Date()}
                    toolbar={false}
                />
                <EventModal
                    isOpen={this.state.modalEvent}
                    toggle={this.toggleModalEvent}
                    eventId={this.state.currentEventId}
                    events={newEvents}
                />
            </div>
        );
    }
}
