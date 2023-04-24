import { Component } from 'react';
import Statistics from './feedback-statistics/statistics/Statistics';
import FeedbackOptions from './feedback-statistics/feedback-options/FeedbackOptions';
import Section from './feedback-statistics/section/Section';
import Notification from './feedback-statistics/notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;

    const TOTAL_FEEDBACK = good + neutral + bad;

    return TOTAL_FEEDBACK;
  };

  countPositiveFeedbackPercentage = () => {
    const POSITIVE_FEEDBACKS = this.state.good;
    const TOTAL_FEEDBACK = this.countTotalFeedback();

    if (!POSITIVE_FEEDBACKS) {
      return 0;
    }

    const POSITIVE_FEEDBACK_PERCENTAGE = (
      (POSITIVE_FEEDBACKS / TOTAL_FEEDBACK) *
      100
    ).toFixed(0);

    return POSITIVE_FEEDBACK_PERCENTAGE;
  };

  handleFormBtnClick = ev => {
    const BTN_TEXT_CONTENT = ev.target.textContent.toLowerCase();

    this.setState(prevState => ({
      [BTN_TEXT_CONTENT]: prevState[BTN_TEXT_CONTENT] + 1,
    }));
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleFormBtnClick} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
