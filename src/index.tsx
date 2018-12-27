import * as React from "react";
import * as ReactDOM from "react-dom";
// import App from "./App";
import "./index.css";
import OAuthApp from "./OAuthApp";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<OAuthApp />, document.getElementById("root") as HTMLElement);
registerServiceWorker();
