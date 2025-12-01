import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, TrendingUp, Target, Code } from "lucide-react";

export default function OverviewSection() {
  const stats = [
    {
      icon: Calendar,
      label: "Duration",
      value: "14–16 Weeks",
      description: "Flexible pacing",
    },
    {
      icon: Target,
      label: "Sessions",
      value: "28–32",
      description: "Live sessions",
    },
    {
      icon: Clock,
      label: "Total Hours",
      value: "60–75",
      description: "Training hours",
    },
    {
      icon: TrendingUp,
      label: "Level",
      value: "Beginner → Job-Ready",
      description: "Complete transformation",
    },
    {
      icon: Code,
      label: "Practical Work",
      value: "50+ Exercises",
      description: "10 mini projects + 1 capstone",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Bootcamp Overview
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              A comprehensive, structured program designed to take you from
              beginner to job-ready full-stack developer in just 14-16 weeks.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="border-2 hover:border-blue-200 transition-colors">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-blue-100 p-2">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-sm font-medium text-gray-600">
                        {stat.label}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {stat.value}
                    </div>
                    <p className="text-sm text-gray-500">{stat.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Vision Statement */}
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-0">
            <CardContent className="p-8">
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Our Vision
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                This bootcamp is designed to bridge the gap between learning to
                code and becoming a professional developer. We focus exclusively
                on modern, industry-standard tools and practices used in 2025.
                You`&apos;`ll gain hands-on experience building real
                applications, learn to think like a developer, and create a
                portfolio that showcases your abilities to potential employers.
                By the end of this program, you`&apos;`ll have the confidence
                and skills to land your first developer role or build your own
                web applications from scratch.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
