import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Users, Zap, Shield } from "lucide-react";

interface Project {
  title: string;
  description: string;
  highlights: string[];
  technologies: string[];
  metrics?: string;
  type: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Microservices Platform",
    description: "Scalable microservices architecture for a high-traffic e-commerce platform handling millions of transactions daily.",
    highlights: [
      "Designed 12 microservices with clear API contracts",
      "Implemented event-driven architecture with Apache Kafka",
      "Achieved 99.9% uptime with zero-downtime deployments",
      "Reduced response time by 60% through caching strategies"
    ],
    technologies: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "Docker", "Kubernetes", "Apache Kafka", "AWS"],
    metrics: "1M+ daily transactions",
    type: "Architecture"
  },
  {
    title: "Real-time Analytics API",
    description: "High-performance API serving real-time analytics data for business intelligence dashboards.",
    highlights: [
      "Built streaming data pipeline processing 100K events/second",
      "Implemented sophisticated caching with Redis clusters",
      "Created automated data aggregation jobs",
      "Designed efficient time-series data storage"
    ],
    technologies: ["Python", "FastAPI", "ClickHouse", "Redis", "Apache Kafka", "Docker", "GCP"],
    metrics: "100K events/second",
    type: "API"
  },
  {
    title: "Multi-tenant SaaS Backend",
    description: "Secure and scalable backend infrastructure for a B2B SaaS application with multi-tenant architecture.",
    highlights: [
      "Implemented row-level security for data isolation",
      "Built comprehensive role-based access control",
      "Created automated backup and disaster recovery",
      "Developed tenant-specific customization engine"
    ],
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Docker", "AWS", "Terraform"],
    metrics: "500+ enterprise clients",
    type: "SaaS"
  },
  {
    title: "Payment Processing System",
    description: "Robust payment processing system with multiple gateway integrations and fraud detection.",
    highlights: [
      "Integrated with 5+ payment gateways (Stripe, PayPal, etc.)",
      "Implemented ML-based fraud detection algorithms",
      "Built comprehensive audit logging system",
      "Achieved PCI DSS compliance"
    ],
    technologies: ["Node.js", "Express", "MongoDB", "Redis", "Docker", "AWS Lambda", "Stripe API"],
    metrics: "$10M+ processed",
    type: "FinTech"
  }
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case "Architecture":
      return <Zap className="w-4 h-4" />;
    case "API":
      return <ExternalLink className="w-4 h-4" />;
    case "SaaS":
      return <Users className="w-4 h-4" />;
    case "FinTech":
      return <Shield className="w-4 h-4" />;
    default:
      return <ExternalLink className="w-4 h-4" />;
  }
};

export const ProjectsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Featured Projects
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-card border-border shadow-card hover:shadow-professional transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-foreground group-hover:text-professional transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="mt-2 text-muted-foreground">
                        {project.description}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="border-professional text-professional">
                        <div className="flex items-center gap-1">
                          {getTypeIcon(project.type)}
                          {project.type}
                        </div>
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  {/* Metrics */}
                  {project.metrics && (
                    <div className="mb-4">
                      <Badge className="bg-professional-light text-professional-dark">
                        📊 {project.metrics}
                      </Badge>
                    </div>
                  )}
                  
                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-professional rounded-full mt-2 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                    <Button size="sm" className="flex-1 bg-professional hover:bg-professional-dark">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
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