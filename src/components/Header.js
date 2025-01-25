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
import ProfilePicture from './images/ProfilePicture';
import Logo from '../assets/images/logo.png';
  
//   import Logo from 'https://placehold.co/200x80';

const Header = (props) => {
    const {isLoggedIn} = props
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar dark color='primary' sticky='top'>
            <NavbarBrand className='ms-5 logo' href='/'>
                <img src={Logo} alt='Tournament Select logo' className='float-start' />
            </NavbarBrand>
            <div className="d-flex align-items-center">
                
                <div className="flex navbar-user" >
                    <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} className="block">
                    {/* <i class="fa fa-user fa-lg" aria-hidden="true"></i> */}
                        <ProfilePicture/>

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
                        <>
                        <NavItem>
                            <NavLink className='nav-link' to='/'>
                                Dashboard
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/'>
                                Settings
                            </NavLink>
                        </NavItem>
                        </>
                        
                    )}
                   
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header;