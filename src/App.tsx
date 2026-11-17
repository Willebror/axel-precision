import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/i18n/LanguageContext";
import CookieConsent from "@/components/CookieConsent";
import Index from "./pages/Index.tsx";
import Integritetspolicy from "./pages/Integritetspolicy.tsx";
import HjulinstallningLastbil from "./pages/HjulinstallningLastbil.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();


const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/integritetspolicy" element={<Integritetspolicy />} />
            <Route path="/hjulinstallning-lastbil" element={<HjulinstallningLastbil />} />
            <Route path="/hjulinstallning-lastbil/" element={<HjulinstallningLastbil />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <CookieConsent />
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
