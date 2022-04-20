/* eslint-disable import/no-unresolved */
import Header from "@components/Header";
import Home from "@pages/Home";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import "./pages/Home.css";
import "./Header.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
