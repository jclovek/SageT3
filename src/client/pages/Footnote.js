import React, {useEffect, useState} from 'react'
import { SocialIcon } from 'react-social-icons';

function Footnote() {
  
    return (
        <div className="footnote">
            <div className="column">
                <h1 id='Barcelony-Font'>Contact Us</h1>
                <h2>Phone:</h2>
                <p>212-123-4567</p>

                <h2>eMail:</h2>
                <p>hello.sageandcoconuts.com</p>
            </div>
            <div className="column">
                <h1 id='Barcelony-Font'>Share</h1>
                <p>Refer a Friend</p>
                <div className="share-icons">
                    <SocialIcon url="https://www.pinterest.com " />
                    <SocialIcon url="https://www.facebook.com/" />
                    <SocialIcon url="https://www.instagram.com" />
                </div>
            </div>
            
            <div className="column">
                <h1 id='Barcelony-Font'>Quick Links</h1>
                <div className="inner-column">

                    <div className="left-column">
                        <p><a href="https://www.origen.consulting/">About Us</a></p>
                        <p><a href="https://www.origen.consulting/">Gift cards</a></p>
                        <p><a href="https://www.origen.consulting/">Membership</a></p>
                        <p><a href="https://www.origen.consulting/">1% Program</a></p>
                        <p><a href="https://www.origen.consulting/">Vendor application</a></p>
                    </div>

                    <div className="right-column">
                        <p><a href="https://www.origen.consulting/">FAQs</a></p>
                        <p><a href="https://www.origen.consulting/">Privacy policy</a></p>
                        <p><a href="https://www.origen.consulting/">Terms of service</a></p>
                        <p><a href="https://www.origen.consulting/">Return policy</a></p>
                        <p><a href="https://www.origen.consulting/">Site map</a></p>
                    </div>
                </div>
            </div>
                {/* <div className="left-column">
                    <p><a href="https://www.origen.consulting/">About Us</a>
                    <a href="https://www.origen.consulting/">FAQs</a></p>
                    <p><a href="https://www.origen.consulting/">Gift cards</a>
                    <a href="https://www.origen.consulting/">Privacy policy</a></p>
                    <p><a href="https://www.origen.consulting/">Membership</a>
                    <a href="https://www.origen.consulting/">Terms of service</a></p>
                    <p><a href="https://www.origen.consulting/">1% Program</a>
                    <a href="https://www.origen.consulting/">Return policy</a></p>
                    <p><a href="https://www.origen.consulting/">Vendor application</a>
                    <a href="https://www.origen.consulting/">Site map</a></p>
                </div> */}


            {/* </div> */}
        </div>
  
    );
}

export default Footnote