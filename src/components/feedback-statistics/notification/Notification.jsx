import PropTypes from 'prop-types';
import { StyledNotification } from './StyledNotification';

const Notification = ({ message }) => {
  return <StyledNotification>{message}</StyledNotification>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
