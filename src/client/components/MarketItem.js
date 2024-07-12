import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";

function MarketItem( pageProps ) {
    const [price, setPrice] = useState('');
    const [itemImage, setItemImage] = useState('');
    const [itemName, setItemName] = useState('');
    const [itemLikes, setItemLikes] = useState(0);

    useEffect(() => {
        if(pageProps.price){
            setPrice(pageProps.price);
        }else{
            setPrice("TBD");
        }

        if(pageProps.image){
            setItemImage(pageProps.image);
        }

        if(pageProps.item){
            setItemName(pageProps.item);
        }else{
            setItemName('TBD');
        }

        if(pageProps.likes){
            setItemLikes(pageProps.likes);
        }
    }, [pageProps]);
    return(
        <div className="market-item">
            <button className="price-button">{price}</button>
            <span className="item-info">
                <p id='item-name'>{itemName}</p>

                <span className="item-stats">
                    <span className="item-likes">
                        <FaHeart className="item-icon"/>
                        <p className="like-count">{itemLikes}</p>
                    </span>
                    <CiCirclePlus className="item-icon"/>
                </span>

            </span>
        </div>
    );
};

export default MarketItem;