import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import ThemeContextWrapper from "./theme/themeContextWrapper"

ReactDOM.render(
  <ThemeContextWrapper>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </ThemeContextWrapper>,
  document.getElementById('root')
);

