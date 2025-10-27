import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import OpenSourcePage from "./pages/OpenSourcePage";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import DevOpsConsulting from "./pages/solutions/DevOpsConsulting";
import CloudMigration from "./pages/solutions/CloudMigration";
import InfrastructureAutomation from "./pages/solutions/InfrastructureAutomation";
import CICDPipelines from "./pages/solutions/CICDPipelines";
import SecurityCompliance from "./pages/solutions/SecurityCompliance";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/devops-consulting" element={<DevOpsConsulting />} />
          <Route path="/solutions/cloud-migration" element={<CloudMigration />} />
          <Route path="/solutions/infrastructure-automation" element={<InfrastructureAutomation />} />
          <Route path="/solutions/cicd" element={<CICDPipelines />} />
          <Route path="/solutions/security-compliance" element={<SecurityCompliance />} />
          <Route path="/open-source" element={<OpenSourcePage />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
