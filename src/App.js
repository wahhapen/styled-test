import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import './App.css';

const AppHeader = styled.section`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
  text-align: center;
`;
const AppIntro = styled.section`
  padding: 20px;
  height: calc(100vh - 190px);
  width: 100%;
  box-sizing: border-box;
  background-color: papayawhip;
  font-size: 28px;
  color: #333;
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader>
          <h2>
            {this.props.title}
          </h2>
        </AppHeader>
        <AppIntro>You're doing great!</AppIntro>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  title: state.get('title')
});

export default connect(mapStateToProps)(App);
