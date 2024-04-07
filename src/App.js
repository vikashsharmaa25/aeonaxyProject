import React from "react";
import Home from "./components/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="max-w-[1100px] mx-auto">
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default App;
