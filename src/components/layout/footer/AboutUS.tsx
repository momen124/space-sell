import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutUsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">About Space Sell</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p>At Space Sell, we're on a mission to revolutionize interplanetary commerce. We provide a platform for individuals and businesses to buy, sell, and trade goods and services across the solar system.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Our Story</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Founded in 2045 by a group of visionary astronauts and entrepreneurs, Space Sell began as a small marketplace for trading surplus equipment between space stations. Today, we're the leading e-commerce platform for the space age.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Our Team</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Our diverse team includes experts in space technology, logistics, and e-commerce. With offices on Earth, Mars, and the Moon, we're truly a multi-planetary operation.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Our Future</CardTitle>
          </CardHeader>
          <CardContent>
            <p>As humanity expands further into space, Space Sell will be there every step of the way. We're constantly innovating to meet the unique challenges of interplanetary trade and commerce.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}