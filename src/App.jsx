import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  const slides = [
    {
      url: "https://news.harvard.edu/wp-content/uploads/2022/11/081022_Harvard_Forest_54-2048x1366.jpg",
      title: "Forest",
    },
    {
      url: "https://www.zoffoli.com/img/cms/vulcano_1.jpg",
      title: "Vulcano",
    },
    {
      url: "https://img.welt.de/img/kmpkt/mobile193712903/9317939257-coriginal-w680/Grumpy-Cat-Makes-Appearance-At-Kitson-Santa-Monica.jpg",
      title: "CAT",
    },
  ];

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="/header" element={<Header />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects slides={slides} />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

// old variant / alte Variante
{
  /* <Nav />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer /> */
}
