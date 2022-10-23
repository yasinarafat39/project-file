import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
    return (
        <div>
            <h2>Here is Terms and Condition.</h2>
            <p>Go back <Link to='/register'>Registration</Link></p>
        </div>
    );
};

export default TermsAndCondition;