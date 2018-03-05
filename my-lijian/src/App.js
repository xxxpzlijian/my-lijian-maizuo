import React, { Component } from 'react';
import Header from './components/Header';
import Details from './components/Details';
import Home from "./components/home";
import List from "./components/List";
import Xinlist from "./components/Xinlist";
import {BrowserRouter as Router , Route} from 'react-router-dom';
import './style/app.css';
class App extends Component {
  constructor(){
    super();
    this.state = {
      showflag:false
    }
    this.ancter = this.ancter.bind(this)
  }
  ancter() {
      this.setState({
        showflag:!this.state.showflag
      })
  }
  render() {
    var ul2 = <ul><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li></ul>;
      if(!this.state.showflag){
        ul2=null;
      } 
    return (
      <div className="App">
        <Header className="header1" ttt={this.ancter}/> 
        <div className="main"> 
          {ul2}
          <Router>
            <div>
              <Route exact path="/" component={Home} /> 
              <Route path="/details" component={Details} />
              <Route path="/list" component={List} />
              <Route path="/xinlist" component={Xinlist} />
            </div>
          </Router> 
        </div>
      </div>
    );
  }
}

export default App;
