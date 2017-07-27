import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

const AppHeader = styled.section`
  background-color: #222;
  height: 100px;
  padding: 20px;
  color: white;
  text-align: center;
`;
const AppIntro = styled.section`
  padding: 80px 20px 0;
  height: calc(100vh - 140px);
  width: 100%;
  box-sizing: border-box;
  background-color: papayawhip;
  font-size: 28px;
  color: #666;
  text-align: center;
`;

const Card = styled.div`
  position: relative;
  margin: 10px;
  width: 100%;
  > * {
    position: absolute;
    top: 0;
    left: 0;
    padding: 20px 0;
    width: inherit;
    height: inherit;
    text-align: center;
    border: 0 1px 1px;
    border-radius: 10px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3), inset 1px 0 1px rgba(255, 255, 255, 0.1),
      inset 0 1px 1px rgba(255, 255, 255, 0.1);
    transform-style: preserve-3d;
    backface-visibility: hidden;
    transition: all 0.5s ease-in-out;
    &:not(:last-child) {
      z-index: ${props => (props.flipped ? '800' : '1000')};
      transform: rotateX(${props => (props.flipped ? '-180' : '0')}deg);
    }
    &:not(:first-child) {
      z-index: 900;
      transform: rotateX(${props => (props.flipped ? '0' : '180')}deg);
    }
  }
`;

const CardFront = styled.div`background-color: #eee;`;
const CardBack = styled.div`background-color: #222;`;

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
          <Grid fluid>
            <Row around="md">
              <Col xs={6} md={3}>
                <Card>
                  <CardBack>Back</CardBack>
                  <CardFront>
                    <span role="img" aria-label="alien">
                      👽
                    </span>
                  </CardFront>
                </Card>
              </Col>
              <Col xs={6} md={3}>
                <Card flipped>
                  <CardBack>Back</CardBack>
                  <CardFront>
                    <span role="img" aria-label="footsteps">
                      👣
                    </span>
                  </CardFront>
                </Card>
              </Col>
              <Col xs={6} md={3}>
                <Card>
                  <CardBack>Back</CardBack>
                  <CardFront>
                    <span role="img" aria-label="snek">
                      🐍
                    </span>
                  </CardFront>
                </Card>
              </Col>
            </Row>
          </Grid>
        </AppIntro>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  title: state.get('title')
});

export default connect(mapStateToProps)(App);
