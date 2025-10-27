import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, BookOpen, ExternalLink } from "lucide-react";
import { articles } from "@/data/articles";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Articles = () => {
  // Sort articles by date (newest first)
  const sortedArticles = [...articles].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>DevOps Articles & Tutorials | Kubernetes, Cloud, CI/CD | Target-Ops</title>
        <meta name="description" content="DevOps tutorials, Kubernetes guides, cloud migration strategies, and infrastructure automation best practices from Target-Ops engineers. Updated weekly with hands-on tutorials." />
        <meta property="og:title" content="DevOps Articles & Tutorials | Target-Ops" />
        <meta property="og:description" content="Learn DevOps from expert engineers: Kubernetes tutorials, cloud migration strategies, and infrastructure automation best practices." />
        <link rel="canonical" href="https://target-ops.io/articles" />
      </Helmet>
      <Navigation />
      <main className="relative pt-16">
        {/* Animated background - same as other pages */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background"></div>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(99, 102, 241, 0.05) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        ></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-tech-cyan/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        {/* Hero Section */}
        <section className="relative py-24 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <BookOpen className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">DevOps Knowledge Base</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Learn From the Experts
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-world DevOps insights, battle-tested strategies, and hands-on tutorials from engineers who've deployed at scale. New articles every week.
            </p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="relative py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">Latest Articles</h2>
              <span className="text-sm text-muted-foreground">{articles.length} articles</span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedArticles.map((article) => (
                <Card key={article.id} className="bg-background/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow/20 group">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <CardTitle className="text-xl line-clamp-2 group-hover:text-primary transition-colors">{article.title}</CardTitle>
                    <CardDescription className="text-muted-foreground line-clamp-3">
                      {article.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full group-hover:border-primary group-hover:text-primary transition-colors" asChild>
                      <Link to={`/articles/${article.id}`}>
                        Read Article
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-background/50 backdrop-blur-sm border-border p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We publish new DevOps insights, tutorials, and best practices every week. Follow us on dev.to to never miss an update.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-glow" asChild>
                  <a href="https://dev.to/target-ops" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Follow on dev.to
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://github.com/target-ops" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Star on GitHub
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Articles;