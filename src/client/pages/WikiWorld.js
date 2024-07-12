import React, { useState } from "react";
import Newsletter from "@/components/Newsletter";

const WikiWorld = () => {
    const [activeContent, setActiveContent] = useState("about-discover"); 

    const handleContentChange = (content) => {
        setActiveContent(content);
    };

    return (
        <div className="wiki-page">
            <div className="wiki-navbar">
                <button
                    className={activeContent === "about-discover" ? "active" : ""}
                    onClick={() => handleContentChange("about-discover")}
                >
                    Discover
                </button>
                <button
                    className={activeContent === "about-interact" ? "active" : ""}
                    onClick={() => handleContentChange("about-interact")}
                >
                    Interact
                </button>
                <button
                    className={activeContent === "about-contribute" ? "active" : ""}
                    onClick={() => handleContentChange("about-contribute")}
                >
                    Contribute
                </button>
                <button
                    className={activeContent === "about-en" ? "active" : ""}
                    onClick={() => handleContentChange("about-en")}
                >
                    EN
                </button>
            </div>

            <div className="about-content">
                {activeContent === "about-discover" && (
                    <div className="wiki-content">
                        <div className="world-top">
                            <div className="world-search-content">
                                <div id="world-search-container">
                                    <input type="text" id="world-search-bar" placeholder="  Enter a keyword"></input>
                                </div>
                                <p>Examples: Climate Change, Global Warming, Home</p>
                            </div>
                        </div>
                        <div className="world-grid">
                            <div className="world-item-1">
                                <h1>Let's</h1>
                                <h2 id="Barcelony-Font">Learn</h2>
                                <p>because what</p>
                                <p>we know matters</p>
                            </div>
                            <div className="world-item">
                                <a href="/Wiki">
                                    <img src={'/images/world-air.png'} alt="Air"/>
                                </a>
                            </div>
                            <div className="world-item">
                                <a href="/Earth">
                                    <img src={'/images/world-earth.png'} alt="Earth"/>
                                </a>
                            </div>
                            <div className="world-item">
                                <a href="/Wiki">
                                    <img src={'/images/world-energy.png'} alt="Energy"/>
                                </a>
                            </div>
                            <div className="world-item">
                                <a href="/Water">
                                    <img src={'/images/world-water.png'} alt="Water"/>
                                </a>
                            </div>
                            <div className="world-item">
                                <a href="/Allies">
                                    <img src={'/images/world-allies.png'} alt="Allies"/>
                                </a>
                            </div>
                        </div>
                    </div>
                )}
                {activeContent === "about-interact" && (
                    <div className="about-interact-content">
                        <h2>Interact Content</h2>
                        <p>Content for Interact section.</p>
                    </div>
                )}
                {activeContent === "about-contribute" && (
                    <div className="about-contribute-content">
                        <h2>Contribute Content</h2>
                        <p>Content for Contribute section.</p>
                    </div>
                )}
                {activeContent === "about-en" && (
                    <div className="about-en-content">
                        <h2>EN Content</h2>
                        <p>Content for EN section.</p>
                    </div>
                )}


            </div>

            <Newsletter />
        </div>
    );
};

export default WikiWorld;
