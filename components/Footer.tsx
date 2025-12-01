import { Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">
              Modern Full-Stack Web Development Bootcamp
            </h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Transform your career with our comprehensive, job-ready training
              program. Learn the most modern web development tools and build
              real projects.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/ma7moudalshukri/"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white transition-colors"
                aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/mahmoudalshukri/"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white transition-colors"
                aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Course Syllabus
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:ma7moud.alshukri@gmail.com"
                  className="hover:text-white transition-colors">
                  ma7moud.alshukri@gmail.com
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Support Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Schedule a Call
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Career Services
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} Modern Full-Stack Web Development Bootcamp. All
              rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
