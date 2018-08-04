import {connect} from "react-redux";
import {withRouter} from 'react-router'

import Header from '../components/Header';

const mapStateToProps = (state) => ({
    //token: state.auth.login.data.token
});

export default withRouter(connect(mapStateToProps)(Header));
