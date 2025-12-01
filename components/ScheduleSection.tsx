import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Users, Video } from "lucide-react";

export default function ScheduleSection() {
  const scheduleDetails = [
    {
      icon: Calendar,
      label: "Duration",
      value: "14–16 Weeks",
      description: "Complete the bootcamp at your own pace",
    },
    {
      icon: Users,
      label: "Sessions",
      value: "28–32",
      description: "Live interactive sessions with instructor",
    },
    {
      icon: Clock,
      label: "Session Length",
      value: "2–2.5 Hours",
      description: "Twice per week, flexible scheduling",
    },
    {
      icon: Video,
      label: "Total Training",
      value: "60–75 Hours",
      description: "Live instruction + recorded content",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Schedule & Duration
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              A flexible yet structured program designed to fit your schedule
              while ensuring comprehensive learning.
            </p>
          </div>

          {/* Schedule Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {scheduleDetails.map((detail, index) => {
              const Icon = detail.icon;
              return (
                <Card
                  key={index}
                  className="text-center border-2 hover:border-blue-200 transition-colors">
                  <CardHeader className="pb-3">
                    <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
                      <Icon className="h-7 w-7 text-blue-600" />
                    </div>
                    <CardTitle className="text-sm font-medium text-gray-600">
                      {detail.label}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-gray-900 mb-2">
                      {detail.value}
                    </div>
                    <p className="text-sm text-gray-500">
                      {detail.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Info */}
          <Card className="mt-10 bg-gradient-to-r from-blue-50 to-indigo-50 border-0">
            <CardContent className="p-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900">
                    Flexible Learning
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    All live sessions are recorded and available for review.
                    Can`&apos;`t make a session? Watch the recording and submit
                    your questions asynchronously. We understand you have other
                    commitments, so we`&apos;`ve built flexibility into the
                    program.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900">
                    Time Commitment
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Plan for 10-15 hours per week: 4-5 hours for live sessions
                    and 6-10 hours for practice, exercises, and projects. The
                    more time you invest in hands-on coding, the faster
                    you`&apos;`ll progress and the better your results will be.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
