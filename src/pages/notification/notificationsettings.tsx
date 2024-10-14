'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"

const formSchema = z.object({
  emailNotifications: z.boolean().default(false),
  pushNotifications: z.boolean().default(false),
  orderUpdates: z.boolean().default(true),
  newsAndOffers: z.boolean().default(false),
  accountActivity: z.boolean().default(true),
})

export default function NotificationSettingsPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailNotifications: false,
      pushNotifications: false,
      orderUpdates: true,
      newsAndOffers: false,
      accountActivity: true,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Notification settings updated",
      description: "Your notification preferences have been saved.",
    })
    console.log(values)
  }

  return (
    <div className="container mx-auto p-4 bg-blue-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-blue-900">Notification Settings</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {[
            { name: "emailNotifications", label: "Email Notifications", description: "Receive notifications via email." },
            { name: "pushNotifications", label: "Push Notifications", description: "Receive push notifications on your devices." },
            { name: "orderUpdates", label: "Order Updates", description: "Receive updates about your orders." },
            { name: "newsAndOffers", label: "News and Offers", description: "Receive news and special offers." },
            { name: "accountActivity", label: "Account Activity", description: "Receive notifications about your account activity." },
          ].map(({ name, label, description }) => (
            <FormField
              key={name}
              control={form.control}
              name={name}
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 rounded-md border border-blue-300 bg-white p-4 shadow-md transition duration-200 hover:shadow-lg">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-blue-800">{label}</FormLabel>
                    <FormDescription className="text-gray-600">{description}</FormDescription>
                  </div>
                </FormItem>
              )}
            />
          ))}
          <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700 transition duration-300">
            Save Settings
          </Button>
        </form>
      </Form>
    </div>
  )
}
