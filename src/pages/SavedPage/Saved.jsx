import { Iconly } from "react-iconly";
import "./Saved.css";
const Saved = () => {
  return (
    <div className="savedSection">
      <h1 className="savedTitle">Your Saved NFT</h1>
      <div className="SavedItemsContainer">
        <div className="savedItem">
          <div className="savedImg">
            <img src="" alt="" />
          </div>
          <div className="savedFooter">
            <div>
              <p>Name</p>
              <p>cost</p>
            </div>
            <button className="buyNow">Buy Now</button>
          </div>
          <button className="savedBtn">
            <Iconly set="light" name="Star" stroke="light" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Saved;
