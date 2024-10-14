'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Bell, Settings, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Badge from '@/components/ui/badge'

interface Notification {
  id: string
  title: string
  message: string
  date: string
  read: boolean
  type: 'info' | 'warning' | 'error'
}

const mockNotifications: Notification[] = [
  { id: '1', title: 'New Message', message: 'You have a new message from John Doe', date: '2023-06-01', read: false, type: 'info' },
  { id: '2', title: 'Order Shipped', message: 'Your order #12345 has been shipped', date: '2023-05-31', read: true, type: 'info' },
  { id: '3', title: 'Payment Due', message: 'Your subscription payment is due in 3 days', date: '2023-05-30', read: false, type: 'warning' },
  { id: '4', title: 'Account Security', message: 'Unusual activity detected on your account', date: '2023-05-29', read: false, type: 'error' },
]

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications)

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ))
  }

  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter(notif => notif.id !== id))
  }

  return (
    <div className="container mx-auto p-4 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-900 flex items-center">
          <Bell className="mr-2 h-6 w-6 text-blue-900" />
          Notifications
        </h1>
        <Link href="/notifications/settings">
          <Button variant="outline" className="bg-blue-100 text-blue-700 hover:bg-blue-200 transition duration-300">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </Link>
      </div>

      <ScrollArea className="h-[600px] rounded-md border p-4 shadow-lg bg-white">
        {notifications.map((notification) => (
          <Card 
            key={notification.id} 
            className={`mb-4 p-4 rounded-lg border transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ${notification.read ? 'opacity-70' : ''}`}
          >
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg font-semibold text-blue-900">{notification.title}</CardTitle>
                <Badge 
                  variant={notification.type === 'error' ? 'destructive' 
                            : notification.type === 'warning' ? 'warning' 
                            : 'info'}
                >
                  {notification.type.charAt(0).toUpperCase() + notification.type.slice(1)}
                </Badge>
              </div>
              <CardDescription className="text-gray-500">{notification.date}</CardDescription>
            </CardHeader>

            <CardContent>
              <p className="text-gray-700">{notification.message}</p>
            </CardContent>

            <CardFooter className="flex justify-between">
              {!notification.read && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-blue-500 border-blue-500 hover:bg-blue-50 transition duration-300"
                  onClick={() => markAsRead(notification.id)}
                >
                  Mark as Read
                </Button>
              )}
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-red-500 hover:text-red-700 transition duration-300"
                onClick={() => deleteNotification(notification.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </ScrollArea>
    </div>
  )
}