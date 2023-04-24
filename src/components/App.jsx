import { useState } from 'react';
import Statistics from './feedback-statistics/statistics/Statistics';
import FeedbackOptions from './feedback-statistics/feedback-options/FeedbackOptions';
import Section from './feedback-statistics/section/Section';
import Notification from './feedback-statistics/notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    const TOTAL_FEEDBACK = good + neutral + bad;

    return TOTAL_FEEDBACK;
  };

  const countPositiveFeedbackPercentage = () => {
    const POSITIVE_FEEDBACKS = good;
    const TOTAL_FEEDBACK = countTotalFeedback();

    if (!POSITIVE_FEEDBACKS) {
      return 0;
    }

    const POSITIVE_FEEDBACK_PERCENTAGE = (
      (POSITIVE_FEEDBACKS / TOTAL_FEEDBACK) *
      100
    ).toFixed(0);

    return POSITIVE_FEEDBACK_PERCENTAGE;
  };

  const handleFormBtnClick = ev => {
    const BTN_TEXT_CONTENT = ev.target.textContent.toLowerCase();

    switch (BTN_TEXT_CONTENT) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        break;
    }
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFormBtnClick}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
