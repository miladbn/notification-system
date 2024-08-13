import {
  createNotification,
  dismissNotification,
  getAllNotifications,
} from "../index";

describe("Notification System", () => {
  beforeEach(() => {
    // Reset notifications before each test if possible
  });

  test("should create a notification and verify properties", () => {
    const notification = createNotification(
      "info",
      "This is a test notification"
    );

    const notifications = getAllNotifications();

    // Check if the notification is in the list
    expect(notifications).toContainEqual(notification);

    // Additional property checks
    expect(notification.type).toBe("info");
    expect(notification.message).toBe("This is a test notification");
    expect(notification.id).toBeDefined();
    expect(notification.createdAt).toBeInstanceOf(Date);
  });

  test("should dismiss a notification and check list", () => {
    const notification = createNotification(
      "info",
      "This is a test notification"
    );

    dismissNotification(notification.id);

    const notifications = getAllNotifications();

    // Check if the notification was removed
    expect(notifications).not.toContainEqual(notification);

    // Ensure no other notifications were removed
    const remainingNotification = createNotification(
      "warning",
      "Another notification"
    );
    expect(notifications).toContainEqual(remainingNotification);
  });

  test("should handle dismissing a non-existent notification", () => {
    const nonExistentId = "non-existent-id";

    const initialNotifications = getAllNotifications();

    dismissNotification(nonExistentId);

    const notificationsAfterDismiss = getAllNotifications();

    // Ensure nothing changed
    expect(notificationsAfterDismiss).toEqual(initialNotifications);
  });
});
