import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { AlertCircle, Home, Calculator, Moon, ArrowLeft, BookOpen, Smartphone } from "lucide-react";
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

            {/* Sleep Education Resources */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-blue-500/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                  <BookOpen className="h-8 w-8 text-blue-400" />
                  Sleep Education Resources
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  While you're here, take advantage of our comprehensive sleep education resources. 
                  Understanding sleep science can help you make better decisions about your health and well-being.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                    <h4 className="font-semibold text-blue-300 mb-3">Sleep Science Fundamentals</h4>
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li>• Sleep cycle stages and timing</li>
                      <li>• Circadian rhythm regulation</li>
                      <li>• Sleep architecture patterns</li>
                      <li>• Hormonal sleep regulation</li>
                      <li>• Sleep quality metrics</li>
                      <li>• Sleep deprivation effects</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-indigo-500/10 rounded-xl border border-indigo-400/20">
                    <h4 className="font-semibold text-indigo-300 mb-3">Sleep Optimization Strategies</h4>
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li>• Sleep hygiene best practices</li>
                      <li>• Environment optimization</li>
                      <li>• Technology and sleep</li>
                      <li>• Nutrition and sleep</li>
                      <li>• Exercise timing effects</li>
                      <li>• Stress management techniques</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl border border-blue-400/20">
                  <h4 className="font-semibold text-blue-300 mb-3">Common Sleep Topics</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-3 bg-blue-600/10 rounded-lg">
                      <h5 className="font-semibold text-blue-200 mb-2 text-sm">Sleep Disorders</h5>
                      <ul className="text-xs text-gray-300 space-y-1">
                        <li>• Insomnia</li>
                        <li>• Sleep apnea</li>
                        <li>• Restless leg syndrome</li>
                        <li>• Narcolepsy</li>
                      </ul>
                    </div>
                    <div className="p-3 bg-indigo-600/10 rounded-lg">
                      <h5 className="font-semibold text-indigo-200 mb-2 text-sm">Sleep & Health</h5>
                      <ul className="text-xs text-gray-300 space-y-1">
                        <li>• Cardiovascular health</li>
                        <li>• Immune function</li>
                        <li>• Mental health</li>
                        <li>• Weight management</li>
                      </ul>
                    </div>
                    <div className="p-3 bg-purple-600/10 rounded-lg">
                      <h5 className="font-semibold text-purple-200 mb-2 text-sm">Special Populations</h5>
                      <ul className="text-xs text-gray-300 space-y-1">
                        <li>• Shift workers</li>
                        <li>• Travelers</li>
                        <li>• Athletes</li>
                        <li>• Older adults</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sleep Technology Guide */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-green-500/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                  <Smartphone className="h-8 w-8 text-green-400" />
                  Sleep Technology Guide
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-green-500/10 rounded-xl border border-green-400/20">
                    <h4 className="font-semibold text-green-300 mb-3">Sleep Tracking Devices</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Modern sleep tracking technology provides valuable insights into your sleep patterns. 
                      Understanding how to use these tools effectively can help improve your sleep quality.
                    </p>
                    <div className="mt-3 p-3 bg-green-600/10 rounded-lg">
                      <h5 className="font-semibold text-green-200 mb-2 text-sm">Types of Devices:</h5>
                      <ul className="text-xs text-gray-300 space-y-1">
                        <li>• Wearable trackers</li>
                        <li>• Bedside monitors</li>
                        <li>• Smart mattresses</li>
                        <li>• Mobile apps</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-emerald-500/10 rounded-xl border border-emerald-400/20">
                    <h4 className="font-semibold text-emerald-300 mb-3">Data Interpretation</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Sleep tracking data can be complex. Learning to interpret this information helps you 
                      make informed decisions about your sleep habits and environment.
                    </p>
                    <div className="mt-3 p-3 bg-emerald-600/10 rounded-lg">
                      <h5 className="font-semibold text-emerald-200 mb-2 text-sm">Key Metrics:</h5>
                      <ul className="text-xs text-gray-300 space-y-1">
                        <li>• Sleep efficiency</li>
                        <li>• Deep sleep duration</li>
                        <li>• REM sleep cycles</li>
                        <li>• Sleep latency</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
