import React from "react";
import "./App.scss";
import {
  About,
  Footer,
  Header,
  Skills,
  Testimonial,
  Work,
} from "./containers/container";
import { Navbar } from "./components/indexComponets";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
