import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import * as motion from "motion/react-client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <motion.button
      style={{
        position: "absolute",
        bottom: "20vh",
        right: "80vh",
        zIndex: 10,
        width: 200,
        height: 50,
        fontSize: 16,
        cursor: "pointer",
        borderRadius: 8,
      }}
      animate={{ opacity: [0, 1] }}
      transition={{ delay: 6 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => window.location.reload()}
    >
      <span>Generate Effect Again &rarr;</span>
    </motion.button>
    <App />
  </React.StrictMode>
);
