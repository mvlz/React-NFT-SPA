import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { Iconly } from "react-iconly";
import { deleteCart } from "../../Components/redux/cart/cartAction";

const Cart = () => {
  const cartData = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    dispatch(deleteCart(id));
  };
  return (
    <div className="mainSection">
      <div className="cartContainer">
        <div className="cartItems">
          {cartData.cart && cartData.cart.length ? (
            cartData.cart.map((c) => {
              return (
                <div className="cartItem" key={c.id}>
                  <button
                    className="btn deleteBtn"
                    onClick={() => deleteHandler(c.id)}
                  >
                    <Iconly set="light" name="Delete" size="small" />
                  </button>
                  <div className="cartImg">
                    <img src={c.image_url} alt="" />
                  </div>
                  <div className="cartBody">
                    <p>owned by: {c.asset_contract.owner}</p>
                    <p>
                      <strong>cost: 230$</strong>
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <p>Your cart is empty !</p>
          )}
        </div>
        <div className="cartSummary">hi</div>
      </div>
    </div>
  );
};
export default Cart;
