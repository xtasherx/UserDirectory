import React from "react";
import Nav from "./components/nav";
import Hero from "./components/hero";
import Table from "./components/table";

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />;
      <Hero />;
      <Table />
    </div>
  );
}

export default App;
