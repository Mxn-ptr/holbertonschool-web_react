import React from 'react';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes, { arrayOf } from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

class Notifications extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { displayDrawer, listNotifications, handleDisplayDrawer, handleHideDrawer, markNotificationAsRead } = this.props;
    return (
      <>
        <div className={css(styles.menuItem, displayDrawer ? styles.hide : '')} onClick={handleDisplayDrawer} id='menuItem'>
          <p>Your notifications</p>
        </div>
        {displayDrawer && (
          <div className={css(styles.notifications)}>
            <button style={{
              position: 'absolute',
              background: 'none',
              border: 'none',
              right: '10px',
              top: '15px',
              cursor: 'pointer',
            }}
            aria-label="Close"
            onClick={handleHideDrawer}>
                <img src={closeIcon} alt="close icon"/>
            </button>
            {listNotifications.length === 0 ? <p>No new notification for now</p> : <p>Here is the list of notifications</p>}
            <ul className={css(styles.mediumList)}>
              {listNotifications.map((notification) => (<NotificationItem
                                                         key={notification.id}
                                                         id={notification.id}
                                                         html={notification.html}
                                                         type={notification.type}
                                                         value={notification.value}
                                                         markNotificationAsRead={markNotificationAsRead}/>))}
            </ul>
          </div>
        )}
      </>
    )
  }
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {},
};

const opacityKeyFrames = {
  'from': {
    opacity: 0.5
  },
  'to': {
    opacity: 1,
  }
}


const translateKeyFrames = {
  '0%': {
    transform: 'translateY(0)',
  },
  '50%': {
    transform: 'translateY(-5px)',
  },
  '75%': {
    transform: 'translateY(5px)',
  },
  '100%': {
    transform: 'translateY(0)',
  }
}

const styles = StyleSheet.create({
  menuItem: {
    textAlign: 'right',
    backgroundColor: '#fff8f8',
    cursor: 'pointer',
    ':hover': {
      animationName: [opacityKeyFrames, translateKeyFrames],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3',
    }
  },
  hide: {
    display: 'none'
  },
  notifications: {
    border: '0.2rem dashed #e0354b',
    padding: '5px 20px',
    width: '30vw',
    right: '5px',
    position: 'absolute',
    textAlign: 'left',
    '@media (max-width: 900px)': {
      position: 'fixed',
      width: '100%',
      height: '100%',
      zIndex: '6',
      top: '0',
      left: '0',
      padding: '0',
      border: 'none',
      backgroundColor: 'white',
      fontSize: '20px',
    }
  },
  mediumList: {
    '@media (max-width: 900px)': {
      padding: '0'
    }
  }
})

export default Notifications;
