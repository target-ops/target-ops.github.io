import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Github, MessageSquare, Calendar, CheckCircle2, AlertCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const apiKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    console.log('🔑 API Key loaded:', apiKey ? 'Yes ✅' : 'No ❌');

    try {
      const payload = {
        access_key: apiKey || 'h7p4wlcqv0ixq1',
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: formData.message,
        subject: `New Contact Form Submission from ${formData.name}`,
      };

      console.log('📤 Sending to Web3Forms:', payload);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log('📥 Response from Web3Forms:', data);

      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        console.error('❌ Web3Forms error:', data);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('❌ Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact Us | Get a Free DevOps Consultation | Target-Ops</title>
        <meta name="description" content="Contact Target-Ops for expert DevOps consulting. Schedule a free 30-minute consultation to discuss your infrastructure, cloud migration, or CI/CD needs. No commitment required." />
        <meta property="og:title" content="Contact Us | Target-Ops" />
        <meta property="og:description" content="Get a free DevOps consultation. Discuss your infrastructure challenges with expert engineers." />
        <link rel="canonical" href="https://target-ops.io/contact" />
      </Helmet>
      <Navigation />
      <main className="pt-16">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-2 bg-gradient-primary bg-clip-text text-transparent">
                Let's Talk About Your DevOps Challenges
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
                Book a free 30-minute consultation. No sales pitch — just honest advice from engineers who've been there.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="bg-surface-elevated border-border">
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl">Request a Free Consultation</CardTitle>
                  <CardDescription>
                    Tell us about your challenges. We'll respond within 24 hours with next steps.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input 
                          id="name" 
                          placeholder="Your name" 
                          required
                          value={formData.name}
                          onChange={handleChange}
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="your@email.com"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input 
                        id="company" 
                        placeholder="Your company name"
                        value={formData.company}
                        onChange={handleChange}
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">What can we help you with? *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Example: We need help migrating to AWS and setting up CI/CD pipelines. Currently deploying manually and it takes hours..."
                        className="min-h-[120px]"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        disabled={isSubmitting}
                      />
                    </div>

                    {submitStatus === 'success' && (
                      <div className="bg-green-500/10 border border-green-500/50 rounded-lg p-4 flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <p className="text-sm text-green-500">
                          Thank you! We'll get back to you within 24 hours.
                        </p>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-4 flex items-center gap-3">
                        <AlertCircle className="h-5 w-5 text-red-500" />
                        <p className="text-sm text-red-500">
                          Something went wrong. Please try again or email us directly.
                        </p>
                      </div>
                    )}

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin mr-2">⏳</span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Calendar className="h-4 w-4 mr-2" />
                          Request Free Consultation
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
              
              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="bg-surface-elevated border-border">
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl">Direct Contact</CardTitle>
                    <CardDescription>
                      Prefer to reach out directly? Connect with us through your preferred channel.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href="mailto:ofir@target-ops.io">
                        <Mail className="h-4 w-4 mr-2" />
                        ofir@target-ops.io
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href="https://linkedin.com/company/target-ops" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href="https://github.com/target-ops" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="bg-surface-elevated border-border">
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl">What Happens Next?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">1</div>
                        <div>
                          <h4 className="font-medium">We Review Your Request</h4>
                          <p className="text-sm text-muted-foreground">Within 24 hours, one of our DevOps engineers will reach out.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">2</div>
                        <div>
                          <h4 className="font-medium">30-Minute Call</h4>
                          <p className="text-sm text-muted-foreground">We discuss your infrastructure, pain points, and goals. No sales pitch.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">3</div>
                        <div>
                          <h4 className="font-medium">Honest Assessment</h4>
                          <p className="text-sm text-muted-foreground">If we can help, we'll send a proposal. If not, we'll tell you.</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="text-center bg-gradient-to-br from-primary/10 via-background to-primary/5 border border-primary/20 p-6 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong className="text-foreground">No commitment required.</strong>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    We'll give you honest advice about your DevOps challenges — whether you work with us or not.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;