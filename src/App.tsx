import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Seo from "@/components/Seo";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Fellowships from "./pages/Fellowships";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Team from "./pages/Team";
import Careers from "./pages/Careers";
import NvidiaInception from "./pages/News-NvidiaInception";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider delayDuration={80}>
      <Toaster />
      <Sonner />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Seo
                  title="Nasken Health — AI-Powered Clinical Insights"
                  description="Nasken Health is a Boston-based digital health startup building AI tools for remote patient monitoring, therapy summarization, and clinical analytics."
                  path="/"
                />
                <Index />
              </>
            }
          />
          <Route
            path="/team"
            element={
              <>
                <Seo
                  title="Our Team — Nasken Health"
                  description="Meet the Nasken Health team: Founder & CEO Sandesh GV, Uriah Thornes on engineering, and Yijia Xu, advisor on research and data."
                  path="/team"
                />
                <Team />
              </>
            }
          />
          <Route
            path="/careers"
            element={
              <>
                <Seo
                  title="Careers — Nasken Health"
                  description="Nasken Health has no current openings. Share your LinkedIn profile and we will reach out if there is a fit."
                  path="/careers"
                />
                <Careers />
              </>
            }
          />
          <Route
            path="/fellowships"
            element={
              <>
                <Seo
                  title="Fellowship — Nasken Health"
                  description="Fellowship opportunity for psychology students interested in digital mental health research. Join Nasken Health's pilot study exploring AI-assisted therapy engagement."
                  path="/fellowships"
                />
                <Fellowships />
              </>
            }
          />
          <Route
            path="/news/nvidia-inception"
            element={
              <>
                <Seo
                  title="Nasken Health Joins NVIDIA Inception Program"
                  description="Nasken Health has joined the NVIDIA Inception Program, NVIDIA's global startup program supporting AI innovators."
                  path="/news/nvidia-inception"
                />
                <NvidiaInception />
              </>
            }
          />
          <Route
            path="/privacy"
            element={
              <>
                <Seo
                  title="Privacy Policy — Nasken Health"
                  description="How Nasken Health collects, uses, shares and retains personal information, the legal bases we rely on, and how to exercise your rights."
                  path="/privacy"
                />
                <Privacy />
              </>
            }
          />
          <Route
            path="/terms"
            element={
              <>
                <Seo
                  title="Terms of Service — Nasken Health"
                  description="Terms of Service for naskenhealth.com, covering user obligations, intellectual property, third-party links, disclaimer of liability and applicable law."
                  path="/terms"
                />
                <Terms />
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <Seo
                  title="Page Not Found — Nasken Health"
                  description="The page you are looking for does not exist."
                  noindex
                />
                <NotFound />
              </>
            }
          />
        </Routes>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
