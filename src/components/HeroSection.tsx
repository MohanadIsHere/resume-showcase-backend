import { Button } from "@/components/ui/button";
import { Download, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import profilePhoto from "@/assets/profile-photo.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Photo */}
          <div className="mb-8">
            <img
              src={profilePhoto}
              alt="Alex Johnson"
              className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-professional shadow-professional"
            />
          </div>
          
          {/* Main Info */}
          <h1 className="text-5xl font-bold mb-4 text-foreground">
            Alex Johnson
          </h1>
          <h2 className="text-2xl font-semibold mb-6 text-professional">
            Senior Backend Developer
          </h2>
          <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Experienced backend developer specializing in scalable microservices, 
            cloud architecture, and high-performance APIs. Passionate about clean code 
            and robust system design.
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>alex.johnson@email.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>San Francisco, CA</span>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-professional hover:bg-professional-dark text-professional-foreground"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
            <Button variant="outline" size="lg">
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4 mt-8">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-professional">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-professional">
              <Linkedin className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};