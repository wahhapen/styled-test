import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Cards from './components/Cards';

const AppHeader = styled.section`
  background-color: #222;
  height: 100px;
  padding: 20px;
  color: white;
  text-align: center;
`;
const AppIntro = styled.section`
  padding-top: 80px;
  padding-right: 20px;
  padding-left: 20px;
  height: calc(100vh - 140px);
  width: 100%;
  box-sizing: border-box;
  background-color: papayawhip;
  font-size: 28px;
  color: #666;
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
        <AppIntro>
          <Cards />
        </AppIntro>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  title: state.get('title')
});

export default connect(mapStateToProps)(App);
