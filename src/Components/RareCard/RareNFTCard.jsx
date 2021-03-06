import { Iconly } from "react-iconly";
import "./RareNFTCard.css";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../redux/cart/cartAction";
import { checkInCart } from "../../utils/checkInCart";
import { addSaved } from "../redux/saved/savedAction";

const RareNFTCard = ({ NFT }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const { saved } = useSelector((state) => state.saved);
  const { image_url, creator, owner, asset_contract } = NFT;

  const clickHandler = () => {
    dispatch(addCart(NFT));
  };
  const savedHandler = () => {
    dispatch(addSaved(NFT));
  };
  function checkInSaved(saved, product) {
    return saved.find((c) => c.id === product.id);
  }
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
        <button onClick={savedHandler} className="saved">
          <Iconly
            set={checkInSaved(saved, NFT) ? "bold" : "light"}
            name="Star"
            // stroke="bold"
            primaryColor={checkInSaved(saved, NFT) ? "deeppink" : "gray"}
            // size="large"
          />
        </button>
      </div>
      <div className="priceBox">
        <p>
          <strong>Price: </strong> ETH5.65 - X1
        </p>
        <p className="equalSign">=</p>
        <p>($10,344)</p>
      </div>
      <div className="bottomBox">
        <button className="history">
          <Iconly set="broken" name="Swap" />
          View history
        </button>
        <button className="buyNow" onClick={clickHandler}>
          {checkInCart(cart, NFT) ? "in cart" : "Buy Now"}
        </button>
      </div>
    </div>
  );
};

export default RareNFTCard;
