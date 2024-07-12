import React, {useState} from "react";
import Link from "next/link";
import Newsletter from "@/components/Newsletter";

const WikiVendor = () => {
    const [activeContent, setActiveContent] = useState("vendor"); 

    const handleContentChange = (content) => {
        setActiveContent(content);
    };

    return (
        <div className="wiki-page">
            <div className="wiki-navbar">
                <button
                    className={activeContent === "vendor" ? "active" : ""}
                    onClick={() => handleContentChange("vendor")}
                >
                    Vendor
                </button>
                <button
                    className={activeContent === "shop" ? "active" : ""}
                    onClick={() => handleContentChange("shop")}
                >
                    Shop
                </button>
                <button
                    className={activeContent === "certifications" ? "active" : ""}
                    onClick={() => handleContentChange("certifications")}
                >
                    Certifications
                </button>
                <button
                    className={activeContent === "articles" ? "active" : ""}
                    onClick={() => handleContentChange("articles")}
                >
                    Articles
                </button>
                <button
                    className={activeContent === "en" ? "active" : ""}
                    onClick={() => handleContentChange("en")}
                >
                    EN
                </button>
            </div>

            <div className="wiki-vendor-page">
                {activeContent === "vendor" && (
                    <div className="vendor-grid">
                        <div className="vendor-item v-item1">
                            <h1>EARTHLY GOODS, INC.</h1>
                            <p>Earthly Goods is a manufacturer of organic produce</p>
                        </div>
                        <div className="vendor-item v-item2">
                            <h1>FEATURED PRODUCT</h1>
                            <p>Its garlic harvest week! Come help us harvest or get your pick at the farmers market.</p>
                            <img src="https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg" alt="Vendor" />
                        </div>
                        {/* <div className="vendor-item item3"> */}

                        {/* </div> */}
                        <div className="vendor-item v-item4">
                            <h1>OFFERINGS</h1>
                        </div>
                        <div className="vendor-item v-item5">
                            <img src="https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg" alt="Vendor" />
                            <h2><span class="v-label">Author: </span>Martin Green</h2>                    
                            <h2><span class="v-label">Company: </span></h2>
                            <h2><span class="v-label">Origin: </span> </h2>
                            <h2><span class="v-label">Years active: </span></h2>
                            <h2><span class="v-label">Website: </span></h2>
                            <h2><span class="v-label">Categories: </span></h2>
                            <h2><span class="v-label">PRODUCTS </span></h2>
                                <p style={{ marginLeft: '20px' }}>a</p>
                            <h2><span class="v-label">ARTICLES </span></h2>
                                <p style={{ marginLeft: '20px' }}>a</p>

                        </div>
                        <div className="vendor-item v-item6">
                            <img src="https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg" alt="Vendor" />
                            <h1>Bulk</h1>
                            <div className="v-links">
                                <a href="https://www.origen.consulting/">Market | </a>
                                <a href="https://www.origen.consulting/">Articles</a>
                            </div>
                        </div>
                        <div className="vendor-item v-item7">
                            <img src="https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg" alt="Vendor" />
                            <h1>Starter packages</h1>
                            <div className="v-links">
                                <a href="https://www.origen.consulting/">Market | </a>
                                <a href="https://www.origen.consulting/">Articles</a>
                            </div>
                        </div>
                        <div className="vendor-item v-item8">
                            <img src="https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg" alt="Vendor" />
                            <h1>Loose</h1>
                            <div className="v-links">
                                <a href="https://www.origen.consulting/">Market | </a>
                                <a href="https://www.origen.consulting/">Articles</a>
                            </div>
                        </div>
                    </div>
                )}
                {activeContent === "shop" && (
                    <div>
                        IN PROGRESS
                    </div>
                )}
                {activeContent === "certifications" && (
                    <div>
                        IN PROGRESS
                    </div>
                )}
                {activeContent === "articles" && (
                    <div>
                        IN PROGRESS
                    </div>
                )}
                {activeContent === "en" && (
                    <div>
                        IN PROGRESS
                    </div>
                )}
            </div>
            <Newsletter />
        </div>
    );
};

export default WikiVendor;
