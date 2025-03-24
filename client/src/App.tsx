import React from "react";
import "./styles/App.scss";
import Navbar from "./components/Navbar/Navbar";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <main>
      <Navbar />
      <AppRouter />
    </main>
  );
}

export default App;
