import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsAndConditionsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Terms & Conditions</h1>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>1. Acceptance of Terms</CardTitle>
        </CardHeader>
        <CardContent>
          <p>By accessing and using Space Sell, you accept and agree to be bound by the terms and provision of this agreement. Additionally, when using Space Sell's services, you shall be subject to any posted guidelines or rules applicable to such services.</p>
        </CardContent>
      </Card>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>2. Description of Service</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Space Sell provides users with access to an interplanetary marketplace for buying and selling goods and services. You understand and agree that the service is provided "AS-IS" and that Space Sell assumes no responsibility for the timeliness, deletion, mis-delivery or failure to store any user communications or personalization settings.</p>
        </CardContent>
      </Card>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>3. Registration Obligations</CardTitle>
        </CardHeader>
        <CardContent>
          <p>In consideration of your use of Space Sell, you agree to: (a) provide true, accurate, current and complete information about yourself as prompted by the service's registration form and (b) maintain and promptly update the registration data to keep it true, accurate, current and complete.</p>
        </CardContent>
      </Card>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>4. User Conduct</CardTitle>
        </CardHeader>
        <CardContent>
          <p>You agree not to use the service to:</p>
          <ul className="list-disc list-inside mt-2">
            <li>Upload, post or otherwise transmit any content that is unlawful, harmful, threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, libelous, invasive of another's privacy, hateful, or racially, ethnically or otherwise objectionable;</li>
            <li>Harm minors in any way;</li>
            <li>Impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with a person or entity;</li>
            <li>Upload, post or otherwise transmit any content that you do not have a right to transmit under any law or under contractual or fiduciary relationships;</li>
            <li>Upload, post or otherwise transmit any material that contains software viruses or any other computer code, files or programs designed to interrupt, destroy or limit the functionality of any computer software or hardware or telecommunications equipment;</li>
          </ul>
        </CardContent>
      </Card>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>5. International Use</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Recognizing the global nature of the Internet and interplanetary commerce, you agree to comply with all local rules regarding online conduct and acceptable content. Specifically, you agree to comply with all applicable laws regarding the transmission of technical data exported from Earth or the country in which you reside.</p>
        </CardContent>
      </Card>
      <p className="text-sm text-gray-500 text-center">Last updated: June 15, 2045</p>
    </div>
  )
}