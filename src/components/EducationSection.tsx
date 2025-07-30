import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, BookOpen, Calendar } from "lucide-react";

interface Education {
  institution: string;
  period: string;
  highlights: string[];
  degree?: string;
  description?: string;
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
}

const education: Education[] = [
  {
    institution: "Victory College",
    period: "KG2 - Grade 7",
    highlights: [],
  },
  {
    institution: "Malak Hefny Language School",
    period: "Grade 8 - Grade 9",
    highlights: [],
  },
  {
    institution: "Al-Saghr Language School",
    period: "Grade 10 - Present",
    highlights: [],
  },
];

const certifications: Certification[] = [
  {
    name: "Flutter Development Course",
    issuer: "Route IT Training Center",
    date: "2024",
  },
  {
    name: "Node.js Backend Development Course",
    issuer: "Route IT Training Center",
    date: "2025",
  },
];

export const EducationSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Education & Certifications
          </h2>

          {/* Education */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-foreground flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-professional" />
              Education
            </h3>

            {education.map((edu, index) => (
              <Card key={index} className="bg-card border-border shadow-card">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      {edu.degree && (
                        <CardTitle className="text-xl text-foreground">
                          {edu.degree}
                        </CardTitle>
                      )}
                      <CardDescription className="flex items-center gap-2 text-professional font-medium mt-1">
                        <BookOpen className="w-4 h-4" />
                        {edu.institution}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{edu.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {edu.description && (
                    <p className="text-muted-foreground mb-4">
                      {edu.description}
                    </p>
                  )}
                  {edu.highlights.length > 0 && (
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-muted-foreground"
                        >
                          <span className="w-2 h-2 bg-professional rounded-full mt-2 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground flex items-center gap-2">
              <Award className="w-6 h-6 text-professional" />
              Professional Certifications
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="bg-card border-border shadow-card hover:shadow-professional transition-shadow duration-300"
                >
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground">
                      {cert.name}
                    </CardTitle>
                    <CardDescription className="text-professional font-medium">
                      {cert.issuer}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <Badge
                        variant="outline"
                        className="border-professional text-professional"
                      >
                        Issued {cert.date}
                      </Badge>
                      {cert.credentialId && (
                        <span className="text-sm text-muted-foreground">
                          ID: {cert.credentialId}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
