import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Fellowships from "./pages/Fellowships";
import SiteShell from "@/components/SiteShell"; // <-- import the wrapper

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider delayDuration={80}>
      <Toaster />
      <Sonner />
      <Router>
        <SiteShell>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/fellowships" element={<Fellowships />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </SiteShell>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
