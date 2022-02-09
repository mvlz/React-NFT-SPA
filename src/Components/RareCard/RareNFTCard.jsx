import { Iconly } from "react-iconly";
import "./RareNFTCard.css";
const RareNFTCard = ({ NFT }) => {
  const { image_url, creator, owner, asset_contract } = NFT;
  return (
    <div className="rareCard">
      <div className="topBox">
        <div className="ownership">
          <div className="user">
            <div className="userImg">
              <img src={owner.profile_img_url} alt="" />
            </div>
            <div className="userInf">
              <p>Owned by</p>
              <h3>{asset_contract.owner}</h3>
            </div>
          </div>
          <div className="user">
            <div className="userImg">
              <img src={creator.profile_img_url} alt="" />
            </div>
            <div className="userInf">
              <p>Created by</p>
              <h3>45TY87</h3>
            </div>
          </div>
        </div>
        <div className="nftImg">
          <img src={image_url} alt="" />
        </div>
      </div>
      <div className="priceBox">
        <p>Price: ETH5.65 - X1 = ($10,344)</p>
      </div>
      <div className="bottomBox">
        <button className="history">
          <Iconly set="broken" name="Swap" />
          View history
        </button>
        <button className="buyNow"> Buy Now</button>
      </div>
    </div>
  );
};

export default RareNFTCard;
