var React = require('react');

import React from "react";
import MainContainer from "./components/MainContainer";

function App() {
  return <MainContainer />;
}

export default App;

import Navbar from 'components/Header'; 
import Footer from 'components/Footer';

render(
  <div>
    <Navbar />

    <Footer />
  </div>
)
