import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import App from '../../App';
import About from './About';
import DetailTodo from './DetailTodo';


class Home extends Component {

  handleNav(e){
    const navs= document.querySelectorAll('.nav-link');
    navs.forEach(nav => {
      nav.classList.remove('active');
    });
    e.target.classList.add('active');
  }

  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to='/'>Todo App</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav" onClick={e => this.handleNav(e)}>
              <Link className="nav-link active" to='/' >Home<span className="sr-only">(current)</span></Link>
              <Link className="nav-link" to='/about' >About</Link>
            </div>
          </div>
        </nav>

        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path='/detail-todo/:id'>
            <DetailTodo />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default Home;
