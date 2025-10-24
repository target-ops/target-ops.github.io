import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Terms of Service | Target-Ops</title>
        <meta name="description" content="Target-Ops Terms of Service. Read our terms and conditions for using our website and services." />
        <link rel="canonical" href="https://target-ops.io/terms" />
      </Helmet>
      <Navigation />
      <main className="pt-16">
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-2 bg-gradient-primary bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground mb-8 sm:mb-12 px-2">
              Last updated: October 24, 2025
            </p>
            
            <Card className="bg-surface-elevated border-border p-6 sm:p-8 md:p-10">
              <div className="space-y-8 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Agreement to Terms</h2>
                  <p>
                    By accessing or using the Target-Ops website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Use License</h2>
                  <p className="mb-3">
                    Permission is granted to temporarily access the materials (information or software) on Target-Ops's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose or for any public display</li>
                    <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                    <li>Remove any copyright or other proprietary notations from the materials</li>
                    <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                  </ul>
                  <p className="mt-3">
                    This license shall automatically terminate if you violate any of these restrictions and may be terminated by Target-Ops at any time.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Services</h2>
                  <p>
                    Target-Ops provides DevOps consulting services including but not limited to cloud migration, infrastructure automation, CI/CD pipeline implementation, and security compliance. All services are provided subject to separate service agreements and statements of work.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Consultations</h2>
                  <p>
                    Free consultations are provided for informational purposes only and do not constitute a binding agreement for services. Any recommendations or advice provided during consultations are general in nature and should not be relied upon without further professional assessment.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Intellectual Property</h2>
                  <p>
                    The materials on Target-Ops's website, including but not limited to text, graphics, logos, images, and software, are owned by or licensed to Target-Ops and are protected by copyright and trademark laws. Our open-source projects are licensed under their respective open-source licenses as indicated in their repositories.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">User Content</h2>
                  <p>
                    By submitting content through our contact forms or other communication channels, you grant Target-Ops a non-exclusive, worldwide, royalty-free license to use, reproduce, and display such content for the purpose of providing our services and improving our offerings.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Disclaimer</h2>
                  <p>
                    The materials on Target-Ops's website are provided on an 'as is' basis. Target-Ops makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                  </p>
                  <p className="mt-3">
                    Further, Target-Ops does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Limitations</h2>
                  <p>
                    In no event shall Target-Ops or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Target-Ops's website, even if Target-Ops or a Target-Ops authorized representative has been notified orally or in writing of the possibility of such damage.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Accuracy of Materials</h2>
                  <p>
                    The materials appearing on Target-Ops's website could include technical, typographical, or photographic errors. Target-Ops does not warrant that any of the materials on its website are accurate, complete, or current. Target-Ops may make changes to the materials contained on its website at any time without notice.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Links</h2>
                  <p>
                    Target-Ops has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Target-Ops of the site. Use of any such linked website is at the user's own risk.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Modifications</h2>
                  <p>
                    Target-Ops may revise these Terms of Service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms of Service.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Governing Law</h2>
                  <p>
                    These terms and conditions are governed by and construed in accordance with the laws of Israel and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Termination</h2>
                  <p>
                    We reserve the right to terminate or suspend access to our website and services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms of Service.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Contact Information</h2>
                  <p>
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <ul className="list-none space-y-2 mt-4">
                    <li><strong className="text-foreground">Email:</strong> <a href="mailto:target@target-ops.io" className="text-primary hover:underline">target@target-ops.io</a></li>
                    <li><strong className="text-foreground">Website:</strong> <a href="https://target-ops.io/contact" className="text-primary hover:underline">target-ops.io/contact</a></li>
                  </ul>
                </section>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;

