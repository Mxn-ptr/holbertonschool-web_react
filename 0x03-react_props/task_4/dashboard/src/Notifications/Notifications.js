import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

function Notifications({ displayDrawer }) {
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
          <p>Here is the list of notifications</p>
          <ul>
            <NotificationItem type='default' value='New course available' />
            <NotificationItem type='urgent' value='New resume available' />
            <NotificationItem type='urgent' html={{__html: getLatestNotification()}} />
          </ul>
        </div>
      )}
    </>
  )
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
