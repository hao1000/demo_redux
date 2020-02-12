import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import News from './News';

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.dulieu}
        <News></News>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    dulieu: state.num
  }
}
export default connect(mapStateToProps)(App);
