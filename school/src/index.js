import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import NotificationList from "./chapter_6/NotificationList";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NotificationList></NotificationList>
  </React.StrictMode>
);
reportWebVitals();
