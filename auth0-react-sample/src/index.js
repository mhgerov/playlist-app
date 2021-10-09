import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import {BrowserRouter, BrowserRouter as Router} from "react-router-dom";

import "./index.css";
import {Auth0Provider} from "@auth0/auth0-react";

ReactDOM.render(
    <Router>
        <BrowserRouter>
            <Auth0Provider>
                <App/>
            </Auth0Provider>
        </BrowserRouter>
    </Router>,
    document.getElementById("root")
);
