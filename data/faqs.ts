export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "Do I need prior programming experience?",
    answer:
      "No prior experience is required! This bootcamp is designed for complete beginners. We start from the fundamentals and gradually build up to advanced full-stack development. If you can use a computer and are willing to learn, you're ready to start.",
  },
  {
    id: 2,
    question: "What tools and equipment do I need?",
    answer:
      "You'll need a computer (Windows, Mac, or Linux) with at least 8GB RAM, a stable internet connection, and a code editor (we'll guide you through installing VS Code). All software we use is free and open-source. No expensive licenses required.",
  },
  {
    id: 3,
    question: "Is this bootcamp live or pre-recorded?",
    answer:
      "The bootcamp features live, interactive sessions where you can ask questions in real-time and get immediate feedback. All sessions are also recorded so you can review them later at your own pace. You get the best of both worlds: live interaction and flexible learning.",
  },
  {
    id: 4,
    question: "Will I build real projects?",
    answer:
      "Absolutely! You'll complete 50+ hands-on exercises, 10 mini projects throughout the modules, and a comprehensive full-stack SaaS capstone project at the end. By graduation, you'll have a portfolio of real projects to showcase to potential employers.",
  },
  {
    id: 5,
    question: "Will I receive a certificate upon completion?",
    answer:
      "Yes! Upon successfully completing the bootcamp and your capstone project, you'll receive a certificate of completion. More importantly, you'll have a portfolio of real projects and job-ready skills that demonstrate your capabilities to employers.",
  },
  {
    id: 6,
    question: "How much time should I dedicate per week?",
    answer:
      "We recommend dedicating 10-15 hours per week: 2-2.5 hours for live sessions (twice per week) plus 6-10 hours for practice, exercises, and project work. The more time you invest in hands-on practice, the faster you'll progress.",
  },
];
