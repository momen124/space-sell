import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { useEffect, useState } from 'react'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

// Mock data for the dashboard
const mockData = {
  users: 15234,
  listings: 8765,
  reviews: 42198,
  sales: 3567,
  recentActivity: [
    { date: '2045-06-01', users: 14980, listings: 8600, sales: 3500 },
    { date: '2045-06-02', users: 15050, listings: 8650, sales: 3520 },
    { date: '2045-06-03', users: 15120, listings: 8700, sales: 3540 },
    { date: '2045-06-04', users: 15180, listings: 8730, sales: 3555 },
    { date: '2045-06-05', users: 15234, listings: 8765, sales: 3567 },
  ]
}

export default function AdminDashboardPage() {
  const [data, setData] = useState(mockData)

  useEffect(() => {
    // In a real app, you would fetch this data from your API
    setData(mockData)
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.users.toLocaleString()}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Listings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.listings.toLocaleString()}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.reviews.toLocaleString()}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.sales.toLocaleString()}</div>
          </CardContent>
        </Card>
      </div>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              users: {
                label: "Users",
                color: "hsl(var(--chart-1))",
              },
              listings: {
                label: "Listings",
                color: "hsl(var(--chart-2))",
              },
              sales: {
                label: "Sales",
                color: "hsl(var(--chart-3))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data.recentActivity}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line type="monotone" dataKey="users" stroke="var(--color-users)" name="Users" />
                <Line type="monotone" dataKey="listings" stroke="var(--color-listings)" name="Listings" />
                <Line type="monotone" dataKey="sales" stroke="var(--color-sales)" name="Sales" />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}