
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Skills } from './pages/Skills';
import { Contact } from './pages/Contact';
import { Footer } from './components/Footer';
import { NotFound } from './pages/NotFound';
import Projects from './pages/Projects';
import { AboutMe } from './components/AboutMe';
import { Header } from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/bio" element={<AboutMe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;