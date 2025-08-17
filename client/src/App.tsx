import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import SleepCalculator from "@/pages/sleep-calculator";
import NotFound from "@/pages/not-found";
import SleepTips from "@/pages/sleep-tips";

function Router() {
  return (
    <Switch>
      <Route path="/" component={SleepCalculator} />
      <Route path="/sleep-calculator" component={SleepCalculator} />
      <Route path="/sleep-tips" component={SleepTips} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
