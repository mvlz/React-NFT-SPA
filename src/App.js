import './App.css';
import Layout from './layout/Layout';
import { Routes, Route } from "react-router-dom";
import routes from "./routes.js";
import { Provider } from 'react-redux';
import store from './Components/redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Layout>
          <Routes>
            {routes.map((route, index) => {
              return <Route {...route} key={index} />;
            })}
          </Routes>
        </Layout>
      </div>
    </Provider>
  );
}

export default App;
