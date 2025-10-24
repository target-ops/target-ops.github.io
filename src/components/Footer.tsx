import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MessageCircle, Send } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "About", href: "/about" },
    { name: "Solutions", href: "/solutions" },
    { name: "Open Source", href: "/open-source" },
    { name: "Articles", href: "/articles" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ];

  const solutions = [
    { name: "DevOps Consulting", href: "/solutions#devops" },
    { name: "Cloud Migration", href: "/solutions#cloud" },
    { name: "Infrastructure Automation", href: "/solutions#automation" },
    { name: "CI/CD Pipelines", href: "/solutions#cicd" },
    { name: "Security & Compliance", href: "/solutions#security" },
  ];

  return (
    <footer className="bg-surface-elevated border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 col-span-1">
            <Link to="/" className="inline-block mb-4 sm:mb-6">
              <img 
                src="/assets/targetOpsBlackNOBG-FULL.webp" 
                alt="Target-Ops Logo" 
                className="h-10 sm:h-12 w-auto"
              />
            </Link>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-md">
              Empowering startups and enterprises to achieve DevOps excellence through 
              tailored solutions, automation, and continuous innovation.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <Button variant="ghost" size="sm" asChild>
                <a href="https://github.com/target-ops" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://www.linkedin.com/company/target-ops" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://join.slack.com/t/target-ops/shared_invite/zt-2kxdr9djp-YoQSCoRzARa9psxO8aYoaQ" target="_blank" rel="noopener noreferrer" aria-label="Slack Community">
                  <MessageCircle className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://t.me/targetops" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                  <Send className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://dev.to/target-ops" target="_blank" rel="noopener noreferrer" aria-label="Dev.to Blog">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links & Solutions - Side by Side on Mobile */}
          <div className="col-span-1 lg:col-span-2 grid grid-cols-2 gap-6 sm:gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4 sm:mb-6 text-sm sm:text-base">Quick Links</h3>
              <ul className="space-y-2 sm:space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-xs sm:text-sm md:text-base text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="font-semibold text-foreground mb-4 sm:mb-6 text-sm sm:text-base">Solutions</h3>
              <ul className="space-y-2 sm:space-y-3">
                {solutions.map((solution) => (
                  <li key={solution.name}>
                    <Link
                      to={solution.href}
                      className="text-xs sm:text-sm md:text-base text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {solution.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
            <p className="text-muted-foreground text-xs sm:text-sm text-center sm:text-left">
              © 2024 Target-Ops. All rights reserved.
            </p>
            <div className="flex space-x-4 sm:space-x-6">
              <Link to="/privacy" className="text-muted-foreground hover:text-primary text-xs sm:text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-primary text-xs sm:text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;