import React from 'react';
import BaseLayout from './components/BaseLayout'
import {BrowserRouter as Router} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <Router>
      <BaseLayout/>
    </Router>
  );
}

export default App;
