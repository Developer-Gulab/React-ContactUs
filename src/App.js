import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Contact from './components/contact';


import './styles/ContactForm.scss';
import './styles/colors.scss';








const App = () => {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
