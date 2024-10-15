// pages/settings.tsx
'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

export default function SettingsPage() {
  const [user, setUser] = useState({
    name: "Alice Johnson",
    email: "alice@example.com",
    avatar: "/placeholder.svg?height=100&width=100",
    language: "english",
    theme: "light",
  })

  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: "public",
    activityStatus: true,
  })

  const [notificationSettings, setNotificationSettings] = useState({
    email: true,
    push: false,
    sms: false,
  })

  const handleUserChange = (field: keyof typeof user, value: string) => {
    setUser(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Account Settings</h1>
        <Tabs defaultValue="account" className="space-y-6">
          <TabsList className="bg-white rounded-lg p-1 shadow-md">
            <TabsTrigger value="account" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">Account</TabsTrigger>
            <TabsTrigger value="privacy" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">Privacy</TabsTrigger>
            <TabsTrigger value="notifications" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">Notifications</TabsTrigger>
            <TabsTrigger value="appearance" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">Appearance</TabsTrigger>
          </TabsList>

          <TabsContent value="account">
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-t-lg">
                <CardTitle className="text-2xl">Account Settings</CardTitle>
                <CardDescription className="text-blue-100">Manage your account information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                <div className="flex items-center space-x-4">
                  <Avatar className="w-24 h-24 border-4 border-white shadow-lg">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="text-2xl">{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <Button variant="outline" className="hover:bg-blue-50">Change Avatar</Button>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700">Name</Label>
                  <Input id="name" value={user.name} onChange={(e) => handleUserChange('name', e.target.value)} className="border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email</Label>
                  <Input id="email" type="email" value={user.email} onChange={(e) => handleUserChange('email', e.target.value)} className="border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="language" className="text-sm font-medium text-gray-700">Language</Label>
                  <Select value={user.language} onValueChange={(value) => handleUserChange('language', value)}>
                    <SelectTrigger id="language" className="border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                      <SelectValue placeholder="Select a language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="spanish">Spanish</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50 rounded-b-lg">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Privacy Settings */}
          <TabsContent value="privacy">
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-t-lg">
                <CardTitle className="text-2xl">Privacy Settings</CardTitle>
                <CardDescription className="text-green-100">Manage your privacy preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700">Profile Visibility</Label>
                  <RadioGroup value={privacySettings.profileVisibility} onValueChange={(value) => setPrivacySettings(prev => ({ ...prev, profileVisibility: value }))}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="public" id="public" />
                      <Label htmlFor="public">Public</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="private" id="private" />
                      <Label htmlFor="private">Private</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="activity-status" className="text-sm font-medium text-gray-700">Show Activity Status</Label>
                  <Switch id="activity-status" checked={privacySettings.activityStatus} onCheckedChange={(checked) => setPrivacySettings(prev => ({ ...prev, activityStatus: checked }))} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notification Settings */}
          <TabsContent value="notifications">
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-lg">
                <CardTitle className="text-2xl">Notification Settings</CardTitle>
                <CardDescription className="text-purple-100">Manage how you receive notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                <div className="flex items-center justify-between">
                  <Label htmlFor="email-notifications" className="text-sm font-medium text-gray-700">Email Notifications</Label>
                  <Switch id="email-notifications" checked={notificationSettings.email} onCheckedChange={(checked) => setNotificationSettings(prev => ({ ...prev, email: checked }))} />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="push-notifications" className="text-sm font-medium text-gray-700">Push Notifications</Label>
                  <Switch id="push-notifications" checked={notificationSettings.push} onCheckedChange={(checked) => setNotificationSettings(prev => ({ ...prev, push: checked }))} />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="sms-notifications" className="text-sm font-medium text-gray-700">SMS Notifications</Label>
                  <Switch id="sms-notifications" checked={notificationSettings.sms} onCheckedChange={(checked) => setNotificationSettings(prev => ({ ...prev, sms: checked }))} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Appearance Settings */}
          <TabsContent value="appearance">
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-gray-600 to-gray-900 text-white rounded-t-lg">
                <CardTitle className="text-2xl">Appearance Settings</CardTitle>
                <CardDescription className="text-gray-200">Customize the look and feel of the platform</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                <div className="flex items-center justify-between">
                  <Label htmlFor="theme-switch" className="text-sm font-medium text-gray-700">Dark Mode</Label>
                  <Switch id="theme-switch" checked={user.theme === 'dark'} onCheckedChange={(checked) => handleUserChange('theme', checked ? 'dark' : 'light')} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  )
}
