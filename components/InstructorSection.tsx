import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Github } from "lucide-react";

export default function InstructorSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Meet Your Instructor
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Learn from a full-stack engineer with real industry experience, a
              strong background in building modern web applications, and a
              proven record in mentoring and technical consulting.
            </p>
          </div>

          {/* Instructor Card */}
          <Card className="border-2 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-[300px_1fr] gap-0">
                {/* LEFT SIDE */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 flex flex-col items-center justify-center text-center">
                  <Avatar className="h-40 w-40 mb-6 border-4 border-white shadow-lg">
                    <AvatarImage
                      src="/instructor.png"
                      alt="Mahmoud Al Shukri"
                    />
                    <AvatarFallback className="text-3xl">MA</AvatarFallback>
                  </Avatar>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Mahmoud Al Shukri
                  </h3>
                  <p className="text-blue-600 font-medium mb-4">
                    Full-Stack Developer & Technical Consultant
                  </p>

                  {/* Social Links */}
                  <div className="flex gap-3 mb-6">
                    <a
                      href="https://www.linkedin.com/in/ma7moudalshukri"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-600 hover:text-blue-600 transition-colors shadow-sm">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href="https://github.com/mahmoudalshukri"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-600 hover:text-gray-900 transition-colors shadow-sm">
                      <Github className="h-5 w-5" />
                    </a>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="bg-white rounded-lg p-3">
                      <div className="text-2xl font-bold text-blue-600">5+</div>
                      <div className="text-xs text-gray-600">
                        Years Experience
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <div className="text-2xl font-bold text-blue-600">
                        15+
                      </div>
                      <div className="text-xs text-gray-600">
                        Real Projects Delivered
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="p-8">
                  {/* ABOUT */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      About
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Mahmoud is a results-driven full-stack web developer with
                      extensive experience building scalable, modern
                      applications using React.js, Next.js, Node.js, Express,
                      and MongoDB. He is currently working as a Full-Stack
                      Developer at <strong>Zendy</strong>, contributing to
                      production-level features, frontend architecture, API
                      integrations, and improving UI/UX experiences.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      Alongside his core development work, Mahmoud also works as
                      a <strong>Technical Consultant</strong>, helping companies
                      and teams improve their codebase structure, performance,
                      and overall product quality. His experience covers
                      frontend engineering, backend systems, CI/CD pipelines,
                      and scalable architecture.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                      Before joining Zendy, Mahmoud delivered multiple
                      full-stack systems at Metachain Technologies, and built a
                      wide range of applications across e-commerce, healthcare,
                      education, and enterprise platforms. He has mentored
                      students in software development and previously worked
                      with UNICEF programs as a teaching assistant.
                    </p>
                  </div>

                  {/* EXPERTISE */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Next.js</Badge>
                      <Badge variant="secondary">React.js</Badge>
                      <Badge variant="secondary">TypeScript</Badge>
                      <Badge variant="secondary">Node.js</Badge>
                      <Badge variant="secondary">Express.js</Badge>
                      <Badge variant="secondary">MongoDB</Badge>
                      <Badge variant="secondary">Tailwind CSS</Badge>
                      <Badge variant="secondary">REST APIs</Badge>
                      <Badge variant="secondary">System Design</Badge>
                      <Badge variant="secondary">Agile & CI/CD</Badge>
                    </div>
                  </div>

                  {/* PHILOSOPHY */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Teaching Philosophy
                    </h4>
                    <p className="text-gray-700 leading-relaxed italic">
                      “I believe real learning comes from building real
                      projects, solving real problems, and understanding how
                      things work behind the scenes. My goal is to help you
                      become a confident, independent developer capable of
                      creating production-level applications using the latest
                      modern tools.”
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
