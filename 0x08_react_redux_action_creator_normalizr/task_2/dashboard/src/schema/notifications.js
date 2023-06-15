import * as notifications from '../../../../notifications.json';
import { normalize, schema } from 'normalizr';

const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, { idAttribute: 'guid'});

const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

export const normalizeData = normalize(notifications.default, [notification]);

const getAllNotificationsByUser = (userId) => {
  const notifications = normalizeData.entities.notifications;
  const messages = normalizeData.entities.messages;
  const result = []

  for (let key in notifications) {
    if (notifications[key].author === userId) {
      result.push(messages[notifications[key].context]);
    }
  }
  return result;
}

export default getAllNotificationsByUser;
