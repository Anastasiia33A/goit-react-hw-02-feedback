import { Component } from "react";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notification/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  addFeedback = option => {
    this.setState(this.state({ [option]: this.state[option] + 1 }));
  };

  countTotalFeedback = () => {
    return Object.keys(this.state).reduce((acc, option) => acc + option, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100) || 0;
  };


  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section><FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.addFeedback}></FeedbackOptions></Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positiveFeedback={this.countPositiveFeedbackPercentage()}></Statistics>
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
};