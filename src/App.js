import React from "react";
import Nav from "./components/nav";
import Hero from "./components/hero";
import Table from "./components/table";
import Footer from "./components/footer"
import './App.css';



function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Table />
      <Footer />
    </div>
  );
}

export default App;
