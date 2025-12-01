import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";

export default function FAQSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Got questions? We`&apos;`ve got answers. If you don`&apos;`t see
              your question here, feel free to reach out to us.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={`faq-${faq.id}`}
                className="border-2 rounded-lg bg-gray-50 px-6 hover:bg-white transition-colors">
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-5">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <a
              href="mailto:info@bootcamp.com"
              className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors">
              Contact us at ma7moud.alshukri@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
