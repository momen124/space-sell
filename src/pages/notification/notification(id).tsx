'use client'

// Importing necessary hooks and components from React and Next.js
import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { ArrowLeft, Bell } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card" // Ensure the import path is correct
import { Badge } from "@/components/ui/badge" // Ensure the import path is correct

// Defining the Notification interface
interface Notification {
  id: string
  title: string
  message: string
  date: string
  read: boolean
  type: 'info' | 'warning' | 'error'
}

// Mock notifications data
const mockNotifications: Notification[] = [
  { id: '1', title: 'New Message', message: 'You have a new message from John Doe. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', date: '2023-06-01', read: false, type: 'info' },
  { id: '2', title: 'Order Shipped', message: 'Your order #12345 has been shipped. It is expected to arrive within 3-5 business days. You can track your package using the tracking number provided in your email.', date: '2023-05-31', read: true, type: 'info' },
  { id: '3', title: 'Payment Due', message: 'Your subscription payment is due in 3 days. Please ensure your payment method is up to date to avoid any interruption in service.', date: '2023-05-30', read: false, type: 'warning' },
  { id: '4', title: 'Account Security', message: 'Unusual activity has been detected on your account. For your security, we recommend changing your password immediately and enabling two-factor authentication if you haven\'t already.', date: '2023-05-29', read: false, type: 'error' },
]

// Main functional component for Notification Detail Page
export default function NotificationDetailPage() {
  const params = useParams() // Get parameters from the URL
  const router = useRouter() // Initialize the router
  const [notification, setNotification] = useState<Notification | null>(null) // State to store the selected notification

  useEffect(() => {
    // Find the notification based on the id from URL parameters
    const notif = mockNotifications.find(n => n.id === params.id)
    setNotification(notif || null) // Set the notification state, or null if not found
  }, [params.id]) // Effect runs when params.id changes

  // If no notification is found, display a message
  if (!notification) {
    return <div className="text-red-500">Notification not found</div>
  }

  return (
    <div className="container mx-auto p-4 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      {/* Button to go back to the notifications list */}
      <Button variant="ghost" onClick={() => router.back()} className="mb-4 text-blue-900">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Notifications
      </Button>
      
      {/* Card component to display notification details */}
      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex justify-between items-center">
            {/* Title of the notification */}
            <CardTitle className="text-2xl text-blue-900">{notification.title}</CardTitle>
            {/* Badge indicating the type of notification */}
            <Badge variant={notification.type === 'error' ? 'destructive' : notification.type === 'warning' ? 'warning' : 'default'}>
              {notification.type}
            </Badge>
          </div>
          {/* Description showing the date of the notification */}
          <CardDescription className="text-gray-500">{notification.date}</CardDescription>
        </CardHeader>
        
        {/* Content of the notification */}
        <CardContent>
          <p className="text-lg text-gray-700">{notification.message}</p>
        </CardContent>
        
        {/* Footer with button to view all notifications */}
        <CardFooter>
          <Button variant="outline" onClick={() => router.push('/notifications')}>
            <Bell className="mr-2 h-4 w-4" />
            View All Notifications
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
