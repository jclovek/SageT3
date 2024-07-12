import Newsletter from "@/components/Newsletter";
import React from "react";
import Image from "next/image";
import MarketItem from "@/components/MarketItem";
import InfoCard from "@/components/InfoCard";

function Shop() {
    const cardsData = [
        {
            image: "/images/GiftCard.png",
            title: "eGiftCard",
            description: "There are ___ bills and resolutions currently before the United States Congress that will impact our environmental well being.",
            link: "#"
        },
        {
            image: "/images/Membership.png",
            title: "Membership",
            description: "Suggest a sustainable idea, recipe, product or website. Have any tips you want to share? ",
            link: "#"
        },
    ];
    
    return(
        <div className="shop-page">
            <div className="shop-section-header">
                <Image 
                className='model-image'
                id='full-body-model'
                src="/images/Model1.jpg" 
                width={400}
                height={500}
                sizes="30vw, 50vh"
                alt='model1' />
                <div className="shop-header-content">
                    <h1 className="shop-header-title">Shop</h1>
                    <p className="shop-header-title" id='Barcelony-Font'>Responsibly</p>
                    <p className="shop-header-sub-text">cruelty free • USDA organic • vegan</p>
                </div>
                <Image 
                className="model-image"
                src="/images/Model2.png" 
                width={400}
                height={500}
                sizes="30vw, 50vh"
                alt='model2' />
            </div>
            <div className="marketplace-container">
                <div className="market-section-container">
                    <div className="market-category">
                        Home
                    </div>
                    <MarketItem />
                    <MarketItem />
                    <MarketItem />
                </div>
                <div className="market-section-container">
                    <div className="market-category">
                        Style
                    </div>
                    <MarketItem />
                    <MarketItem />
                    <MarketItem />
                </div>
                <div className="market-section-container">
                    <div className="market-category">
                        Health
                    </div>
                    <MarketItem />
                    <MarketItem />
                    <MarketItem />
                </div>
                <div className="market-section-container">
                    <div className="market-category">
                        Starter Kit
                    </div>
                    <MarketItem />
                    <MarketItem />
                    <MarketItem />
                </div>
            </div>
            <div className="shop-extras-container">
                {cardsData.map((card, index) => (
                    <InfoCard key={index} {...card} />
                ))}
            </div>
            <Newsletter />
        </div>
    );
};

export default Shop;