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


class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
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
                                (!token) ?
                                    (<NavItem>
                                        <NavLink tag={Link} to='/signin'>Sign in</NavLink>
                                    </NavItem>)
                                    :
                                    (
                                       <React.Fragment>
                                           <NavItem>
                                               <NavLink tag={Link} to='/schedule'>Schedule</NavLink>
                                           </NavItem>
                                           <NavItem>
                                               <NavLink tag={Link} to='/signout'>Logout</NavLink>
                                           </NavItem>
                                       </React.Fragment>

                                    )
                            }
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;
