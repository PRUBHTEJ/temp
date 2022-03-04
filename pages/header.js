import React, { Component } from 'react';
import Content from './content.js';
 
class Header extends Component {
  render() {
    return (
      <div>
        <Content />
        <h1>Demo Application</h1>
        <div>
        <div>
                  
                  </div>
            <button button onClick={() => "I am from header"}>Content</button>
        </div>
        <p>Demo application created in React App</p>
      </div>
      
    );
  }
}
 
export default Header;