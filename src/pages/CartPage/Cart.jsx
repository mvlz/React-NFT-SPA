import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { Iconly } from "react-iconly";
import { deleteCart } from "../../Components/redux/cart/cartAction";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    dispatch(deleteCart(id));
  };
  console.log(cart);
  return (
    <div className="mainSection">
      <div className="cartContainer">
        <div className="cartItems">
          {cart && cart.length ? (
            cart.map((c, index) => {
              return (
                <div className="cartItem" key={c.id}>
                  <p>{index + 1}</p>
                  <div className="cartImg">
                    <img src={c.image_url} alt="" />
                  </div>
                  <div className="cartBody">
                    <p>owned by: {c.asset_contract.owner}</p>
                    <p>
                      <strong>Highest offer:{c.num_sales} </strong>
                    </p>
                    <p>{c.asset_contract.schema_name}</p>
                    <p>symbol: {c.asset_contract.symbol}</p>
                  </div>
                  <button
                    className="btn deleteBtn"
                    onClick={() => deleteHandler(c.id)}
                  >
                    <Iconly set="light" name="Delete" size="small" />
                  </button>
                </div>
              );
            })
          ) : (
            <p>Your cart is empty !</p>
          )}
        </div>
        <div className="paymentContainer">
          <h3>Payment history</h3>
          <div className="paymentItems">
            <PaymentItem />
            <PaymentItem />
          </div>
        </div>
      </div>
      <div className="right-content">
        <div className="wallet">
          <h1>My Wallet</h1>
          <p className="nft-type">Recommended</p>
          <div className="cart">
            <div className="circles">
              <span className="circle fill"></span>
              <span className="circle "></span>
            </div>
            <div className="cart-number">
              <p>Cart Number</p>
              <h3 className="cart-num">3829 4820 4629 5025</h3>
            </div>
            <div className="cart-inf">
              <div className="cart-name">
                <p>Cart Holder Name</p>
                <p className="name">AR Shakir</p>
              </div>
              <div className="cart-name">
                <p>vaid thru</p>
                <p className="date">09/24</p>
              </div>
            </div>
          </div>
        </div>
        <div className="overview">
          <h1>Overview</h1>
          <div className="cart">
            <p>Available balance in USD</p>
            <h3 className="balance">213,150.15</h3>
            <div className="transaction-wallet">
              <div className="transaction">
                <p>Transaction</p>
                <p className="t-num">34,405</p>
              </div>
              <div className="wallet">
                <p>wallet</p>
                <p className="v-num">23</p>
              </div>
            </div>
            <p>Last activity at 26 nov, 2021</p>
          </div>
        </div>
        <div className="coins-wallets">
          <Link to={"/checkout"}>
            <div className="coin-wallet">
              <p className="coin-wallet-name">BTC Wallet</p>
              <p className="wallet-amount">
                4.434953 <span className="coin-name">BTC</span>
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/1200px-BTC_Logo.svg.png"
                alt=""
              />
            </div>
          </Link>
          <Link to={"/checkout"}>
            <div className="coin-wallet">
              <p className="coin-wallet-name">Etherium Wallet</p>
              <p className="wallet-amount">
                4.434953 <span className="coin-name">ETH</span>
              </p>
              <img
                src="https://d33wubrfki0l68.cloudfront.net/fcd4ecd90386aeb50a235ddc4f0063cfbb8a7b66/4295e/static/bfc04ac72981166c740b189463e1f74c/40129/eth-diamond-black-white.jpg"
                alt=""
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Cart;

const PaymentItem = () => {
  return (
    <div className="paymentItem">
      <div className="paymentImg">
        <img
          src="https://lh3.googleusercontent.com/Su3hdjDh9jQnUBRKvAMdyzyybd0gqg2OfdQa6Il_r6Niye78FmHFpT7Bv-i8ll7NEHffy8vco6tami4F87_3LMHc2zd2KIMtu_RiRw"
          alt=""
        />
      </div>
      <div className="productInf">
        <p>dribbble</p>
        <p>describe</p>
      </div>
      <div className="paymentDate">23,jan 2021</div>
      <div className="paymentStatus success"> success</div>
      <div className="paymentAmount">
        <strong>$15,00</strong> <sub>/Mo</sub>
      </div>
    </div>
  );
};
