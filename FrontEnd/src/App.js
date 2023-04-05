import React from "react";
import "./App.css";
// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import SingleAnimal from "./pages/SingleAnimal";
import Error from "./pages/Error";
// import components
import Navbar from "./components/Navbar";
import AppRouter from "./router/router";
//import { AppProvider } from "./context";
function App() {
  return (
    <div>
      {/* <AppProvider> */}
      <Navbar />

      <AppRouter />
      {/* </AppProvider> */}
    </div>
  );
}

export default App;
