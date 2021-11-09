import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from "./components/ui/Navbar";
import Articles from "./components/articles/Articles";
import Article from "./components/articles/Article";
import ArticleForm from "./components/articles/ArticleForm";
import Footer from './components/ui/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exac path="/" element={<Articles />} />
        <Route exac path="/article/:id" element={<Article />} />
        <Route exac path="/create-article" element={<ArticleForm />} />
        <Route exac path="/edit-article/:id" element={<ArticleForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
