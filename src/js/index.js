import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/style.css';

 

class App extends Component {
  constructor(props) {
    super(props)

  
    this.state = {
      locations: [] 
    }
  }
 

  render() {
    
    

    return (
      <div> 
         
 
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);