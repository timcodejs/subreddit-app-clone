import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Main from './pages/main';
import GlobalStyle from './styles/globalStyled';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route
            path="/how-it-works"
            element={
              <Header>
                <h1>How it works</h1>
              </Header>
            }
          />
          <Route
            path="/about"
            element={
              <Header>
                <h1>About</h1>
              </Header>
            }
          />
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
