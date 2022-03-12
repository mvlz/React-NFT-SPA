import { useSelector, useDispatch } from "react-redux";
import { Iconly } from "react-iconly";
import "./Saved.css";
import { deleteSaved } from "../../Components/redux/saved/savedAction";
const Saved = () => {
  const { saved } = useSelector((state) => state.saved);
  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    dispatch(deleteSaved(id));
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
                <button className="buyNow">Buy Now</button>
              </div>
              <button className="savedBtn">
                <Iconly set="light" name="Star" stroke="light" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Saved;
