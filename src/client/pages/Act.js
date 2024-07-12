import Newsletter from "@/components/Newsletter";
import InfoCard from "@/components/InfoCard";
import React from "react";
import Link from "next/link";

function Act() {
    const cardsData = [
        {
            image: "/images/card1.jpg",
            title: "Laws & Petitions",
            description: "There are ___ bills and resolutions currently before the United States Congress that will impact our environmental well-being.",
            link: "#"
        },
        {
            image: "/images/card2.jpg",
            title: "Have a great idea?",
            description: "Suggest a sustainable idea, recipe, product, or website. Have any tips you want to share?",
            link: "#"
        },
        {
            image: "/images/card3.jpg",
            title: "Nominate your local hero",
            description: "Local farmer, sustainable energy provider, green neighbor.",
            link: "#"
        },
        {
            image: "/images/card4.jpg",
            title: "Volunteer",
            description: "Reef conservation, Eco farming, Marine research, Environmental Scuba Diving.",
            link: "#"
        }
    ];

    return (
        <div className="act">
            <div className="wiki-navbar">
                <Link href="/Act">Nomination</Link>
                <Link href="/Act">Experience</Link>
                <Link href="/Act">Petitions</Link>
                <Link href="/Act">Ideas</Link>
                <Link href="/Act">EN</Link>
            </div>
            <div className="act-background">
                <div className="background-text">
                    <h2>Dream Big</h2>
                    <p id='Barcelony-Font'>Fight Hard</p>
                    <button>Speak Up!</button>
                </div>
            </div>
            <div className="act-paragraph">
                <h3>Find stories that reignite our universal need for connection and explore what it is to feel good about being human, again.</h3>
                <p>We start by providing a bird's eye view of how things are interconnected.</p>
                <p>You can get a headline summary of how it works, or go as deep as your curiosity will take you to discover the wonders of our world.</p>
            </div>
            <div className="speakUp">
                <div className="headers">
                    <h2 className="headerOne">Let's <span id='Barcelony-Font'>Speak Up</span></h2>
                </div>
                <p className="speak-description">Where we find our common voice, learn, experience and make things happen</p>
                <div className="card-container">
                    {cardsData.map((card, index) => (
                        <InfoCard key={index} {...card} />
                    ))}
                </div>
            </div>
            <Newsletter />
        </div>
    );
};

export default Act;
