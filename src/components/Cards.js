import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

const Card = styled.div`
  position: relative;
  margin: 10px;
  width: 100%;
  > * {
    padding-top: 20px;
    padding-bottom: 20px;
    width: inherit;
    height: inherit;
    text-align: center;
    border: 0 1px 1px;
    border-radius: 10px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3), inset 1px 0 1px rgba(255, 255, 255, 0.1),
      inset 0 1px 1px rgba(255, 255, 255, 0.1);
    transform-style: preserve-3d;
    backface-visibility: hidden;
    transition: all 0.4s ease-in-out;
    user-select: none;
    cursor: pointer;
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
const CardBack = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #222;
`;

class Cards extends Component {
  handleFlip(card) {
    this.setState(
      this.props.cards.map(currentCard => {
        if (currentCard.id === card.id) {
          card.isCardFlipped = !card.isCardFlipped;
        }
        return currentCard;
      })
    );
  }
  render() {
    return (
      <Grid fluid>
        <Row around="md">
          {this.props.cards.map((card, index) => {
            return (
              <Col key={index} xs={6} md={3}>
                <Card flipped={card.isCardFlipped} onClick={this.handleFlip.bind(this, card)}>
                  <CardBack>Back</CardBack>
                  <CardFront>
                    <span role="img" aria-label={card.name}>
                      {card.emoji}
                    </span>
                  </CardFront>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  cards: state.get('cards'),
  isCardFlipped: false
});

export default connect(mapStateToProps)(Cards);
