import React, { useState, useEffect, useRef } from 'react';

export default function Form() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const emailInputRef = useRef(null);
    const passwordInputRef = useRef(null);


    useEffect(() => {
        emailInputRef.current.focus();
    },[]);


    const handleSubmit = (e) => {
        e.preventDefault();
        let email=emailInputRef.current.value
        let pw = passwordInputRef.current.value
        alert(`Email is:${email} \n Password is : ${pw}`)
        console.log("Email is:",email);
        console.log("Password is:",pw);
        
    };

    return (
        <>
            <div className="s1">
                <form onSubmit={handleSubmit}>
                    <h1 className="s2">Login</h1><br /><br />

                    <label htmlFor="email">Email:</label><br />
                    <input ref={emailInputRef} type="text" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
                    /><br /><br />

                    <label htmlFor="password">Password:</label><br />
                    <input ref={passwordInputRef} type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
                    /><br /><br />

                    <button type="submit">Login</button>
                </form>
            </div>
        </>
    );
}
