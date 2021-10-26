import React from "react";
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Quiz from "./pages/Quiz"

const App = () => {
  return (
    <>
      <Layout>
        {/* <Home /> */}
        {/* <Signup /> */}
        {/* <Login /> */}
        <Quiz />
      </Layout>
    </>
  );
};

export default App;
