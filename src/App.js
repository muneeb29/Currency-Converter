import { Route, Routes } from "react-router-dom";
import Home from "./views/Home.js";
import Layout from "./layout/Layout.js";
import Footer from "./layout/Footer.js"
import "./index.css";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
      <Footer/>
    </div>
  );
}

export default App;
