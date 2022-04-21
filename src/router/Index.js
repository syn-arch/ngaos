import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";

function Index(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Index;
