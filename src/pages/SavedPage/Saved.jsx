import { useSelector, useDispatch } from "react-redux";
import { Iconly } from "react-iconly";
import "./Saved.css";
import { deleteSaved } from "../../Components/redux/saved/savedAction";
import { addCart } from "../../Components/redux/cart/cartAction";
const Saved = () => {
  const { saved } = useSelector((state) => state.saved);
  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    dispatch(deleteSaved(id));
  };
  const { cart } = useSelector((state) => state.cart);

  const addToCartHandler = (product) => {
    dispatch(addCart(product));
  };
  return (
    <div className="savedSection">
      <h1 className="savedTitle">Your Saved NFT</h1>
      <div className="SavedItemsContainer">
        {saved.map((item) => {
          return (
            <div className="savedItem" key={item.id}>
              <div className="savedImg">
                <img src={item.image_url} alt="" />
              </div>
              <div className="savedFooter">
                <div>
                  <p>{item.asset_contract.schema_name}</p>
                  <p>cost</p>
                </div>
                <button
                  className="buyNow"
                  onClick={() => addToCartHandler(item)}
                >
                  Buy Now
                </button>
              </div>
              <button
                className="savedBtn"
                onClick={() => deleteHandler(item.id)}
              >
                <Iconly set="bold" name="Star" stroke="light" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Saved;
