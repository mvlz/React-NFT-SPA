import Navigation from "../Components/Navigation";
import Header from "../Components/Header";
const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <div className="container">
        <Header />
        <section className="main-section">{children}</section>
      </div>
    </>
  );
};

export default Layout;
