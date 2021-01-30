import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/about';
import Resume from './pages/resume';
import Home from './pages/home';
import ProjectGallery from './pages/projectGallery';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={ProjectGallery} />
          <Route exact path="/resume" component={Resume} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
