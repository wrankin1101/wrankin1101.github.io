import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CommentWriter from './pages/CommentWriter';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/index" element={<Home />} />
        <Route path="/commentwriter" element={<CommentWriter />} />
        {/*<Route path="/about" element={<About />} />*/}
      </Routes>
    </Layout>
  );
};

export default App;
