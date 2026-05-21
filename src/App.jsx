import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Home from "./pages/Home.jsx";
import Games from "./pages/Games.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import ScrollToTop from "./ScrollToTop.jsx";

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/games" element={<Games />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
}

export default App;