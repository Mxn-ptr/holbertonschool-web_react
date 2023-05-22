import React from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    const { id, type, html, value, markAsRead } = this.props;
    return (
      <li onClick={() => markAsRead(id)} data-notification-type={type} dangerouslySetInnerHTML={html}>
        {value}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string,
  value: PropTypes.string,
};

NotificationItem.defaultProps = {
  type: 'default',
};

export default NotificationItem;
