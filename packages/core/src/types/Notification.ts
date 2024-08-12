export type NotificationType = 'info' | 'success' | 'warning' | 'error'

export interface Notification {
  id: string
  type: NotificationType
  content: string
  duration?: number // Duration in milliseconds, undefined means persistent
}
