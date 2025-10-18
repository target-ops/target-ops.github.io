import { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import AnimatedLogo, { AnimatedLogoRef } from "./AnimatedLogo";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const logoRef = useRef<AnimatedLogoRef>(null);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Solutions", href: "/solutions" },
    { name: "Open Source", href: "/open-source" },
    { name: "Articles", href: "/articles" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group logo-container">
            <AnimatedLogo ref={logoRef} />
            <div 
              className="flex flex-col cursor-pointer"
              onMouseEnter={() => logoRef.current?.playRandomAnimation()}
            >
              <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                Target-Ops
              </span>
              <span className="text-xs text-muted-foreground -mt-1">
                DevOps Excellence
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              // Special styling for Contact button
              if (item.name === "Contact") {
                return (
                  <Link key={item.name} to={item.href}>
                    <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
                      {item.name}
                    </Button>
                  </Link>
                );
              }
              // Regular nav items
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.href) ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => {
                // Special styling for Contact button on mobile
                if (item.name === "Contact") {
                  return (
                    <div key={item.name} className="px-3 py-2">
                      <Link to={item.href} onClick={() => setIsOpen(false)}>
                        <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
                          {item.name}
                        </Button>
                      </Link>
                    </div>
                  );
                }
                // Regular nav items
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-3 py-2 text-base font-medium transition-colors ${
                      isActive(item.href)
                        ? "text-primary bg-surface-elevated"
                        : "text-muted-foreground hover:text-primary hover:bg-surface-hover"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;