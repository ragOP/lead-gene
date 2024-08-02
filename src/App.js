import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/404";
import Toast from "./components/Toast.jsx"
import Image from "./components/Image.jsx"

const App = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(function(registration) {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(function(error) {
        console.error('Service Worker registration failed:', error);
      });
  }
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/engmed1" element={<Home />} />
          <Route path="/toast" element={<Toast />} />
          <Route path="/image" element={<Image />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
