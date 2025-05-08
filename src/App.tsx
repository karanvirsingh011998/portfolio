import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Skills } from './pages/Skills';
import { Contact } from './pages/Contact';
import { Footer } from './components/Footer';
import { NotFound } from './pages/NotFound';
import Projects from './pages/Projects';
import { AboutMe } from './components/AboutMe';
import { Header } from './components/Header';
import Terminal from './pages/Terminal';
import Layout from './components/Layout';

const routes = [
  { path: "/", component: <Home /> },
  { path: "/skills", component: <Skills /> },
  { path: "/contact", component: <Contact /> },
  { path: "/projects", component: <Projects /> },
  { path: "/bio", component: <AboutMe /> },
  { path: "/terminal", component: <Terminal /> },
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Header />
      <Routes>
        {routes.map(({ path, component }) => (
          <Route key={path} path={path} element={<Layout>{component}</Layout>} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
