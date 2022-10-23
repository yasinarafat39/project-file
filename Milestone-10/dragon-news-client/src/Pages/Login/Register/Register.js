import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../context/AuthProvider';


const Register = () => {
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const { createUser, updateUserProfile, emailVerification } = useContext(AuthContext)
    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;

        console.log(name, email, photoURL, password);


        createUser(email, password)
            .then(userCredential => {
                toast.success('Register Success!')
                console.log(userCredential.user);
                setError('');
                navigate('/home')
                handleUpdateUserProfile(name, photoURL)
                handleVerificationEmail()
            })
            .catch(error => {
                toast.error(error.message)
                setError(error.message)
            })
    }

    const handleVerificationEmail = () => {
        emailVerification()
            .then(() => {
                toast.success('Verification Email sent. Please check your email address')
            })
    }

    const handleUpdateUserProfile = (name, photoURL) => {

        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }

    const handleAccepted = (event) => {
        setAccepted(event.target.checked);
    }


    return (
        <div>
            <h2 className='text-center mb-4' >Register Now!</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="forBasicText">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Type your name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="forBasicText">
                    <Form.Label>Photo</Form.Label>
                    <Form.Control name='photoURL' type="text" placeholder="past your photoURL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>

                <Form.Text className='text-danger'>
                    {error}
                </Form.Text>
                <br />

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handleAccepted}
                        type="checkbox"
                        label={<>Accept our <Link to="/terms">Terms and Conditions</Link></>} />
                </Form.Group>

                <Button variant="primary" type="submit" disabled={!accepted}>
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default Register;