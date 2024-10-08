import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  const faqs = [
    {
      question: "How do I create an account?",
      answer: "To create an account, click on the 'Sign Up' button in the top right corner of the page. Fill in your details, including your name, email address, and password. Once you've submitted the form, you'll receive a confirmation email. Click the link in the email to verify your account, and you're all set!"
    },
    {
      question: "How do I list an item for sale?",
      answer: "To list an item, first ensure you're logged in. Then, click on the 'Sell' button in the navigation bar. Fill out the listing form with details about your item, including title, description, price, and category. Don't forget to add some high-quality photos! Once you're satisfied, click 'Submit Listing' and your item will be live on Space Sell."
    },
    {
      question: "How does shipping work for interplanetary sales?",
      answer: "For interplanetary sales, we partner with leading space logistics companies to ensure safe and timely delivery. Shipping costs and delivery times vary depending on the origin and destination planets, as well as the size and weight of the item. During checkout, you'll see the available shipping options and estimated delivery times."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept a variety of payment methods including Earth currencies (USD, EUR, JPY, etc.), as well as popular cryptocurrencies. For interplanetary transactions, we also accept Universal Credits (UC). All payments are processed securely through our platform."
    },
    {
      question: "What is your return policy?",
      answer: "Our return policy allows for returns within 30 Earth days of delivery for most items, as long as they're in their original condition. Due to the complexities of interplanetary shipping, return shipping costs are the responsibility of the buyer unless the item was damaged or not as described. Please contact our customer support team to initiate a return."
    },
    {
      question: "How do I contact customer support?",
      answer: "You can reach our customer support team through the 'Contact Us' page on our website. We also offer 24/7 holographic support for urgent issues. For general inquiries, you can email us at support@spacesell.com or use our AI chatbot available on every page."
    }
  ]
  
  export default function HelpFAQPage() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Help & FAQ</h1>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    )
  }