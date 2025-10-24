import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";
import { teamMembers } from "@/data/team";
import { Helmet } from "react-helmet-async";

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Meet Our Team | DevOps Architects & Engineers | Target-Ops</title>
        <meta name="description" content="Meet our founding team: Hagay, Ofir, and Vladi. DevOps architects and infrastructure engineers with experience at startups and enterprises. AWS, GCP, Azure specialists." />
        <meta property="og:title" content="Meet Our Team | Target-Ops" />
        <meta property="og:description" content="DevOps architects and infrastructure engineers with decades of experience helping companies scale." />
        <link rel="canonical" href="https://target-ops.io/team" />
      </Helmet>
      <Navigation />
      <main className="pt-16">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-2 bg-gradient-primary bg-clip-text text-transparent">
                Meet Our Team
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
                The experts driving DevOps excellence at Target-Ops. Our team brings decades of combined experience 
                in cloud technologies, automation, and enterprise solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {teamMembers.map((member) => (
                <Card key={member.id} className="bg-surface-elevated border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex justify-center mb-6">
                      <div className="relative group">
                        <img 
                          src={member.avatar} 
                          alt={member.name}
                          className="h-32 w-32 rounded-full object-cover ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-center mb-2">{member.name}</h3>
                    <p className="text-primary font-semibold text-center mb-2">{member.title}</p>
                    <p className="text-sm text-muted-foreground text-center italic mb-4">"{member.tagline}"</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-sm">
                      {member.bio}
                    </p>
                    
                    <div className="flex justify-center space-x-3 pt-6 mt-6 border-t border-border">
                      {member.social?.github && (
                        <Button variant="ghost" size="sm" asChild>
                          <a href={member.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <Github className="h-5 w-5" />
                          </a>
                        </Button>
                      )}
                      <Button variant="ghost" size="sm" asChild>
                        <a href="mailto:hello@target-ops.io" aria-label="Email">
                          <Mail className="h-5 w-5" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center bg-surface-elevated p-6 sm:p-8 rounded-lg border border-border">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 px-2">Join Our Team</h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 px-2">
                We're always looking for top talent to join our mission of delivering DevOps excellence. 
                If you're passionate about cloud technologies and automation, we'd love to hear from you.
              </p>
              <Button>
                <Mail className="h-4 w-4 mr-2" />
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;