import  { useState } from 'react';
import './auth.css';
// import Navbar from '../navbar/nav';

export default function Auth() {
    const [isSignUp, setIsSignUp] = useState(false);

    const toggleForm = () => {
        setIsSignUp(prevState => !prevState);
    };

    return (
        <div className="auth-container">
            <div className="auth-form">
                <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
                <form>
                    {isSignUp && (
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                    )}
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    {isSignUp && (
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" id="confirmPassword" name="confirmPassword" required />
                        </div>
                    )}
                    <button type="submit" className='sign'>{isSignUp ? 'Sign Up' : 'Sign In'}</button>
                </form>
                <p onClick={toggleForm}>
                    {isSignUp ? 'Already have an account? Sign In' : 'Don\'t have an account? Sign Up'}
                </p>
            </div>
        </div>
    );
}
