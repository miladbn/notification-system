import { Notification, NotificationType } from './types/Notification'
import NotificationManager from './NotificationManager'

// Initialize the NotificationManager instance
const notificationManager = new NotificationManager() // Correctly use `new NotificationManager()`

// Function to create a new notification
function createNotification(
  type: NotificationType,
  content: string,
  duration?: number,
): Notification {
  const notification: Notification = {
    id: generateUniqueId(), // Generate a unique ID for the notification
    type,
    content,
    duration,
  }
  notificationManager.addNotification(notification) // Add the notification to the manager
  return notification // Return the created notification object
}

// Function to dismiss (remove) a notification by ID
function dismissNotification(id: string): void {
  notificationManager.removeNotification(id)
}

// Function to get all notifications currently managed
function getAllNotifications(): Notification[] {
  return notificationManager.getNotifications()
}

// Function to update an existing notification
function updateNotification(
  id: string,
  updatedNotification: Partial<Notification>,
): void {
  notificationManager.updateNotification(id, updatedNotification)
}

// Helper function to generate a unique ID
function generateUniqueId(): string {
  return '_' + Math.random().toString(36).substr(2, 9)
}

// Export the public API functions
export {
  createNotification,
  dismissNotification,
  getAllNotifications,
  updateNotification,
}
