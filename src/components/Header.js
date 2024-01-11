import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <h1
          style={ { margin: '30px', display: 'flex', justifyContent: 'center' } }
        >
          Sistema Solar
        </h1>
      </header>
    );
  }
}

export default Header;
