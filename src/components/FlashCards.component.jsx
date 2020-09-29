import React from "react";
import data from "../data";
import Card from "./Card/Card.component";
import NewButton from "./NewButton.component";
import RevealButton from "./RevealButton.component";
import Confirmation from "./Confirmation.component";
import Progress from "./Progress.component";

class FlashCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      currentCard: {},
      completedCards: [],
      totalCards: 0,
      revealCard: false,
    };
  }
  componentDidMount() {
    const currentCards = this.shuffleArray(data);
    this.setState({
      cards: currentCards,
      totalCards: data.length,
      currentCard: this.getRandomCard(currentCards),
    });
  }
  shuffleArray = (arr) => {
    const newArr = arr.slice();
    for (let i = newArr.length - 1; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
    }
    return newArr;
  };

  getRandomCard = (currentCards) => {
    const card = currentCards[Math.floor(Math.random() * currentCards.length)];
    return card;
  };

  updateCard = () => {
    const currentCards = this.state.cards;
    this.setState({
      currentCard: this.getRandomCard(currentCards),
      revealCard: false,
    });
  };

  removeCard = () => {
    const id = this.state.currentCard.id;
    const newCards = [...this.state.cards].filter((el) => el.id !== id);

    this.setState((prevState) => {
      return {
        completedCards: prevState.completedCards + 1,
        cards: newCards,
        currentCard: this.getRandomCard(newCards),
        revealCard: false,
      };
    });
  };
  revealCard = () => {
    this.setState({ revealCard: true });
  };

  startAgain = () => {
    const currentCards = this.shuffleArray(data);
    this.setState({
      cards: currentCards,
      currentCard: this.getRandomCard(currentCards),
      completedCards: [],
    });
  };

  render() {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <div>
          {this.state.cards.length && (
            <Card
              question={this.state.currentCard.que}
              answer={this.state.currentCard.ans}
              reveal={this.state.revealCard}
            ></Card>
          )}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <NewButton newCard={this.updateCard}></NewButton>
          <RevealButton revealCard={this.revealCard}></RevealButton>
        </div>
        {this.state.revealCard && (
          <Confirmation
            updateCard={this.updateCard}
            removeCard={this.removeCard}
          ></Confirmation>
        )}
        <Progress
          completed={this.state.completedCards.length}
          total={this.state.totalCards}
        ></Progress>
        {!this.state.cards.length && (
          <div>
            <h4>You have completed all flash cards.</h4>
            <button onClick={this.startAgain}>Reshuffle Again</button>
          </div>
        )}
      </div>
    );
  }
}

export default FlashCards;
