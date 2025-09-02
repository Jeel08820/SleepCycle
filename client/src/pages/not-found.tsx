import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Home, Calculator, Moon, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full animate-float blur-sm"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full animate-float blur-sm" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full animate-float blur-sm" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Error Section */}
          <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20 shadow-2xl mb-8">
            <CardContent className="p-8">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <AlertCircle className="h-20 w-20 text-red-400 mx-auto mb-4" />
                  <div className="absolute -inset-2 bg-red-500/20 rounded-full blur-xl animate-pulse"></div>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
                404 - Page Not Found
              </h1>
              
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Oops! The page you're looking for seems to have wandered off into dreamland. 
                But don't worry - we've got plenty of ways to help you get back on track to better sleep!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/">
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
                    <Home className="mr-2" size={18} />
                    Go Home
                  </Button>
                </Link>
                
                <Link href="/sleep-calculator">
                  <Button variant="outline" className="border-purple-400/30 text-purple-300 hover:bg-purple-500/20 font-semibold py-3 px-6 rounded-xl transition-all duration-300">
                    <Calculator className="mr-2" size={18} />
                    Sleep Calculator
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Helpful Content Section */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-slate-800/50 backdrop-blur-sm border-blue-500/20 shadow-xl">
              <CardContent className="p-6">
                <div className="text-blue-400 mb-4">
                  <Moon size={32} className="mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Popular Sleep Topics</h3>
                <ul className="text-gray-300 space-y-2 text-left">
                  <li>• <Link href="/sleep-calculator" className="text-blue-400 hover:text-blue-300 underline">Sleep Cycle Calculator</Link> - Find optimal bedtime</li>
                  <li>• <Link href="/sleep-tips" className="text-blue-400 hover:text-blue-300 underline">Sleep Tips</Link> - Expert advice for better rest</li>
                  <li>• Sleep hygiene practices</li>
                  <li>• Circadian rhythm optimization</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 backdrop-blur-sm border-green-500/20 shadow-xl">
              <CardContent className="p-6">
                <div className="text-green-400 mb-4">
                  <Calculator size={32} className="mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Why Sleep Cycles Matter</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Understanding your 90-minute sleep cycles can transform your sleep quality. 
                  Waking up at the right time within your sleep cycle helps you feel more refreshed 
                  and energized throughout the day.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Educational Content */}
          <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20 shadow-xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-4">Quick Sleep Facts</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-400/20">
                  <h4 className="font-semibold text-purple-300 mb-2">Sleep Cycles</h4>
                  <p className="text-gray-300">Each complete sleep cycle lasts about 90 minutes and includes all sleep stages.</p>
                </div>
                <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-400/20">
                  <h4 className="font-semibold text-blue-300 mb-2">Optimal Duration</h4>
                  <p className="text-gray-300">Most adults need 5-6 complete cycles (7.5-9 hours) for optimal rest.</p>
                </div>
                <div className="p-3 bg-green-500/10 rounded-lg border border-green-400/20">
                  <h4 className="font-semibold text-green-300 mb-2">Wake Timing</h4>
                  <p className="text-gray-300">Waking up at the end of a cycle helps you feel more refreshed and alert.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Help */}
          <div className="mt-8 p-4 bg-slate-700/30 rounded-xl border border-gray-600/30">
            <p className="text-gray-400 text-sm">
              <ArrowLeft className="inline mr-2" size={16} />
              Use the navigation above or <Link href="/" className="text-purple-400 hover:text-purple-300 underline">return to the homepage</Link> to continue exploring our sleep optimization tools.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
