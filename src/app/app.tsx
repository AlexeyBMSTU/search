import React from 'react';
import Home from '@/pages/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { paths } from '@/shared/consts/consts';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={paths.GENERAL_PAGE} element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
