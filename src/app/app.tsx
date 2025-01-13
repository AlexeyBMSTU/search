import React from 'react';
import Home from '@/pages/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PATHS } from '@/shared/consts/consts';
import { Provider } from 'react-redux';
import store from '@/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path={PATHS.GENERAL_PAGE} element={<Home />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
