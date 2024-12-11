import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Screen } from './API/register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Screen />} />
      </Routes>
    </Router>
  );
}

export default App;
