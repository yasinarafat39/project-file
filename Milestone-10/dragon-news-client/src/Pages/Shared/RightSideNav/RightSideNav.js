import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaGoogle, FaGithub, FaFacebook, FaYoutube, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../context/AuthProvider';
import BrandCarousels from '../BrandCarousels/BrandCarousels';


const RightSideNav = () => {

    const { user, signInWithGoogle } = useContext(AuthContext)


    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                toast.success('Login success!')
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant='outline-primary'> <FaGoogle /> Sign in with Google</Button>
                <Button variant='outline-dark'> <FaGithub /> Sign in with Github</Button>
            </ButtonGroup>

            <div className='mt-4'>
                <h5 className=' '>Find us on</h5>

                <ListGroup>
                    <Link to={''} className='text-decoration-none mb-2 rounded'><ListGroup.Item> <FaFacebook /> Facebook</ListGroup.Item></Link>
                    <Link to={''} className='text-decoration-none mb-2 rounded'><ListGroup.Item> <FaYoutube /> Youtube </ListGroup.Item></Link>
                    <Link to={''} className='text-decoration-none mb-2 rounded'><ListGroup.Item> <FaTwitter /> Twitter</ListGroup.Item></Link>
                    <Link to={''} className='text-decoration-none mb-2 rounded'><ListGroup.Item> <FaLinkedin /> Linkedin </ListGroup.Item></Link>
                    <Link to={''} className='text-decoration-none mb-2 rounded'><ListGroup.Item> <FaInstagram /> Instagram</ListGroup.Item></Link>
                </ListGroup>
            </div>

            <div className='mt-3'>
                <BrandCarousels></BrandCarousels>
            </div>
        </div>
    );
};

export default RightSideNav;