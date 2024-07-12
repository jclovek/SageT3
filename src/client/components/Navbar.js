import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ShoppingBagIcon from '@/public/shopping-bag.svg';
import UserIcon from '@/public/user.svg';
import { usePathname } from "next/navigation";
import SignUpModal from "./SignUpModal";

function Navbar() {
    const router = useRouter();
    const [showDropdown, setShowDropdown] = useState(false); 
    const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

    const handleMouseHover = () => {
        setShowDropdown(true); 
    };

    const handleMouseLeave = () => {
        setShowDropdown(false); 
    };

    const openSignUpModal = () => {
        setIsSignUpModalOpen(true);
    };

    const closeSignUpModal = () => {
        setIsSignUpModalOpen(false);
    };

    const pathName = router.pathname; 

    return(
        <div className="navbar">
            <div className="logo-section">
                <Link href='/'>SAGEWIKI</Link>
            </div>
            <div className="nav-links">
                <div
                    className={`nav-link ${pathName === '/Shop' ? 'active' : ''}`}
                    onMouseEnter={handleMouseHover}
                    onMouseLeave={handleMouseLeave}
                >
                    <a>Market</a>
                    {showDropdown && ( 
                        <ul className="dropdown-menu">
                            <li><Link href="/Shop">Health</Link></li>
                            <li><Link href="/Shop">Home</Link></li>
                            <li><Link href="/Shop">Style</Link></li>
                        </ul>
                    )}
                </div>
                {/* <Link href="/Shop" className={`nav-link ${pathName === '/Shop' ? 'active' : ''}`}>Market</Link> */}
                {/* <Link href='/Wiki' className={`nav-link ${pathName === '/Wiki' ? 'active' : ''}`}>Wiki</Link> */}
                <div
                    className={`nav-link ${pathName === '/Wiki' ? 'active' : ''}`}
                    onMouseEnter={handleMouseHover}
                    onMouseLeave={handleMouseLeave}
                >
                    <a>Wiki</a>
                    {showDropdown && ( 
                        <ul className="dropdown-menu">
                            <li><Link href="/Wiki">About</Link></li>
                            <li><Link href="/WikiWorld">World</Link></li>
                            <li><Link href="/WikiVendor">Market Vendors</Link></li>
                        </ul>
                    )}
                </div>
                <Link href='/Act' className={`nav-link ${pathName === '/Act' ? 'active' : ''}`}>Act</Link>
                <Link href="/Blog" className={`nav-link ${pathName === '/Blog' ? 'active' : ''}`}>Blog</Link>
                <img src={UserIcon} alt="defaultUser" id="default-user" onClick={openSignUpModal}/>
                <img src={ShoppingBagIcon} alt='shopping-bag' id='shopping-bag'/> 
            </div>
            <SignUpModal isOpen={isSignUpModalOpen} onClose={closeSignUpModal} />
        </div>
    );
}

export default Navbar;