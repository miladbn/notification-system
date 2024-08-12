import { Notification } from './types/Notification'

class NotificationManager {
  private notifications: Notification[] = []

  addNotification(notification: Notification): void {
    this.notifications.push(notification)
  }

  removeNotification(id: string): void {
    this.notifications = this.notifications.filter((n) => n.id !== id)
  }

  getNotifications(): Notification[] {
    return this.notifications
  }

  updateNotification(
    id: string,
    updatedNotification: Partial<Notification>,
  ): void {
    this.notifications = this.notifications.map((notification) =>
      notification.id === id
        ? { ...notification, ...updatedNotification }
        : notification,
    )
  }
}

export default NotificationManager
