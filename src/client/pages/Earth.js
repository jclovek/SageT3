import Newsletter
 from "@/components/Newsletter";
function Earth() {
    return (
        <div className="earth-page">
            <div className="earth-title">
                <h1>Our soil is very important when it comes to our quality of life.</h1>
                <h1>It plays a role in ...</h1>
            </div>
            <div className="earth-sections">
                <div className="earth-section">
                    <h2>The Food <br /> <span id='Barcelony-Font'>we eat</span></h2>
                    <img src="/images/earth1.jpg" alt="The Food we eat" />
                </div>
                <div className="earth-section">
                    <h2>The Water <br /> <span id='Barcelony-Font'>we drink</span></h2>
                    <img src="/images/earth2.jpg" alt="The Water we drink" />
                </div>
                <div className="earth-section">
                    <h2>The Air <br /> <span id='Barcelony-Font'>we breathe</span></h2>
                    <img src="/images/earth3.jpg" alt="The Air we breathe" />
                </div>
                <div className="earth-section">
                    <h2>The Shelter <br /> <span id='Barcelony-Font'>we live in</span></h2>
                    <img src="/images/earth4.jpg" alt="The Shelter we live in" />
                </div>
            </div>
            <div className="info">
                <div className="para">
                    <h1>We would not be here without Earth's resources.</h1>
                    <p>The magnetic field that shields us from space radiation, the atmosphere we breathe, the water we drink, the food we eat are a few of the crucial resources we rely on, kindly provided by our planet. </p>
                </div>
            </div>
            <Newsletter />
        </div>
    );
}

export default Earth;
