import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What's included in the Starter plan?",
    answer:
      "The Starter plan includes basic TikTok Shop setup, a monthly content calendar, 2 creator collaborations, basic analytics reporting, and email support. It's perfect for small businesses just starting their TikTok journey.",
  },
  {
    question: "How does the Growth plan differ from the Starter plan?",
    answer:
      "The Growth plan offers more advanced features, including advanced TikTok Shop management, a weekly content calendar, 5 creator collaborations, an advanced analytics dashboard, priority support, and strategy consulting sessions. It's ideal for businesses ready to scale their TikTok presence.",
  },
  {
    question: "What does the Enterprise plan offer?",
    answer:
      "The Enterprise plan is our most comprehensive offering, with full TikTok Shop management, daily content optimization, unlimited creator collaborations, custom analytics and reporting, 24/7 dedicated support, monthly strategy reviews, and custom integration support. It's designed for established brands requiring extensive management.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle. Please contact our support team for assistance with plan changes.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "We don't currently offer a free trial, but we do offer a 30-day money-back guarantee on our Starter and Growth plans. If you're not satisfied with our services, you can request a full refund within the first 30 days.",
  },
]

export function PricingFAQ() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

