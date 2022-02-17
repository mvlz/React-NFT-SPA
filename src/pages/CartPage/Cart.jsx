import "./Cart.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Iconly } from "react-iconly";

const Cart = () => {
  const cartData = useSelector((state) => state.cart);
  useEffect(() => {
    console.log(cartData);
  }, []);
  return (
    <div className="mainSection">
      <div className="cartContainer">
        <div className="cartItems">
          {cartData.cart && cartData.cart.length ? (
            cartData.cart.map((c) => {
              return (
                <div className="cartItem" key={c.id}>
                  <button className="btn deleteBtn">
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
            <p>Empty</p>
          )}
        </div>
        <div className="cartSummary">hi</div>
      </div>
    </div>
  );
};
export default Cart;
