import react from "react";
import { useSelector, useDispatch } from "react-redux";
import RareNFTCard from "../../Components/RareCard/RareNFTCard";
import { fetchNFTs } from "../../Components/redux/nft/nftAction";
import TopNFTCard from "../../Components/TopCard/TopNFTCard";
import styles from "./Home.module.css";

const Home = () => {
  const NFTData = useSelector((state) => state.nfts);
  const { loading, error, nfts } = NFTData;
  const dispatch = useDispatch();

  react.useEffect(() => {
    dispatch(fetchNFTs());
  }, []);
  return (
    <section className={styles.mainSection}>
      <div className={styles.topNFT}>
        <h1>Top NFT</h1>
        <TopNFTCard />
        <TopNFTCard />
      </div>
      <div className={styles.rareNFT}>
        <h1>Rare NFT</h1>
        <div className={styles.rareCarts}>
          {loading ? (
            <p>
              Please Turn On Your VPN! <br /> Loading ...
            </p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            NFTData &&
            nfts &&
            nfts.map((nft) => {
              return <RareNFTCard NFT={nft} key={nft.id} />;
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
