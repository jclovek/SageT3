import React from "react";
import { SocialIcon } from 'react-social-icons';
import { FaGlobeAmericas, FaHome, FaStethoscope, FaShoppingBag, } from "react-icons/fa";
import { PiMegaphoneFill } from "react-icons/pi";
import Newsletter from "@/components/Newsletter";

// import Row1Image from "/images/Image 27.png"; // Example image path


function Blog() {
    return(
        <div>
            <div className="blog-navbar">
                
            </div>

            <div className="blog-title">
                <h1>Filter blog posts by category</h1>
                <div className="blog-filter">
                    <div className="blog-icons">
                        <button className="icon-container" style={{color: 'white'}}>
                            <FaGlobeAmericas size={32} />
                            <p className="blog-category">World</p>
                        </button>
                        <button className="icon-container" style={{color: 'white'}}>
                            <FaHome size={32} />
                            <p className="blog-category">Home</p>
                        </button>
                        <button className="icon-container" style={{color: 'white'}}>
                            <FaStethoscope size={32} />
                            <p className="blog-category">Health</p>
                        </button>
                        <button className="icon-container" style={{color: 'white'}}>
                            <FaShoppingBag size={32} />
                            <p className="blog-category">Lifestyle</p>
                        </button>
                        <button className="icon-container" style={{color: 'white'}}>
                            <PiMegaphoneFill size={32} />
                            <p className="blog-category">Voice</p>
                        </button>
                    </div>
                </div>
            </div>
            <div className="blog-content-section">
                <div className="row-container">
                    <div className="content-row">
                        <img src={'/images/Image 27.png'} alt="Row 1" className="row-image" />
                        <div className="row-text">
                            <p>Article | Air | Health</p>
                            <h1>Boost Your Cognitive Function by up to 50%!</h1>
                            <p>According to the UN, air pollution kills 7 million people every year. #air #health</p>
                            <p><a href="https://www.origen.consulting/">Read more.</a></p>
                            <div className="blog-share">
                                <p>Share</p>
                                <SocialIcon url="https://www.facebook.com/" style={{ height: 25, width: 25 }} />
                                <SocialIcon url="https://www.twitter.com" style={{ height: 25, width: 25 }} />
                            </div>
                        </div>
                      
                    </div>
                    <div className="content-row">
                        <img src={'/images/Image 31.jpg'} alt="Row 2" className="row-image" />
                        <div className="row-text">
                            <p>DIY | Air | Health</p>
                            <h1>DIY Air Freshner</h1>
                            <h2>Ingredients: </h2>
                            <ul style={{ listStyleType: 'disc' }} class = "indented-list">
                                <li> 20 drops lavender essence oil </li>
                                <li> 10 drops lemon essence oil </li>
                                <li> 4 oz distilled water </li>
                            </ul>
                            <p><a href="https://www.origen.consulting/">Get the ingredients.</a></p>
                            <div className="blog-share">
                                <p>Share</p>
                                <SocialIcon url="https://www.facebook.com/" style={{ height: 25, width: 25 }} />
                                <SocialIcon url="https://www.twitter.com" style={{ height: 25, width: 25 }} />
                            </div>
                        </div>
                    </div>
                    <div className="content-row">
                        <img src={'/images/Image 28.png'} alt="Row 3" className="row-image" />
                        <div className="row-text">
                            <p>Shop | Air | Health</p>
                            <h1>Get this toxic-free Household Cleaner Starter Kit!</h1>
                            <p>Protect your family's health with toxic-free household cleaners. </p>
                            <p><a href="https://www.origen.consulting/">Shop details.</a></p>
                            <div className="blog-share">
                                <p>Share</p>
                                <SocialIcon url="https://www.facebook.com/" style={{ height: 25, width: 25 }} />
                                <SocialIcon url="https://www.twitter.com" style={{ height: 25, width: 25 }} />
                            </div>
                        </div>
                    </div>
                    <div className="content-row">
                        <div className="row-4">
                            <div className="icon-container" style={{color: 'white'}}>
                                <PiMegaphoneFill size={32} />
                                <p className="blog-category">Voice</p>
                            </div>
                            <form>
                                <input id='blog-bars' type='search' placeholder=" Name"></input>
                            </form>
                            <form>
                                <input id='blog-bars' type='search' placeholder=" Email"></input>
                            </form>
                            <button>Submit to learn more</button>
                        </div>

                        {/* <img src={'/images/Image 28.png'} alt="Row 4" className="row-image" /> */}
                        <div className="row-text">
                            <p>Shop | Air | Health</p>
                            <h1>Ban Toxic Chemicals</h1>
                            <p>We deserve to count on our government to protect us from products
                                that use toxic chemicals that are detrimental to our health and environment.
                            </p>
                            <p><a href="https://www.origen.consulting/">Sign the petition.</a></p>
                            <div className="blog-share">
                                <p>Share</p>
                                <SocialIcon url="https://www.facebook.com/" style={{ height: 25, width: 25 }} />
                                <SocialIcon url="https://www.twitter.com" style={{ height: 25, width: 25 }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column-container">
                    <div className="column-content">
                        <h1>Archives</h1>
                        <p><a href="https://www.origen.consulting/">Home</a></p>
                        <p><a href="https://www.origen.consulting/">Health</a></p>
                        <p><a href="https://www.origen.consulting/">Lifestyle</a></p>
                        <p><a href="https://www.origen.consulting/">World</a></p>
                        <p style={{ marginLeft: '20px' }}><a href="https://www.origen.consulting/">Air</a></p>
                        <p style={{ marginLeft: '20px' }}><a href="https://www.origen.consulting/">Earth</a></p>
                        <p style={{ marginLeft: '20px' }}><a href="https://www.origen.consulting/">Energy</a></p>
                        <p style={{ marginLeft: '20px' }}><a href="https://www.origen.consulting/">Water</a></p>
                        <p style={{ marginLeft: '20px' }}><a href="https://www.origen.consulting/">Humans</a></p>
                        <p style={{ marginLeft: '20px' }}><a href="https://www.origen.consulting/">Allies</a></p>
                        <p><a href="https://www.origen.consulting/">Voice</a></p>
                    </div>
                </div>
            </div>
            <Newsletter />
        </div>
    );
};

export default Blog;