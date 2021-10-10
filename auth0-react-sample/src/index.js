import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import {BrowserRouter, BrowserRouter as Router} from "react-router-dom";

import "./index.css";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";

ReactDOM.render(
    <Router>
        <BrowserRouter>
            <Auth0ProviderWithHistory>
                <App/>
            </Auth0ProviderWithHistory>
        </BrowserRouter>
    </Router>,
    document.getElementById("root")
);
