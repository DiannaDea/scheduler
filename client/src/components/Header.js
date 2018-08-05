import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';
import {importJSON} from '../actions/eventsActions';


class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };

        this.downloadJSON = this.downloadJSON.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    downloadJSON() {
        this.props.dispatch(importJSON());
    }

    render() {
        const token = localStorage.getItem('token');

        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">
                        My Scheduler
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {
                                (token) ?
                                    (
                                        <React.Fragment>
                                            <NavItem>
                                                <NavLink tag={Link} to='/schedule'>Schedule</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink tag={Link} to='/signout'>Logout</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <Button onClick={this.downloadJSON} color="info">Download</Button>
                                            </NavItem>
                                        </React.Fragment>

                                    ) : null
                            }
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;
