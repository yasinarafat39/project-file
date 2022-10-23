import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../context/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';



const Header = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.success('Log Out success')
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    return (
        <Navbar className='mb-4' collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand><Link to='/home'>Dragon News</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">All News</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className='d-flex align-items-center'>
                        <Nav.Link href="#deets">{user?.displayName}</Nav.Link>

                        <Link to="/profile">
                            {
                                user && user?.photoURL ?
                                    <Image style={{ height: '40px' }} roundedCircle src={user.photoURL} />
                                    :
                                    user && <FaUser></FaUser>
                            }
                        </Link>
                        <>
                            {
                                user?.uid ?
                                    <>
                                        <button className='ms-2' onClick={handleLogout}>Log Out</button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login' className='me-2'><button>Log In</button></Link>
                                        <Link to='/register'><button>Register</button></Link>
                                    </>
                            }
                        </>
                    </Nav>

                    <div className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                    </div>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;