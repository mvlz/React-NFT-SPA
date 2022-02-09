import axios from "axios";
import react, { useState } from "react";
import RareNFTCard from "../Components/RareCard/RareNFTCard";
import styles from "./Home.module.css";
const Home = () => {
  const [NFT, setNFT] = useState(null);
  const render = () => {
    const url = "https://api.opensea.io/api/v1/assets?order_direction=desc";
    axios.get(url).then((res) => {
      setNFT(res.data.assets);
      console.log([...res.data.assets]);
    });
  };
  react.useEffect(() => {
    render();
  }, []);
  return (
    <section className={styles.mainSection}>
      <div className={styles.topNFT}>
        <h1>Top NFT</h1>
      </div>
      <div className={styles.rareNFT}>
        <h1>Rare NFT</h1>
        <div className={styles.rareCarts}>
          {NFT ? (
            NFT.map((nft) => {
              return <RareNFTCard NFT={nft} key={nft.id} />;
            })
          ) : (
            <h2>Please Turn On Your VPN!</h2>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
