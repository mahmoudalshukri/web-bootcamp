import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, RefreshCw, Briefcase, Layers } from "lucide-react";

export default function TargetAudienceSection() {
  const audiences = [
    {
      icon: GraduationCap,
      title: "Complete Beginners",
      description:
        "New to programming and want to start a career in web development. We teach you everything from scratch with no assumptions about prior knowledge.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: RefreshCw,
      title: "Developers Upgrading",
      description:
        "Already know older technologies like jQuery or Bootstrap and want to modernize your skills with React, Next.js, and TypeScript.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Briefcase,
      title: "Job Seekers",
      description:
        "Looking to break into tech or switch careers. Build a portfolio of real projects and gain the practical skills employers are actively hiring for.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Layers,
      title: "Full-Stack Learners",
      description:
        "Want to master both frontend and backend development to build complete web applications independently from concept to deployment.",
      color: "bg-orange-100 text-orange-600",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Who Is This Bootcamp For?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Whether you`&apos;`re starting from zero or leveling up your
              existing skills, this bootcamp is designed to help you achieve
              your goals.
            </p>
          </div>

          {/* Audience Grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {audiences.map((audience, index) => {
              const Icon = audience.icon;
              return (
                <Card
                  key={index}
                  className="border-2 hover:border-blue-200 transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className={`rounded-lg ${audience.color} p-3`}>
                        <Icon className="h-7 w-7" />
                      </div>
                      <CardTitle className="text-xl">
                        {audience.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {audience.description}
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
