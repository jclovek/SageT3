import React, { useState } from "react";

const ImageMap = () => {
    const handleClick = (event) => {
        const areaId = event.target.getAttribute('data-area');
        alert(`Clicked on area ${areaId}`);
    };

    return (
        <div className="about-diagram" >
            <div style={{ position: 'relative', maxWidth: '100%' }}>
                <img
                    src={'/images/allies-map.png'}
                    alt="Allies"
                    useMap="#allies-map"
                    style={{ maxWidth: '100%' }}
                />
                <map name="allies-map">
                    <area
                        shape="circle"
                        coords="646,585,274"
                        alt="Animal"
                        data-area="Animal"
                        onClick={handleClick}
                    />
                </map>
            </div>
        </div>
    );
};

const Allies = () => {

    const [activeContent, setActiveContent] = useState("discover"); 

    const handleContentChange = (content) => {
        setActiveContent(content);
    };

    return (
        <div className="wiki-page">
            <div className="wiki-navbar">
                <button
                    className={activeContent === "discover" ? "active" : ""}
                    onClick={() => handleContentChange("discover")}
                >
                    Discover
                </button>
                <button
                    className={activeContent === "interact" ? "active" : ""}
                    onClick={() => handleContentChange("interact")}
                >
                    Interact
                </button>
                <button
                    className={activeContent === "contribute" ? "active" : ""}
                    onClick={() => handleContentChange("contribute")}
                >
                    Contribute
                </button>
                <button
                    className={activeContent === "en" ? "active" : ""}
                    onClick={() => handleContentChange("en")}
                >
                    EN
                </button>
            </div>
            {activeContent === "discover" && (
                <div className = 'allies-page'>
                    <ImageMap />

                    <div className="wiki-about-facts">
                        <h1>The beauty and regenerative power of our natural world is integrally connected to our health and wellbeing.</h1>
                        <p>
                            Understand the choices we have to engage in stewardship and the reconnection of our natural 
                            world to our daily lives.
                        </p>
                    </div>
                    <div className="wiki-about-info">
                        <p>
                        Allies are all living beings that share our planet. Animals are vital for ecosystem balance, pollination, seed dispersal,
                        and controlling pest populations. They contribute to nutrient cycling through decomposition and enrich soil quality.
                        Animals also provide food, clothing, and medicine, and support mental health through companionship and therapy.
                        Their role in biodiversity ensures ecosystem resilience, crucial for human survival and well-being.
                        </p>


                    </div>
                </div>


            )}
     

          

    </div>

    );
};

export default Allies;
