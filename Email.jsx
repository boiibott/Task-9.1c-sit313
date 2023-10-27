import React, { useState } from 'react';
import './Email.css';

const Email = () => {
    // State for holding the subscriber's email and a message
    const [subscriberEmail, setSubscriberEmail] = useState('');
    const [message, setMessage] = useState('');

    // Handler function for the subscription process
    const handleSubscribe = async () => {
        try {
            const response = await fetch('http://localhost:3000/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: subscriberEmail }),
            });
    
            if (response.ok) {
                // Subscription was successful
                setSubscriberEmail('');
                setMessage('Thank you for subscribing!');
            } else {
                // Handle the error here
                setMessage('Subscription failed. Please try again.');
            }
        } catch (error) {
            // Handle any network or other errors here
            setMessage('An error occurred. Please try again later.');
        }
    }

    return (
        <div className="containeremail">
            <p className="containeremail-p">SIGN UP FOR OUR DAILY INSIDER</p>
            <input
                type="email"
                name="email"
                required
                value={subscriberEmail}
                onChange={(e) => setSubscriberEmail(e.target.value)}
                className="containeremail-input"
                placeholder="Enter your email"
            />
            <button onClick={handleSubscribe} className="containeremail-button">
                Subscribe
            </button>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Email;
