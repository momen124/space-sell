import { Queryable } from "@/utils/decorators/queryable.decorator";
import { Api } from "./api";



const mockNotifications = [
    { id: 1, title: "New Message", message: "You have a new message from John Doe", date: "2023-10-10", read: false, type: "info" },
    { id: 2, title: "Order Shipped", message: "Your order #12345 has been shipped", date: "2023-10-11", read: true, type: "info" },
    { id: 3, title: "Payment Due", message: "Your subscription payment is due in 3 days", date: "2023-10-12", read: false, type: "warning" },
    { id: 4, title: "Account Security", message: "Unusual activity detected on your account", date: "2023-10-13", read: false, type: "error" },
  ];


  class NotificationService extends Api {
    @Queryable("user", [])
    async getNotifications() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000)); // simulate API call
        return mockNotifications;
      } catch (error) {
        throw error;
      }
    }
  
    async markAsRead(notificationId: number) {
      try {
        // Simulate marking notification as read
        const updatedNotifications = mockNotifications.map((notif) =>
          notif.id === notificationId ? { ...notif, read: true } : notif
        );
        return updatedNotifications;
      } catch (error) {
        throw error;
      }
    }
  
    async deleteNotification(notificationId: number) {
      try {
        // Simulate deleting notification
        const updatedNotifications = mockNotifications.filter((notif) => notif.id !== notificationId);
        return updatedNotifications;
      } catch (error) {
        throw error;
      }
    }
  
    async createNotification(notificationData: unknown) {
      try {
        // Simulate creating a new notification
        const newNotification = { id: mockNotifications.length + 1, ...notificationData };
        mockNotifications.push(newNotification);
        return newNotification;
      } catch (error) {
        throw error;
      }
    }
  }
  
  const notificationService = new NotificationService();
  export { notificationService, NotificationService };