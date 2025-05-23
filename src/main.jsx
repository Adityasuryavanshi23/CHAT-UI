import { createRoot } from "react-dom/client";
import { InboxProvider } from "./context/Inbox.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <InboxProvider>
    <App />
  </InboxProvider>
);
