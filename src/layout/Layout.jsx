import Navigation from "../Components/Navigation/Navigation";
import Header from "../Components/Header";
const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <div className="container">
        <Header />
        <section className="mainWrapper">{children}</section>
      </div>
    </>
  );
};

export default Layout;
