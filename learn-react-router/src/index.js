import React from 'react';
import ReactDOM from 'react-dom';
import {  
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <h3>learn-react-router</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
      </div>
      <Switch>
        <Route path="/projects">
          <Project />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function Home() {
  return <h2>Home</h2>;
}

function Project() {
  return <h2>Project</h2>;
}

ReactDOM.render(<App />, document.getElementById('root'));