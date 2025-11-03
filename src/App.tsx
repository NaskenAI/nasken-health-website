import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Fellowships from "./pages/Fellowships";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Team from "./pages/Team";
import Careers from "./pages/Careers";
import NvidiaInception from "./pages/News-NvidiaInception"; // ✅ added

const queryClient = new QueryClient();

function Canonical({ path }: { path: string }) {
  const base = "https://www.naskenhealth.com";
  return (
    <Helmet>
      <link rel="canonical" href={`${base}${path}`} />
    </Helmet>
  );
}

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
                <Helmet><title>Nasken Health</title></Helmet>
                <Canonical path="/" />
                <Index />
              </>
            }
          />
          <Route
            path="/fellowships"
            element={
              <>
                <Helmet><title>Fellowships — Nasken Health</title></Helmet>
                <Canonical path="/fellowships" />
                <Fellowships />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Helmet><title>Contact — Nasken Health</title></Helmet>
                <Canonical path="/contact" />
                <Contact />
              </>
            }
          />
          <Route
            path="/privacy"
            element={
              <>
                <Helmet><title>Privacy — Nasken Health</title></Helmet>
                <Canonical path="/privacy" />
                <Privacy />
              </>
            }
          />
          <Route
            path="/terms"
            element={
              <>
                <Helmet><title>Terms — Nasken Health</title></Helmet>
                <Canonical path="/terms" />
                <Terms />
              </>
            }
          />
          <Route
            path="/team"
            element={
              <>
                <Helmet><title>Team — Nasken Health</title></Helmet>
                <Canonical path="/team" />
                <Team />
              </>
            }
          />
          <Route
            path="/careers"
            element={
              <>
                <Helmet><title>Careers — Nasken Health</title></Helmet>
                <Canonical path="/careers" />
                <Careers />
              </>
            }
          />
          {/* ✅ NVIDIA Inception route */}
          <Route
            path="/news/nvidia-inception"
            element={
              <>
                <Helmet><title>NVIDIA Inception — Nasken Health</title></Helmet>
                <Canonical path="/news/nvidia-inception" />
                <NvidiaInception />
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <Helmet><title>Not Found — Nasken Health</title></Helmet>
                <Canonical path="/" />
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
