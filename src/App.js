import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Components/Home/Home'

export default class App extends React.Component{
  constructor(props){
    super();
    
  }
  render(){
    const homePageComponent = () => <Home/>;
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path='/' render = {homePageComponent}></Route>
          </div>
        </Router>
      </div>
    );
  }
}
