import React from 'react';

export default function NotificationItem(props) {
  return (
    <li data-notification-type={props.type} dangerouslySetInnerHTML={props.html}>
      {props.value}
    </li>
  );
}
