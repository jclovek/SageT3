import React, {useState} from "react";
import Link from "next/link";
import Newsletter from "@/components/Newsletter";

const ImageMap = () => {
    const handleClick = (event) => {
        const areaId = event.target.getAttribute('data-area');
        alert(`Clicked on area ${areaId}`);
    };

    return (
        <div className="about-diagram" >
            <div style={{ position: 'relative', maxWidth: '100%' }}>
                <img
                    src={'/images/Group 81.png'}
                    alt="Human"
                    useMap="#image-map"
                    style={{ maxWidth: '100%' }}
                />
                <map name="image-map">
                    <area
                        shape="circle"
                        coords="357,644,91"
                        alt="Water"
                        data-area="Water"
                        onClick={handleClick}
                    />
                    <area
                        shape="circle"
                        coords="174,432,91"
                        alt="Food"
                        data-area="Food"
                        onClick={handleClick}
                    />
                    <area
                        shape="circle"
                        coords="358,172,91"
                        alt="Shelter"
                        data-area="Shelter"
                        onClick={handleClick}
                    />
                    <area
                        shape="circle"
                        coords="894,179,91"
                        alt="Heat & Light"
                        data-area="Heat & Light"
                        onClick={handleClick}
                    />
                    <area
                        shape="circle"
                        coords="1052,435,91"
                        alt="Air"
                        data-area="Air"
                        onClick={handleClick}
                    />
                    <area
                        shape="circle"
                        coords="867,650,91"
                        alt="Companionship"
                        data-area="Companionship"
                        onClick={handleClick}
                    />
                </map>
            </div>
        </div>
    );
};

const About = () => {
    return (
        <div className = 'wiki-about-page'>
            <ImageMap />
            <div className="wiki-about-facts">
                <h1>Humans have nine basic needs that are finite and classifiable.</h1>
                <p>According to economist Manfred Max Neef, these needs are constant throughout all cultures and historical time periods.
                    What changes these needs are satisfied. Explore the sustainable options we have to satisy these needs and improve our
                    quality of life.
                </p>
            </div>
            <div className="wiki-about-info">
                <p>
                    Sage Wiki was founded under the principle of the inevitable truth that we're all connected and the wiki serves the
                    purpose to illustrate that connection, offer solutions and choices. From a human perspective, it all comes back to the
                    health and well being of ourselves and our families. We support that by making it easy to connect the dots and inform
                    you of the most healthful choices.
                </p>

                <p>
                    In order to protect the integrity of the content, both the blog and wiki are membership based. You must register to
                    receive the Sage Wiki newsletter and blog updates, and you can sign-up to be a member of the market here. 
                </p>

                <p>
                    Companionship: our companions, whether human, animal, or __..
                </p>
            </div>
        </div>
    );
};

const Wiki = () => {
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

            {activeContent === "about-discover" && (
                < About/>
            )}
            {activeContent === "about-interact" && (
                <div>
                    IN PROGRESS
                </div>
            )}
            {activeContent === "about-contribute" && (
                <div>
                    IN PROGRESS
                </div>
            )}
            {activeContent === "about-en" && (
                <div>
                    IN PROGRESS
                </div>
            )}
            <Newsletter />
        </div>
    );
};

export default Wiki;
