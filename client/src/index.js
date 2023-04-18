import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Playlist from "./Playlist";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   <Router>
    <Routes>
    <Route exact path = '/' Component={App} />
    <Route exact path = '/Playlist' Component={Playlist} />
    </Routes>
   </Router> 
  </React.StrictMode>
);
