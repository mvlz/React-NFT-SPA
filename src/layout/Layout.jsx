import Navigation from "../Components/Navigation/Navigation";
import Header from "../Components/Header";
const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <div className="container">
        <Header />
        {children}
      </div>
    </>
  );
};

export default Layout;
