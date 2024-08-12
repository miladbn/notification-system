import {
  createNotification,
  dismissNotification,
  getAllNotifications,
} from '../index'

test('should create a notification', () => {
  const notification = createNotification('info', 'This is a test notification')
  const notifications = getAllNotifications()
  expect(notifications).toContainEqual(notification) // Check if the notification is in the list
})

test('should dismiss a notification', () => {
  const notification = createNotification('info', 'This is a test notification')
  dismissNotification(notification.id) // Remove the notification
  const notifications = getAllNotifications()
  expect(notifications).not.toContainEqual(notification) // Check if the notification was removed
})
