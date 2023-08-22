import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllTrains from './components/AllTrains';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AllTrains} />
        {/* Define other routes here */}
      </Switch>
    </Router>
  );
}

export default App;
