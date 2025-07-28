import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Server, Database, Cloud, Code, Shield, Zap } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: { name: string; level: number }[];
}

interface TechStack {
  category: string;
  technologies: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Backend Development",
    icon: <Server className="w-6 h-6" />,
    skills: [
      { name: "Node.js / Express", level: 95 },
      { name: "Python / Django", level: 90 },
      { name: "PHP / Laravel", level: 85 },
      { name: "Java / Spring", level: 80 }
    ]
  },
  {
    title: "Databases",
    icon: <Database className="w-6 h-6" />,
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "MySQL", level: 88 },
      { name: "MongoDB", level: 85 },
      { name: "Redis", level: 82 }
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-6 h-6" />,
    skills: [
      { name: "AWS", level: 85 },
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 75 },
      { name: "CI/CD", level: 80 }
    ]
  }
];

const techStacks: TechStack[] = [
  {
    category: "Languages",
    technologies: ["JavaScript", "TypeScript", "Python", "PHP", "Java", "Go", "SQL"]
  },
  {
    category: "Frameworks",
    technologies: ["Express.js", "Django", "Laravel", "Spring Boot", "FastAPI", "Gin"]
  },
  {
    category: "Databases",
    technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "DynamoDB"]
  },
  {
    category: "Tools & Services",
    technologies: ["Docker", "Kubernetes", "AWS", "Git", "Jenkins", "Nginx", "RabbitMQ", "Apache Kafka"]
  },
  {
    category: "Testing",
    technologies: ["Jest", "PyTest", "PHPUnit", "Postman", "Artillery", "LoadRunner"]
  }
];

export const SkillsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Technical Skills
          </h2>
          
          {/* Skill Progress Bars */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="bg-card border-border shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-foreground">
                    <div className="p-2 bg-professional-light rounded-lg text-professional">
                      {category.icon}
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, i) => (
                      <div key={i}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium text-foreground">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Technology Stack */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-center text-foreground mb-8">
              Technology Stack
            </h3>
            
            {techStacks.map((stack, index) => (
              <div key={index} className="text-center">
                <h4 className="text-lg font-semibold mb-4 text-professional flex items-center justify-center gap-2">
                  {stack.category === "Languages" && <Code className="w-5 h-5" />}
                  {stack.category === "Tools & Services" && <Zap className="w-5 h-5" />}
                  {stack.category === "Testing" && <Shield className="w-5 h-5" />}
                  {stack.category}
                </h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {stack.technologies.map((tech, i) => (
                    <Badge 
                      key={i} 
                      variant="outline" 
                      className="border-professional text-professional hover:bg-professional hover:text-professional-foreground transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};