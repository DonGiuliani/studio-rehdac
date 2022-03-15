import { Routes, Route } from "react-router-dom";

import Banner from "./components/Header/Banner"
import Footer from "./components/Footer/Footer";

import Home from "./Pages/Home";
import Presentation from "./Pages/Presentation";
import Engagements from "./Pages/Engagements";
import Prestations from "./Pages/Prestations";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/engagements" element={<Engagements /> } />
          <Route path="/prestations" element={<Prestations />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;