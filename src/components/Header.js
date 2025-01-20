import { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
  } from 'reactstrap';
  import { NavLink } from 'react-router-dom';
//   import Logo from 'https://placehold.co/200x80';

const Header = (props) => {
    const {isLoggedIn} = props
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar dark color='primary' sticky='top'>
            <NavbarBrand className='ms-5' href='/'>
                <img src="https://placehold.co/200x80" alt='Tournament Select logo' className='float-start' />
            </NavbarBrand>
            <div className="d-flex align-items-start">
                {isLoggedIn && (
                    <Nav>
                        <NavItem>
                            <NavLink className='nav-link' to='/'>
                                Dashboard
                            </NavLink>
                        </NavItem>
                    </Nav>
                )}
                
                <div className="flex navbar-user" >
                    <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} className="block">
                    <i class="fa fa-user fa-lg" aria-hidden="true"></i>
                    </NavbarToggler>
                    
                </div>
            </div>
            
            
            <Collapse isOpen={menuOpen} className="navbar-collapse-user border border-secondary" navbar>
                <Nav className='ms-auto' navbar>
                    {!isLoggedIn && (
                        <>
                        <NavItem>
                            <NavLink className='nav-link' to='/sign-up'>
                                Sign up
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/'>
                                Log in
                            </NavLink>
                        </NavItem>
                        </>
                        
                    )}
                    
                    {isLoggedIn && (
                        <NavItem>
                            <NavLink className='nav-link' to='/'>
                                Settings
                            </NavLink>
                        </NavItem>
                    )}
                   
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header;