import exclusiveImage from "../assets/exclusive_image.png";
import "./Offers.css";

function Offers() {
  return (
    <>
      <div className="offers">
        <div className="offers-left">
          <h1>Exclusive</h1>
          <h1>Offers For You</h1>
          <p>ONLY ON BESTSELLERS</p>
          <button>Check Now</button>
        </div>
        <div className="offers-right">
          <img src={exclusiveImage} alt="" />
        </div>
      </div>
    </>
  );
}

export default Offers;
