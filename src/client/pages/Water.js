import Newsletter from "@/components/Newsletter";
import Circle from "@/public/circle.svg";

function Water() {
    function handleClick() {
        alert('Clickable area was clicked!');
    }
  return (
    <div className="water-container" >
        <div className="water-image-container">
            <div className="clouds" onClick={handleClick}><img src={Circle} alt="Circle"/></div>
            <div className="land" onClick={handleClick}><img src={Circle} alt="Circle"/></div>
            <div className="underground" onClick={handleClick}><img src={Circle} alt="Circle"/></div>
            <div className="ocean" onClick={handleClick}><img src={Circle} alt="Circle"/></div>
            <div className="volcano" onClick={handleClick}><img src={Circle} alt="Circle"/></div>
        </div>
        <div className="info">
        <div className="para">
          <h1>Water is a very simple chemical compound comprised of two parts hydrogen and one part oxygen {"(H"}<sup>2</sup>{"O)"}</h1>
          <p>It is the most common chemical compound found on Earth and the most vital compound for the formation and survival on life.</p>
        </div>
      </div>
        <Newsletter />
    </div>
  );
}

export default Water;