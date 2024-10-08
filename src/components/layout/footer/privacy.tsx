import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>1. Information We Collect</CardTitle>
        </CardHeader>
        <CardContent>
          <p>We collect information you provide directly to us, such as when you create or modify your account, request on-demand services, contact customer support, or otherwise communicate with us. This information may include: name, email, phone number, postal address, profile picture, payment method, items and services requested, delivery information, and other information you choose to provide.</p>
        </CardContent>
      </Card>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>2. How We Use Your Information</CardTitle>
        </CardHeader>
        <CardContent>
          <p>We may use the information we collect about you to:</p>
          <ul className="list-disc list-inside mt-2">
            <li>Provide, maintain, and improve our services</li>
            <li>Process and complete transactions, and send you related information</li>
            <li>Send you technical notices, updates, security alerts, and support and administrative messages</li>
            <li>Respond to your comments, questions, and requests, and provide customer service</li>
            <li>Communicate with you about products, services, offers, promotions, rewards, and events</li>
            <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
          </ul>
        </CardContent>
      </Card>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>3. Sharing of Information</CardTitle>
        </CardHeader>
        <CardContent>
          <p>We may share the information we collect about you as described in this policy or as disclosed at the time of collection or sharing, including as follows:</p>
          <ul className="list-disc list-inside mt-2">
            <li>With vendors, consultants, and other service providers who need access to such information to carry out work on our behalf</li>
            <li>In response to a request for information if we believe disclosure is in accordance with, or required by, any applicable law, regulation, or legal process</li>
            <li>If we believe your actions are inconsistent with our user agreements or policies, or to protect the rights, property, and safety of Space Sell or others</li>
          </ul>
        </CardContent>
      </Card>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>4. Security</CardTitle>
        </CardHeader>
        <CardContent>
          <p>We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration, and destruction. However, no internet or electronic communications system is entirely secure, and we cannot guarantee the absolute security of your information.</p>
        </CardContent>
      </Card>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>5. Your Choices</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Account Information: You may update, correct, or delete information about you at any time by logging into your online account or by contacting us. If you wish to delete or deactivate your account, please email us, but note that we may retain certain information as required by law or for legitimate business purposes.</p>
        </CardContent>
      </Card>
      <p className="text-sm text-gray-500 text-center">Last updated: June 15, 2045</p>
    </div>
  )
}