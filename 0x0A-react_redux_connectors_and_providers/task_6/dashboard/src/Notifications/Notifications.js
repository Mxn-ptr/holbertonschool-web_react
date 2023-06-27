import React from 'react';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { fetchNotifications, markAsAread } from '../actions/notificationActionCreators';
import { connect } from 'react-redux';
import { getUnreadNotifications } from '../selectors/notificationSelector'

class Notifications extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNotifications();
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
              {listNotifications.toJS().map((notification) => (
                                                         <NotificationItem
                                                         key={notification.guid}
                                                         id={notification.guid}
                                                         html={notification.html}
                                                         type={notification.type}
                                                         value={notification.value}
                                                         markNotificationAsRead={markNotificationAsRead}/>
                                                         ))}
            </ul>
          </div>
        )}
      </>
    )
  }
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
  fetchNotifications: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: {},
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {},
  fetchNotifications: () => {},
  markNotificationAsRead: () => {},
};

export const mapStateToProps = (state) => {
  return {
    listNotifications: getUnreadNotifications(state),
  }
};

export const mapDispatchToProps = (dispatch) => {
  return {
    fetchNotifications: () => dispatch(fetchNotifications()),
    markNotificationAsRead: (id) => dispatch(markAsAread(id)) 
  };
}

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
    width: '35vw',
    right: '5px',
    position: 'absolute',
    textAlign: 'left',
    backgroundColor: 'white',
    zIndex: '1',
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

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
