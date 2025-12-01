import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Ban, Route, Github, Brain, Rocket } from "lucide-react";

export default function DifferentiatorSection() {
  const differentiators = [
    {
      icon: Sparkles,
      title: "Most Modern Tools",
      description:
        "Learn Next.js 14 with App Router, React Server Components, TypeScript, Tailwind CSS, and shadcn/ui — the exact stack used by leading tech companies in 2025.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Ban,
      title: "No Outdated Technologies",
      description:
        "We skip legacy tools like Bootstrap and jQuery. Every technology you learn is current, relevant, and in-demand by employers right now.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Route,
      title: "Logical Learning Journey",
      description:
        "Our curriculum follows a carefully designed progression from fundamentals to advanced concepts, ensuring you build a solid foundation before tackling complex topics.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Github,
      title: "GitHub & Portfolio Focus",
      description:
        "Every project goes on GitHub. Learn professional version control, collaboration workflows, and build a portfolio that impresses recruiters and hiring managers.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Brain,
      title: "AI-Powered Development",
      description:
        "Master cutting-edge AI tools like MGX, Figma Make, ChatGPT, and GitHub Copilot to boost your productivity and build applications faster than ever.",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: Rocket,
      title: "Full-Stack SaaS Capstone",
      description:
        "Your final project is a complete, production-ready SaaS application with authentication, database, payments, and deployment — a true portfolio centerpiece.",
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              What Makes This Bootcamp Unique?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              We`&apos;`ve designed this program to give you real-world skills
              that employers actually want, using the most modern tools and best
              practices.
            </p>
          </div>

          {/* Differentiators Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="border-2 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div
                      className={`mb-3 inline-flex rounded-lg bg-gradient-to-r ${item.gradient} p-3`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
