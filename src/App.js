import './App.css';
import Layout from './layout/Layout';
import { Routes, Route } from "react-router-dom";
import routes from "./routes";
function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          {routes.map((route, index) => {
            return <Route {...route} key={index} />;
          })}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
