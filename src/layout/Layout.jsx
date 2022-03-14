import Navigation from "../Components/Navigation/Navigation";
import Header from "../Components/Header";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container">
        <Navigation />
        <section className="mainWrapper">{children}</section>
      </div>
    </>
  );
};

export default Layout;
