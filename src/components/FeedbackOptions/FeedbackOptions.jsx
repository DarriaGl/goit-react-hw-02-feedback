import propTypes from 'prop-types';
import { Button } from './FeedbackOptions.module.jsx';

export const Feedback = ({ options, leaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <Button
          type="button"
          onClick={leaveFeedback}
          name={option}
          key={option}
        >
          {option}
        </Button>
      ))}
    </div>
  );
};

Feedback.propTypes = {
  options: propTypes.arrayOf(propTypes.string).isRequired,
  leaveFeedback: propTypes.func.isRequired,
};
