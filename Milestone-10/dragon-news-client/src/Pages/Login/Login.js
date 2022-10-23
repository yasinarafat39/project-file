import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider';



const Login = () => {
    const [error, setError] = useState('');
    const { user, LogIn, setLoading } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleLogIn = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        LogIn(email, password)
            .then(userCredential => {
                console.log(userCredential.user);
                toast.success('Log In Success.');
                setError('');

                {
                    user && user?.emailVerified ? navigate(from, { replace: true }) : toast.warning('Please Verify Your Email. Verification link sent to your email address')
                }
            })
            .catch(error => {
                setError(error.message);
                toast.error(error.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }


    return (
        <div>
            <Form onSubmit={handleLogIn}>
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
                <Button variant="primary" type="submit">
                    Submit
                </Button>

            </Form>
        </div>
    );
};

export default Login;