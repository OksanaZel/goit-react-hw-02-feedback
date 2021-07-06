import React, { Component } from "react";
import { Container, Notification } from "./App.styles";
import Section from "../Section";
import FeedbackOptions from "../FeedbackOptions";
import Statistics from "../Statistics";

class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0,
  }

  totalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  positiveFeedback = () => {
    const { good } = this.state;
    const total = this.totalFeedback();
    return Math.round(good/total*100);
  }

  onLeaveFeedback = (feedback) => {
    this.setState(PrevState => ({
      [feedback]: PrevState[feedback] + 1,
    }));
  }
  
  render() {
    const options = Object.keys(this.state);
    const values = this.state;
    const total = this.totalFeedback();
    const positive = this.positiveFeedback();
    
    return (
      <Container>
       <Section title={"Please leave feedback"}>
          <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback} />
       </Section>
        <Section title={"Statistics"}>
          {total !== 0 ? <Statistics options={options} values={values} total={total} positive={positive} /> : <Notification>{"No feedback given"}</Notification>}
       </Section>
     </Container>
    );
  }
}

export default App;
