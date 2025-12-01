import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function HeroSection() {
  const keyOutcomes = [
    "Build real full-stack web apps",
    "Learn modern tools used in 2025",
    "Complete a job-ready portfolio project",
    "Master React, Next.js, TypeScript, APIs, and AI workflows",
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 sm:py-28">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700">
            <span className="mr-2">🚀</span>
            2025 Edition — Now Enrolling
          </div>

          {/* Main Title */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
            Modern Full-Stack Web Development{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Bootcamp
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mb-8 text-lg text-gray-600 sm:text-xl md:text-2xl">
            A modern, job-ready training program using Next.js, React,
            TypeScript, Node.js, Express, MongoDB, Tailwind, shadcn/ui, and AI
            tools.
          </p>

          {/* Key Outcomes */}
          <div className="mb-10 grid gap-3 sm:grid-cols-2 text-left mx-auto max-w-2xl">
            {keyOutcomes.map((outcome, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-green-600 mt-0.5" />
                <span className="text-base text-gray-700 font-medium">
                  {outcome}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="w-full sm:w-auto text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              Enroll Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-lg px-8 py-6 border-2">
              Download Course Syllabus
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-900">20+</span> Graduates
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-900">4.9/5</span> Rating
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-900">85%</span> Job
              Placement
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
