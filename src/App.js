import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/404";
import Toast from "./components/Toast.jsx"

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/engmed1" element={<Home />} />
          <Route path="/toast" element={<Toast />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
