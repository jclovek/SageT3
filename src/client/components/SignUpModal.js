import { useState, useEffect } from "react";

const SignUpModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const tabs = ['account', 'about', 'address', 'preferences'];
    const [selectedAvatar, setSelectedAvatar] = useState("/images/userAvatar.jpg");
    const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);

    const carouselImages = [
        '/images/health.jpg',
        '/images/home.jpg',
        '/images/Image 27.png',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCarouselIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [carouselImages.length]);

    const handleAvatarChange = (e) => {
        const avatar = e.target.value;;
        switch (avatar) {
            case 'avatar0':
                setSelectedAvatar("/images/userAvatar.jpg");
            case 'avatar1':
                setSelectedAvatar("/images/card1.jpg");
                break;
            case 'avatar2':
                setSelectedAvatar("/images/card2.jpg");
                break;
            case 'avatar3':
                setSelectedAvatar("/images/card3.jpg");
                break;
            default:
                setSelectedAvatar(userAvatar);
        }
    };

    const renderFormContent = () => {
        switch (tabs[activeTabIndex]) {
            case 'account':
                return (
                    <>
                        <div className="form-group">
                            <input type="text" id="username" name="username" placeholder="Username" required />
                        </div>
                        <div className="form-group">
                            <input type="password" id="password" name="password" placeholder="Password (8-12 characters)" required />
                        </div>
                        <div className="avatar-section">
                            <img src={selectedAvatar} alt="User Avatar" className="avatar-image" />
                            <div className="form-group">
                                <label htmlFor="avatar">Choose Avatar</label>
                                <select id="avatar" name="avatar" onChange={handleAvatarChange}>
                                    <option value="avatar0">Default</option>
                                    <option value="avatar1">Avatar 1</option>
                                    <option value="avatar2">Avatar 2</option>
                                    <option value="avatar3">Avatar 3</option>
                                </select>
                            </div>
                        </div>
                    </>
                );
            case 'about':
                return (
                    <>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="dob">Date of Birth</label>
                            <input type="date" id="dob" name="dob" required />
                        </div>
                    </>
                );
            case 'address':
                return (
                    <>
                        <div className="form-group">
                            <label htmlFor="address">Adresss</label>
                            <input type="text" id="address" name="address" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">City</label>
                            <input type="text" id="city" name="city" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="state">State</label>
                            <input type="text" id="state" name="state" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="zip">Zip Code</label>
                            <input type="text" id="zip" name="zip" required />
                        </div>
                    </>
                );
            case 'preferences':
                return (
                    <>
                        <div className="form-group">
                            <label htmlFor="preferences">Preferences</label>
                            <textarea id="preferences" name="preferences" rows="4"></textarea>
                        </div>
                    </>
                );
            default:
                return null;
        }
    };

    const handleNext = () => {
        if (activeTabIndex < tabs.length - 1) {
            setActiveTabIndex(activeTabIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (activeTabIndex > 0) {
            setActiveTabIndex(activeTabIndex - 1);
        }
    };

    return (
        <div className="modal-overlay SignUpModal">
            <div className="modal-content">
            <div className="left-section">
                    <div className="left-top">
                        <h2>Create An Account</h2>
                        <p>Already have an account? <a href="#" className="login-link">Login</a></p>
                    </div>
                    <div className="rotating">
                        <img src={carouselImages[currentCarouselIndex]} alt="rotating" className="rotating-image" />
                    </div>
                </div>
                <div className="right-section">
                    <div className="tab-header">
                        {tabs.map((tab, index) => (
                            <span
                                key={index}
                                className={activeTabIndex === index ? 'active' : ''}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </span>
                        ))}
                    </div>
                    <form>
                        {renderFormContent()}
                        <div className="button-group">
                            <button type="submit" className="save-button">Save</button>
                            <button type="button" onClick={handlePrevious} disabled={activeTabIndex === 0} className="previous-button">&lt;&lt; Previous</button>
                            <button type="button" onClick={handleNext} disabled={activeTabIndex === tabs.length - 1} className="next-button">Next &gt;&gt;</button>
                        </div>
                    </form>
                </div>
                <button onClick={onClose} className="close-button">&times;</button>
            </div>
        </div>
    );
};

export default SignUpModal;
