import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends React.PureComponent{
  constructor(props) {
    super(props);
  }
  render() {
    const { id, type, html, value, markNotificationAsRead } = this.props;
    return (
      <li onClick={() => markNotificationAsRead(id)} className={css(type === 'urgent' ? styles.urgent : styles.default, styles.mediumLi, styles.margin)} key={id} data-notification-type={type} dangerouslySetInnerHTML={html}>
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
  markNotificationAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: 'default',
  markNotificationAsRead: () => {},
};

const styles = StyleSheet.create({
  margin: {
    margin: '1rem 0',
  },
  default: {
    color: 'blue',
  },
  urgent: {
    color: 'red',
  },
  mediumLi: {
    '@media (max-width: 900px)': {
      listStyle: 'none',
      padding: '10px 8px',
      borderBottom: '1px solid black',
    }
  }
})

export default NotificationItem;
