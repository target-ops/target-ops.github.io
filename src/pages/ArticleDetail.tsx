import { useParams, Link, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, User, ArrowLeft, ArrowRight } from "lucide-react";
import { articles } from "@/data/articles";
import { Helmet } from "react-helmet-async";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import "highlight.js/styles/github-dark.css";

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find(a => a.id === id);

  // Get related articles (same tags, excluding current)
  const relatedArticles = article
    ? articles
        .filter(a => a.id !== article.id && a.tags.some(tag => article.tags.includes(tag)))
        .slice(0, 3)
    : [];

  // If article not found, redirect to articles page
  if (!article) {
    return <Navigate to="/articles" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{article.title} | Target-Ops DevOps Blog</title>
        <meta name="description" content={article.description} />
        <meta name="keywords" content={article.seoKeywords?.join(', ')} />
        <meta name="author" content={article.author} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.description} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={article.date} />
        <meta property="article:author" content={article.author} />
        {article.tags.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        <link rel="canonical" href={`https://target-ops.io/articles/${article.id}`} />
      </Helmet>

      <Navigation />

      <main className="relative pt-16">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background"></div>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(99, 102, 241, 0.05) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        ></div>

        {/* Back button */}
        <div className="relative max-w-4xl mx-auto px-4 pt-8">
          <Button variant="ghost" asChild>
            <Link to="/articles">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Articles
            </Link>
          </Button>
        </div>

        {/* Article Header */}
        <article className="relative max-w-4xl mx-auto px-4 py-12">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {article.tags.map((tag, idx) => (
              <Badge key={idx} variant="secondary" className="text-sm">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8 pb-8 border-b border-border">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="text-sm">{article.author}</span>
              {article.authorRole && (
                <span className="text-sm text-muted-foreground">• {article.authorRole}</span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span className="text-sm">
                {new Date(article.date).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span className="text-sm">{article.readTime}</span>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none
            prose-headings:font-bold prose-headings:text-foreground
            prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-8
            prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-8 prose-h2:pb-2 prose-h2:border-b prose-h2:border-border
            prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-6
            prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-strong:text-foreground prose-strong:font-semibold
            prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6
            prose-ol:my-4 prose-ol:list-decimal prose-ol:pl-6
            prose-li:text-muted-foreground prose-li:my-2
            prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-surface-elevated prose-pre:border prose-pre:border-border prose-pre:rounded-lg prose-pre:p-4 prose-pre:overflow-x-auto prose-pre:my-6
            prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-muted-foreground
            prose-img:rounded-lg prose-img:shadow-lg prose-img:my-8
            prose-hr:border-border prose-hr:my-8
            prose-table:border-collapse prose-table:w-full prose-table:my-6
            prose-th:border prose-th:border-border prose-th:bg-surface-elevated prose-th:p-3 prose-th:text-left
            prose-td:border prose-td:border-border prose-td:p-3
          ">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight, rehypeRaw]}
            >
              {article.content}
            </ReactMarkdown>
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 p-8 mt-12">
            <h3 className="text-2xl font-bold mb-3">Need Help with Your DevOps?</h3>
            <p className="text-muted-foreground mb-6">
              Book a free 30-minute consultation with our DevOps experts. No sales pitch, just honest advice about your infrastructure challenges.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90" asChild>
              <Link to="/contact">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </Card>
        </article>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="relative max-w-6xl mx-auto px-4 py-12 border-t border-border">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((related) => (
                <Link key={related.id} to={`/articles/${related.id}`}>
                  <Card className="bg-background/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow/20 h-full group">
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Calendar className="h-4 w-4" />
                        {new Date(related.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </div>
                      <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {related.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                        {related.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {related.tags.slice(0, 2).map((tag, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ArticleDetail;

