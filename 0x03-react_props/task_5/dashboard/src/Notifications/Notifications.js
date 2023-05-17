import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes, { arrayOf } from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

function Notifications({ displayDrawer, listNotifications }) {
  return (
    <>
      <div className="menuItem">
        <p>Your notifications</p>
      </div>
      {displayDrawer && (
        <div className='Notifications'>
          <button style={{
            position: 'absolute',
            background: 'none',
            border: 'none',
            right: '10px',
            top: '15px',
            cursor: 'pointer',
            }}
            aria-label="Close"
            onClick={() => {console.log('Close button has been clicked')}}>
              <img src={closeIcon} alt="close icon"/>
          </button>
          {listNotifications.length === 0 ? <p>No new notification for now</p> : <p>Here is the list of notifications</p>}
          <ul>
            {listNotifications.map((notification) => (<NotificationItem key={notification.id} html={notification.html} type={notification.type} value={notification.value}/>))}
          </ul>
        </div>
      )}
    </>
  )
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
