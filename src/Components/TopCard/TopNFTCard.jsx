import "./TopNFTCard.css";
import { Iconly } from "react-iconly";
import TopNFT from "../../TopNFT.png";

const TopNFTCard = () => {
  return (
    <div className="topCard">
      <div className="topInf">
        <div className="NFTInf">
          <p className="title">Rarity lvl</p>
          <h3>
            9.8
            <Iconly set="bold" name="ChevronUp" size="medium" />
          </h3>
        </div>
        <div className="NFTInf">
          <p className="title">NFT Type</p>
          <h3>Legend</h3>
        </div>
      </div>

      <div className="NFTBorder">
        <div className="NFTContainer">
          <div className="rate">01</div>
          <div className="creator">
            <img src="" alt="" />
          </div>
          <div className="NFTImg">
            <img src={TopNFT} alt="" />
          </div>
        </div>
      </div>
      <div className="NFTInf">
        <h2>DRQ_ #39707</h2>
        <p className="cost">ETH: 13.65</p>
      </div>
    </div>
  );
};

export default TopNFTCard;
