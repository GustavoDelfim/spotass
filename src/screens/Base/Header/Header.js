import React, { Component } from 'react';
import './Header.css';

class BaseHeader extends Component {
  render () {
    return (
      <div>
        <header>
          <a href="./" className="logo"><img src="/img/logo.png" /></a>
          <menu>
            <ul>
              <li><a href="">Link 1</a></li>
              <li><a href="">Link 2</a></li>
              <li><a href="">Link 3</a></li>
              <li><a href="">Link 4</a></li>
            </ul>
          </menu>
        </header>
      </div>
    )
  }
}

export default BaseHeader;
