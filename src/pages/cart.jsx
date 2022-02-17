import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const cartData = useSelector((state) => state.cart);
  useEffect(() => {
    console.log(cartData);
  }, []);
  return (
    <>
      <h1>Cart page</h1>
    </>
  );
};
export default Cart;
