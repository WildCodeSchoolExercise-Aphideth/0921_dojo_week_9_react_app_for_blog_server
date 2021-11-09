import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from "./components/ui/Navbar";
import Articles from "./components/articles/Articles";
import Article from "./components/articles/Article";
import Footer from './components/ui/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exac path="/" element={<Articles />} />
        <Route exac path="/article/:id" element={<Article />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
