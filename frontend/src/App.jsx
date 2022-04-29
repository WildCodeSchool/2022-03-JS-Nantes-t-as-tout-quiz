import { Route, Routes } from "react-router-dom";
/* eslint-disable import/no-unresolved */
import Header from "@components/Header";
import Home from "@pages/Home";
import Themes from "@pages/Themes";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Themes" element={<Themes />} />
      </Routes>
    </div>
  );
}

export default App;
