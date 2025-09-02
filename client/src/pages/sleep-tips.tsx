import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FooterNavigation } from "@/components/ui/navigation";
import { Moon, Clock, Home, Lightbulb, Calendar, Thermometer } from "lucide-react";

interface SleepTip {
  id: number;
  title: string;
  description: string;
  category: string;
}

const sleepTips: SleepTip[] = [
  {
    id: 1,
    title: "Maintain a Consistent Sleep Schedule",
    description: "Go to bed and wake up at the same time every day, even on weekends. This helps regulate your body's internal clock and improves sleep quality.",
    category: "schedule"
  },
  {
    id: 2,
    title: "Create a Relaxing Bedtime Routine",
    description: "Develop a calming pre-sleep ritual like reading, meditation, or gentle stretching. This signals your body that it's time to wind down.",
    category: "habits"
  },
  {
    id: 3,
    title: "Optimize Your Sleep Environment",
    description: "Keep your bedroom cool (65-68°F), dark, and quiet. Use blackout curtains, earplugs, or a white noise machine if needed.",
    category: "environment"
  },
  {
    id: 4,
    title: "Limit Screen Time Before Bed",
    description: "Avoid electronic devices 1-2 hours before bedtime. The blue light can interfere with melatonin production and make it harder to fall asleep.",
    category: "habits"
  },
  {
    id: 5,
    title: "Exercise Regularly, But Not Late",
    description: "Regular physical activity promotes better sleep, but avoid vigorous exercise within 3 hours of bedtime as it can be stimulating.",
    category: "habits"
  },
  {
    id: 6,
    title: "Watch Your Caffeine Intake",
    description: "Limit caffeine consumption, especially after 2 PM. Caffeine can stay in your system for 6-8 hours and interfere with sleep.",
    category: "habits"
  },
  {
    id: 7,
    title: "Create a Comfortable Sleep Setup",
    description: "Invest in a supportive mattress and pillows. Your sleep surface should provide proper spinal alignment and comfort.",
    category: "environment"
  },
  {
    id: 8,
    title: "Manage Stress and Anxiety",
    description: "Practice stress-reduction techniques like deep breathing, meditation, or journaling to calm your mind before sleep.",
    category: "habits"
  },
  {
    id: 9,
    title: "Avoid Large Meals Before Bed",
    description: "Don't eat heavy meals within 2-3 hours of bedtime. Large meals can cause discomfort and interfere with sleep quality.",
    category: "habits"
  },
  {
    id: 10,
    title: "Get Morning Sunlight",
    description: "Expose yourself to natural light in the morning. This helps regulate your circadian rhythm and improves sleep-wake cycles.",
    category: "schedule"
  },
  {
    id: 11,
    title: "Limit Naps During the Day",
    description: "If you nap, keep it short (20-30 minutes) and avoid napping after 3 PM. Long or late naps can interfere with nighttime sleep.",
    category: "schedule"
  },
  {
    id: 12,
    title: "Use Your Bed Only for Sleep",
    description: "Reserve your bed for sleep and intimacy only. Avoid working, watching TV, or using devices in bed to strengthen the sleep association.",
    category: "habits"
  }
];

const categoryIcons = {
  schedule: Clock,
  habits: Lightbulb,
  environment: Home,
  duration: Calendar,
} as const;

const categoryColors = {
  schedule: "bg-blue-500/20 text-blue-300 border-blue-400/30",
  habits: "bg-yellow-500/20 text-yellow-300 border-yellow-400/30",
  environment: "bg-green-500/20 text-green-300 border-green-400/30",
  duration: "bg-purple-500/20 text-purple-300 border-purple-400/30",
} as const;

export default function SleepTips() {
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
          {/* Tips Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
            {sleepTips.map((tip, index) => {
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

          {/* Additional Sleep Information */}
          <div className="space-y-8">
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
        <FooterNavigation />
      </div>
    </div>
  );
}