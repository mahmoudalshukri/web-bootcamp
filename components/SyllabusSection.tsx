import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { syllabusModules } from "@/data/syllabus";
import { CheckCircle2 } from "lucide-react";

export default function SyllabusSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Complete Course Syllabus
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              13 comprehensive modules taking you from zero to full-stack
              developer. Click each module to see detailed topics covered.
            </p>
          </div>

          {/* Syllabus Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {syllabusModules.map((module) => (
              <AccordionItem
                key={module.id}
                value={`module-${module.id}`}
                className="border-2 rounded-lg bg-white px-6 shadow-sm hover:shadow-md transition-shadow">
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <div className="flex items-start gap-4 pr-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
                      {module.id}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {module.title}
                      </h3>
                      <p className="text-sm text-gray-600 font-normal">
                        {module.description}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-5">
                  <div className="ml-12 space-y-2">
                    <p className="text-sm font-semibold text-gray-700 mb-3">
                      Topics Covered:
                    </p>
                    <ul className="space-y-2">
                      {module.topics.map((topic, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-600 mt-0.5" />
                          <span className="text-gray-700">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Call to Action */}
          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-4">
              Want the complete syllabus with project details?
            </p>
            <button className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition-colors">
              Download Full Syllabus PDF
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
