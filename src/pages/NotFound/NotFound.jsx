import { Link } from "react-router-dom";
import "./NotFound.css";
const NotFoundPage = () => {
  return (
    <div>
      <h1 className="notfoundTitle">404 Error Page</h1>
      <p class="zoom-area">
        Oh! You are lost. <br /> Your requested page does not exist.
      </p>
      <section class="error-container">
        <span class="four">
          <span class="screen-reader-text">4</span>
        </span>
        <span class="zero">
          <span class="screen-reader-text">0</span>
        </span>
        <span class="four">
          <span class="screen-reader-text">4</span>
        </span>
      </section>
      <div class="link-container">
        <Link to="/" class="more-link">
          Go to home page
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
