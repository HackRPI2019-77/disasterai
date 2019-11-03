import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Components/Home/Home';
import Welcome from './Components/Welcome/Welcome';
//import Test from './Test/';

export default class App extends React.Component{
  constructor(props){
    super();
    
  }
  render(){
    const welcomePageComponent = () => <Welcome/>;
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path='/' render = {welcomePageComponent}></Route>
          </div>
        </Router>
      </div>
    );
  }
}
