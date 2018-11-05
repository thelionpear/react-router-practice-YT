import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; 
//Router takes in the pathname you want and the component 

const NewRoute = () => {
  return (
    <div>
      <p>New Route</p>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <BrowserRouter> 
        <Route path="/new" component={NewRoute}/>
      </BrowserRouter> 
    );
  }
}

export default App;
