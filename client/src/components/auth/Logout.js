import {Component} from 'react';

import {withRouter} from 'react-router';
import {connect} from 'react-redux';

import {logout} from '../../actions/authActions';

class Logout extends Component {
    constructor(props) {
        super(props);
        this.props.dispatch(logout());
    }

    render() {
        return null;
    }
}

export default withRouter(connect((state) => {})(Logout));
