import React from "react";
import data from "../data";
import uniqid from "uniqid";

class ManageCards extends React.Component {
  state = { cards: [], question: "", answer: "" };
  componentDidMount() {
    this.setState({ cards: data });
  }
  handleOnChange = (e) => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  };
  addCard = () => {
    const question = this.state.question;
    const answer = this.state.answer;
    const card = {
      id: uniqid(),
      que: question,
      ans: answer,
    };
    data.push(card);
    this.setState({ question: "", answer: "" });
  };

  render() {
    return (
      <div style={{ padding: "10px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {this.state.cards.map((card) => {
            return (
              <div
                style={{
                  background: "#dce2f4",
                  width: "400px",
                  margin: "10px",
                }}
              >
                <h5>Question:</h5>
                <h6>{card.que}</h6>
                <h5>Answer:</h5>
                <h6>{card.ans}</h6>
                <button onClick={() => this.onHandleDelete(card)}>
                  Delete
                </button>{" "}
                <button>Edit</button>
              </div>
            );
          })}
        </div>
        <div style={{ margin: "30px", textAlign: "center" }}>
          Add more cards
        </div>
        <div style={{ textAlign: "center" }}>
          <div>Question</div>
          <textarea
            value={this.state.question}
            name="question"
            onChange={(e) => this.handleOnChange(e)}
            cols="30"
            rows="10"
          ></textarea>
          <div>Answer</div>
          <textarea
            value={this.state.answer}
            name="answer"
            onChange={(e) => this.handleOnChange(e)}
            cols="30"
            rows="10"
          ></textarea>
          <div>
            <button onClick={this.addCard}>Add</button>
          </div>
        </div>
      </div>
    );
  }
}
export default ManageCards;
