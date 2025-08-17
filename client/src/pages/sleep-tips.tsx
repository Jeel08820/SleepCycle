import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Moon, Clock, Home, Lightbulb, Calendar, Thermometer } from "lucide-react";

interface SleepTip {
  id: number;
  title: string;
  description: string;
  category: string;
  isActive: boolean;
  createdAt: string;
}

const categoryIcons = {
  duration: Clock,
  schedule: Calendar,
  environment: Home,
  habits: Lightbulb,
} as const;

const categoryColors = {
  duration: "bg-purple-500/20 text-purple-300 border-purple-400/30",
  schedule: "bg-blue-500/20 text-blue-300 border-blue-400/30",
  environment: "bg-green-500/20 text-green-300 border-green-400/30",
  habits: "bg-yellow-500/20 text-yellow-300 border-yellow-400/30",
} as const;

export default function SleepTips() {
  const [tips, setTips] = useState<SleepTip[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    fetchTips();
  }, []);

  const fetchTips = async () => {
    try {
      const response = await fetch('/api/sleep-tips');
      if (response.ok) {
        const data = await response.json();
        setTips(data);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching sleep tips:', error);
      setLoading(false);
    }
  };

  const categories = Array.from(new Set(tips.map(tip => tip.category)));
  const filteredTips = selectedCategory === "all" 
    ? tips 
    : tips.filter(tip => tip.category === selectedCategory);

  if (loading) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="flex items-center justify-center min-h-screen">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full animate-float blur-sm"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full animate-float blur-sm" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full animate-float blur-sm" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="flex-shrink-0 text-center py-16 px-4">
          <div className="relative inline-block mb-8">
            <div className="absolute -inset-2 bg-purple-500/20 rounded-full blur-xl animate-pulse-slow"></div>
            <Moon className="relative h-20 w-20 text-purple-400 mx-auto mb-4" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Sleep Tips & Advice
          </h1>
          
          <p className="text-gray-200 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Discover expert sleep tips and evidence-based strategies to improve your sleep quality, optimize your rest, and wake up feeling refreshed every day.
          </p>

          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex-1 max-w-6xl mx-auto w-full px-4 pb-16">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            {/* Category Tabs */}
            <div className="mb-8">
              <Card className="bg-gradient-to-r from-slate-800/60 via-purple-900/40 to-slate-800/60 backdrop-blur-sm border-2 border-purple-400/30 p-4 shadow-xl">
                <TabsList className="grid grid-cols-5 w-full gap-2 bg-transparent">
                  <TabsTrigger 
                    value="all" 
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
                  >
                    All Tips
                  </TabsTrigger>
                  {categories.map((category) => {
                    const Icon = categoryIcons[category as keyof typeof categoryIcons] || Lightbulb;
                    return (
                      <TabsTrigger 
                        key={category} 
                        value={category}
                        className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white capitalize flex items-center gap-2"
                      >
                        <Icon className="h-4 w-4" />
                        {category}
                      </TabsTrigger>
                    );
                  })}
                </TabsList>
              </Card>
            </div>

            {/* Tips Content */}
            <TabsContent value={selectedCategory} className="space-y-6">
              {filteredTips.length === 0 ? (
                <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20 shadow-2xl">
                  <CardContent className="p-8 text-center">
                    <Moon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-300 mb-2">No tips found</h3>
                    <p className="text-gray-400">
                      {selectedCategory === "all" 
                        ? "No sleep tips are available at the moment." 
                        : `No tips found for the ${selectedCategory} category.`}
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filteredTips.map((tip, index) => {
                    const Icon = categoryIcons[tip.category as keyof typeof categoryIcons] || Lightbulb;
                    const colorClass = categoryColors[tip.category as keyof typeof categoryColors] || categoryColors.habits;
                    
                    return (
                      <Card 
                        key={tip.id} 
                        className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105 hover:border-purple-400/40"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-purple-500/20 rounded-lg">
                                <Icon className="h-5 w-5 text-purple-400" />
                              </div>
                              <div className="flex-1">
                                <CardTitle className="text-lg font-semibold text-white line-clamp-2">
                                  {tip.title}
                                </CardTitle>
                              </div>
                            </div>
                          </div>
                          <Badge variant="secondary" className={`w-fit text-xs ${colorClass} capitalize`}>
                            {tip.category}
                          </Badge>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-300 leading-relaxed">
                            {tip.description}
                          </p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              )}
            </TabsContent>
          </Tabs>

          {/* Additional Sleep Information */}
          <div className="mt-16 space-y-8">
            <Card className="bg-gradient-to-br from-slate-800/40 to-purple-900/20 backdrop-blur-sm border border-purple-400/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent flex items-center gap-3">
                  <Thermometer className="h-8 w-8 text-purple-400" />
                  Understanding Sleep Science
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Quality sleep is essential for physical health, mental well-being, and cognitive performance. During sleep, your body repairs tissues, consolidates memories, and releases important hormones that regulate growth and appetite.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="p-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl border border-purple-400/20">
                    <h4 className="font-semibold text-purple-300 mb-2">Sleep Stages</h4>
                    <p className="text-gray-300 text-sm">
                      Sleep occurs in cycles of approximately 90 minutes, consisting of light sleep, deep sleep, and REM sleep stages.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl border border-blue-400/20">
                    <h4 className="font-semibold text-blue-300 mb-2">Circadian Rhythm</h4>
                    <p className="text-gray-300 text-sm">
                      Your internal clock regulates sleep-wake cycles, influenced by light exposure, temperature, and daily activities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800/40 to-green-900/20 backdrop-blur-sm border border-green-400/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent flex items-center gap-3">
                  <Lightbulb className="h-8 w-8 text-green-400" />
                  Quick Sleep Optimization Guide
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-green-500/10 rounded-lg border border-green-400/20">
                    <h5 className="font-semibold text-green-300 mb-2">Before Bed</h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Dim lights 1-2 hours before sleep</li>
                      <li>• Avoid screens and caffeine</li>
                      <li>• Keep room cool (60-67°F)</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-400/20">
                    <h5 className="font-semibold text-blue-300 mb-2">During Sleep</h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Use blackout curtains</li>
                      <li>• Maintain quiet environment</li>
                      <li>• Comfortable mattress & pillows</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-400/20">
                    <h5 className="font-semibold text-purple-300 mb-2">Upon Waking</h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Get morning sunlight</li>
                      <li>• Avoid hitting snooze</li>
                      <li>• Stay hydrated</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-auto py-8 px-4 border-t border-gray-700/50">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-400 text-sm">
              These tips are for educational purposes only and should not replace professional medical advice. 
              Consult with a healthcare provider for persistent sleep issues.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}