import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import List from './containers/List';
import Item from './containers/Item';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <div>
            <Route exact path="/" component={List} />
            <Route path="/list" component={List} />
            <Route path="/item" component={Item} />
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
