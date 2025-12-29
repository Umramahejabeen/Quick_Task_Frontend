// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App";
// import "bootstrap/dist/css/bootstrap.min.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );





import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

/* ✅ YOUR CSS MUST BE IMPORTED HERE */
import "./index.css";

/* ✅ BOOTSTRAP MUST COME AFTER OR BEFORE — WE’LL HANDLE IT */
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
