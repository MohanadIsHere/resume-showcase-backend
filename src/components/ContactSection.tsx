import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Get In Touch
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  I'm always interested in discussing new opportunities, 
                  challenging projects, and innovative ideas. Whether you're 
                  looking for a backend developer or want to collaborate on 
                  something exciting, I'd love to hear from you.
                </p>
              </div>
              
              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-professional-light rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-professional" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">alex.johnson@email.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-professional-light rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-professional" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-professional-light rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-professional" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Location</h4>
                    <p className="text-muted-foreground">San Francisco, CA</p>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-professional text-professional hover:bg-professional hover:text-professional-foreground"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-professional text-professional hover:bg-professional hover:text-professional-foreground"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-professional text-professional hover:bg-professional hover:text-professional-foreground"
                  >
                    <Twitter className="w-5 h-5 mr-2" />
                    Twitter
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <Card className="bg-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-foreground">Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <Input 
                        id="firstName" 
                        placeholder="John" 
                        className="border-border focus:ring-professional focus:border-professional"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <Input 
                        id="lastName" 
                        placeholder="Doe" 
                        className="border-border focus:ring-professional focus:border-professional"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john.doe@example.com"
                      className="border-border focus:ring-professional focus:border-professional"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input 
                      id="subject" 
                      placeholder="Project Collaboration"
                      className="border-border focus:ring-professional focus:border-professional"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell me about your project or what you'd like to discuss..."
                      rows={5}
                      className="border-border focus:ring-professional focus:border-professional"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-professional hover:bg-professional-dark text-professional-foreground"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};