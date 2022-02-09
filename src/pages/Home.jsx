import RareNFTCard from "../Components/RareCard/RareNFTCard";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <section className={styles.mainSection}>
      <div className={styles.topNFT}>
        <h1>Top NFT</h1>
      </div>
      <div className={styles.rareNFT}>
        <h1>Rare NFT</h1>
        <div className={styles.rareCarts}>
          <RareNFTCard />
          <RareNFTCard />
        </div>
      </div>
    </section>
  );
};

export default Home;
