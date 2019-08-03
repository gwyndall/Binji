import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux"
import MainContainer from "./components/MainContainer";

function App() {
  return <MainContainer />;
}

import Navbar from 'components/Header';
import Footer from 'components/Footer';

render(
  <Provider store={store}>
    <div>
      <Navbar />

      <Footer />
    </div>
  </Provider>, document.getElementById('app')
);

export default App;
// render(
//   <div>
//     <Navbar />

//     <Footer />
//   </div>
// )
export default App;
