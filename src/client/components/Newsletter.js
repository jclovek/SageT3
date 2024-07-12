import React from "react";

function Newsletter() {
    return(
        <div className="newsletter-container">
            <div className="newsletter-content">
                <span className="newsletter-title">
                    <h1 id='title-line'>Stay <span id='Barcelony-Font'>Connected</span></h1>
                    <p>Sign up for our Newsletter!</p>
                </span>
                <form className="newsletter-form">
                    <input className='newsletter-input' id='name-input' type='text' placeholder="Name"></input>
                    <input className='newsletter-input' id='email-input' type='text' placeholder="Email"></input>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;