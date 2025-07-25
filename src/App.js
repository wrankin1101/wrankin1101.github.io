import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CommentWriter from './pages/CommentWriter';
import HeaterDemo from './pages/HeaterDemo';
import DesignToHtml from './pages/DesignToHtml';
import "./styles/App.css";
import ScrollToAnchor from './components/ScrollToAnchor';

const App = () => {
  return (

    <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/index" element={<Home />} />
        <Route path="/commentwriter" element={<CommentWriter />} />
        <Route path="/heaterdemo" element={<HeaterDemo />} />
        <Route path="/design" element={<DesignToHtml />} />
      </Routes>
      <ScrollToAnchor />
    </Layout>
  );
};

export default App;
