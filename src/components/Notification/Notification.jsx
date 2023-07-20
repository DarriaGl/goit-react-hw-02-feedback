import propTypes from 'prop-types';
import { Message } from './Notification.module.jsx';

export const Notification = ({ message }) => {
  return <Message>{message}</Message>;
};

Notification.propTypes = {
  message: propTypes.string,
};
