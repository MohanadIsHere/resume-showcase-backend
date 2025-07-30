import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Senior Backend Developer",
    company: "TechCorp Solutions",
    period: "2022 - Present",
    description: [
      "Led development of microservices architecture serving 1M+ daily active users",
      "Designed and implemented RESTful APIs with 99.9% uptime using Node.js and Express",
      "Optimized database queries resulting in 40% performance improvement",
      "Mentored junior developers and conducted code reviews",
    ],
    technologies: [
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Docker",
      "AWS",
    ],
  },
  {
    title: "Backend Developer",
    company: "StartupXYZ",
    period: "2020 - 2022",
    description: [
      "Built scalable backend services for e-commerce platform handling $10M+ transactions",
      "Implemented real-time payment processing system with Stripe integration",
      "Developed automated testing suite achieving 95% code coverage",
      "Collaborated with frontend team to design efficient API contracts",
    ],
    technologies: ["Python", "Django", "MySQL", "Celery", "Docker", "GCP"],
  },
  {
    title: "Junior Backend Developer",
    company: "WebDev Agency",
    period: "2018 - 2020",
    description: [
      "Developed RESTful APIs for various client projects using Laravel",
      "Implemented authentication and authorization systems",
      "Optimized database schemas and queries for better performance",
      "Participated in agile development process and daily standups",
    ],
    technologies: ["PHP", "Laravel", "MySQL", "Redis", "Linux"],
  },
];

export const ExperienceSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Work Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="bg-card border-border shadow-card hover:shadow-professional transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-foreground">
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2 text-professional font-medium mt-1">
                        <Building className="w-4 h-4" />
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <span className="w-2 h-2 bg-professional rounded-full mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-professional-light text-professional-dark"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
