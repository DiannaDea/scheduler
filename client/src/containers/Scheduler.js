import {connect} from "react-redux";
import {withRouter} from 'react-router'

import Scheduler from '../components/events/Scheduler';

const mapStateToProps = (state) => ({
    events: state.events.data.events
});

export default withRouter(connect(mapStateToProps)(Scheduler));
