import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { FooterNavigation } from "../components/ui/navigation";
import { Heart, Target, Users, Award, Lightbulb, Zap, Shield, Globe, FileText } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full animate-float blur-sm"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full animate-float blur-sm" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full animate-float blur-sm" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="flex-shrink-0 text-center py-16 px-4">
          <div className="relative inline-block mb-8">
            <div className="absolute -inset-2 bg-purple-500/20 rounded-full blur-xl animate-pulse-slow"></div>
            <Heart className="relative h-20 w-20 text-purple-400 mx-auto mb-4" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            About SleepCycle
          </h1>
          
          <p className="text-gray-200 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            We're passionate about helping people achieve better sleep through science-based tools and education. 
            Our mission is to make sleep optimization accessible to everyone.
          </p>

          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex-1 max-w-6xl mx-auto w-full px-4 pb-16">
          <div className="space-y-12">
            {/* Mission and Vision */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                    <Target className="h-8 w-8 text-purple-400" />
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">
                    To empower individuals with the knowledge and tools they need to optimize their sleep cycles, 
                    leading to improved health, productivity, and overall well-being. We believe that quality sleep 
                    is the foundation of a healthy, fulfilling life.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 backdrop-blur-sm border-blue-500/20 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                    <Globe className="h-8 w-8 text-blue-400" />
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">
                    A world where everyone has access to personalized sleep optimization tools and understands 
                    the science behind their sleep patterns. We envision a future where sleep disorders are 
                    reduced and people wake up feeling refreshed every day.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* What We Do */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-green-500/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                  <Lightbulb className="h-8 w-8 text-green-400" />
                  What We Do
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  SleepCycle provides cutting-edge tools and educational resources to help you understand and 
                  optimize your sleep patterns. Our approach is grounded in scientific research and designed 
                  to be accessible to everyone.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-4 bg-green-500/10 rounded-lg border border-green-400/20">
                    <h5 className="font-semibold text-green-300 mb-2">Sleep Calculator</h5>
                    <p className="text-sm text-gray-300">
                      Advanced algorithms that calculate optimal bedtime and wake-up times based on your 
                      natural 90-minute sleep cycles.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-400/20">
                    <h5 className="font-semibold text-blue-300 mb-2">Educational Content</h5>
                    <p className="text-sm text-gray-300">
                      Comprehensive guides and tips based on the latest sleep science research, 
                      helping you understand your body's natural rhythms.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-400/20">
                    <h5 className="font-semibold text-purple-300 mb-2">Sleep Optimization</h5>
                    <p className="text-sm text-gray-300">
                      Personalized recommendations and strategies to improve your sleep quality 
                      and establish healthy sleep habits.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Our Story */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-pink-500/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                  <Heart className="h-8 w-8 text-pink-400" />
                  Our Story
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  SleepCycle was born from a simple observation: many people struggle with sleep, but few understand 
                  the science behind it. Our founder, a sleep researcher, noticed that while there was plenty of 
                  scientific literature on sleep cycles, this valuable information wasn't accessible to the general public.
                </p>
                
                <p className="text-gray-300 leading-relaxed">
                  We started with a simple sleep calculator based on the well-established 90-minute sleep cycle theory. 
                  As we grew, we expanded our offerings to include comprehensive educational content, sleep tips, 
                  and optimization strategies. Today, we serve thousands of users worldwide, helping them achieve 
                  better sleep and improved quality of life.
                </p>
                
                <div className="p-4 bg-pink-500/10 rounded-xl border border-pink-400/20">
                  <h4 className="font-semibold text-pink-300 mb-2">Our Commitment</h4>
                  <p className="text-gray-300 text-sm">
                    We're committed to staying at the forefront of sleep science research and continuously 
                    improving our tools and educational content. Your sleep journey is our passion.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Core Values */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-yellow-500/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                  <Award className="h-8 w-8 text-yellow-400" />
                  Our Core Values
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-yellow-500/10 rounded-lg border border-yellow-400/20">
                      <h5 className="font-semibold text-yellow-300 mb-2">Scientific Accuracy</h5>
                      <p className="text-sm text-gray-300">
                        Every tool and piece of content is based on peer-reviewed research and validated scientific principles.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-orange-500/10 rounded-lg border border-orange-400/20">
                      <h5 className="font-semibold text-orange-300 mb-2">User Privacy</h5>
                      <p className="text-sm text-gray-300">
                        We prioritize your privacy and data security, collecting only what's necessary to improve our services.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-amber-500/10 rounded-lg border border-amber-400/20">
                      <h5 className="font-semibold text-amber-300 mb-2">Accessibility</h5>
                      <p className="text-sm text-gray-300">
                        Making sleep science accessible to everyone, regardless of their background or technical expertise.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-yellow-600/10 rounded-lg border border-yellow-500/20">
                      <h5 className="font-semibold text-yellow-400 mb-2">Continuous Improvement</h5>
                      <p className="text-sm text-gray-300">
                        We constantly update our tools and content based on new research and user feedback.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* The Science Behind Our Tools */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-indigo-500/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                  <Zap className="h-8 w-8 text-indigo-400" />
                  The Science Behind Our Tools
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Our sleep calculator and optimization tools are built on decades of sleep research and scientific understanding 
                  of human sleep patterns. We combine multiple fields of study to provide you with the most accurate and helpful tools.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-indigo-500/10 rounded-xl border border-indigo-400/20">
                    <h4 className="font-semibold text-indigo-300 mb-2">Sleep Cycle Research</h4>
                    <p className="text-gray-300 text-sm">
                      Based on the well-established theory that human sleep occurs in approximately 90-minute cycles, 
                      including all stages from light sleep to REM. This research dates back to the 1950s and has been 
                      validated by numerous studies.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-purple-500/10 rounded-xl border border-purple-400/20">
                    <h4 className="font-semibold text-purple-300 mb-2">Circadian Rhythm Science</h4>
                    <p className="text-gray-300 text-sm">
                      Incorporating research on the body's natural 24-hour cycle, including the production of melatonin, 
                      body temperature fluctuations, and other biological markers that influence sleep quality and timing.
                    </p>
                  </div>
                </div>
                
                <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                  <h4 className="font-semibold text-blue-300 mb-2">Sleep Architecture</h4>
                  <p className="text-gray-300 text-sm">
                    Understanding the different stages of sleep (N1, N2, N3, and REM) and how they cycle throughout the night. 
                    Our tools help you wake up at optimal times within these cycles to feel more refreshed and alert.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Sleep Research & Studies */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-green-500/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                  <FileText className="h-8 w-8 text-green-400" />
                  Sleep Research & Scientific Studies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Our approach is grounded in peer-reviewed research and validated scientific studies. We continuously 
                  review the latest sleep science literature to ensure our tools and recommendations remain current and accurate.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-green-500/10 rounded-xl border border-green-400/20">
                    <h4 className="font-semibold text-green-300 mb-3">Key Research Areas</h4>
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li>• Sleep cycle timing and optimization</li>
                      <li>• Circadian rhythm regulation</li>
                      <li>• Sleep quality and health outcomes</li>
                      <li>• Sleep disorders and treatments</li>
                      <li>• Sleep hygiene and environment</li>
                      <li>• Technology and sleep interaction</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-emerald-500/10 rounded-xl border border-emerald-400/20">
                    <h4 className="font-semibold text-emerald-300 mb-3">Scientific Validation</h4>
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li>• Peer-reviewed journal publications</li>
                      <li>• Clinical trial results</li>
                      <li>• Meta-analysis findings</li>
                      <li>• Expert consensus statements</li>
                      <li>• Real-world effectiveness studies</li>
                      <li>• User feedback and validation</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl border border-green-400/20">
                  <h4 className="font-semibold text-green-300 mb-3">Research Institutions & Collaborations</h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    We collaborate with leading sleep research institutions and stay updated with findings from:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-3 bg-green-600/10 rounded-lg">
                      <h5 className="font-semibold text-green-200 mb-2 text-sm">Academic Research</h5>
                      <ul className="text-xs text-gray-300 space-y-1">
                        <li>• Stanford Sleep Center</li>
                        <li>• Harvard Sleep Medicine</li>
                        <li>• Johns Hopkins Sleep</li>
                      </ul>
                    </div>
                    <div className="p-3 bg-emerald-600/10 rounded-lg">
                      <h5 className="font-semibold text-emerald-200 mb-2 text-sm">Medical Organizations</h5>
                      <ul className="text-xs text-gray-300 space-y-1">
                        <li>• American Academy of Sleep Medicine</li>
                        <li>• Sleep Research Society</li>
                        <li>• World Sleep Society</li>
                      </ul>
                    </div>
                    <div className="p-3 bg-teal-600/10 rounded-lg">
                      <h5 className="font-semibold text-teal-200 mb-2 text-sm">Clinical Studies</h5>
                      <ul className="text-xs text-gray-300 space-y-1">
                        <li>• Sleep disorder trials</li>
                        <li>• Treatment effectiveness</li>
                        <li>• Long-term outcomes</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Evidence-Based Approach */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-blue-500/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                  <Shield className="h-8 w-8 text-blue-400" />
                  Evidence-Based Approach
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                    <h4 className="font-semibold text-blue-300 mb-3">Scientific Methodology</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Every recommendation and tool feature is based on rigorous scientific research, 
                      validated through clinical studies and peer-reviewed publications.
                    </p>
                    <div className="mt-3 p-3 bg-blue-600/10 rounded-lg">
                      <h5 className="font-semibold text-blue-200 mb-2 text-sm">Our Process:</h5>
                      <ul className="text-xs text-gray-300 space-y-1">
                        <li>• Literature review and analysis</li>
                        <li>• Expert consultation</li>
                        <li>• Clinical validation</li>
                        <li>• Continuous updates</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-indigo-500/10 rounded-xl border border-indigo-400/20">
                    <h4 className="font-semibold text-indigo-300 mb-3">Quality Assurance</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      We maintain the highest standards of accuracy and reliability, 
                      ensuring all content meets rigorous scientific and medical standards.
                    </p>
                    <div className="mt-3 p-3 bg-indigo-600/10 rounded-lg">
                      <h5 className="font-semibold text-indigo-200 mb-2 text-sm">Standards:</h5>
                      <ul className="text-xs text-gray-300 space-y-1">
                        <li>• Peer-reviewed sources</li>
                        <li>• Expert verification</li>
                        <li>• Regular content audits</li>
                        <li>• User feedback integration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Our Team */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-emerald-500/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                  <Users className="h-8 w-8 text-emerald-400" />
                  Our Team
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  SleepCycle is built by a diverse team of sleep researchers, software engineers, and health professionals 
                  who are passionate about improving people's lives through better sleep.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-4 bg-emerald-500/10 rounded-lg border border-emerald-400/20">
                    <h5 className="font-semibold text-emerald-300 mb-2">Sleep Researchers</h5>
                    <p className="text-sm text-gray-300">
                      Experts in sleep medicine, psychology, and neuroscience who ensure our content and tools 
                      are scientifically accurate and up-to-date.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-teal-500/10 rounded-lg border border-teal-400/20">
                    <h5 className="font-semibold text-teal-300 mb-2">Software Engineers</h5>
                    <p className="text-sm text-gray-300">
                      Talented developers who build intuitive, reliable tools that make complex sleep science 
                      accessible and easy to use.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-cyan-500/10 rounded-lg border border-cyan-400/20">
                    <h5 className="font-semibold text-cyan-300 mb-2">Health Professionals</h5>
                    <p className="text-sm text-gray-300">
                      Medical doctors, sleep specialists, and wellness experts who review our content and 
                      ensure it meets the highest standards of accuracy and safety.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* User Impact */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-rose-500/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                  <Heart className="h-8 w-8 text-rose-400" />
                  Our Impact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-rose-500/10 rounded-xl border border-rose-400/20">
                    <h4 className="font-semibold text-rose-300 mb-2">Users Worldwide</h4>
                    <p className="text-gray-300 text-sm">
                      We've helped thousands of people across the globe improve their sleep quality and overall well-being. 
                      Our tools are used in over 50 countries, making sleep science accessible to diverse populations.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-pink-500/10 rounded-xl border border-pink-400/20">
                    <h4 className="font-semibold text-pink-300 mb-2">Sleep Quality Improvement</h4>
                    <p className="text-gray-300 text-sm">
                      Users report an average improvement of 2-3 hours in their sleep quality and feel more refreshed 
                      and energized throughout the day after implementing our recommendations.
                    </p>
                  </div>
                </div>
                
                <div className="p-4 bg-gradient-to-r from-rose-500/10 to-pink-500/10 rounded-xl border border-rose-400/20">
                  <h4 className="font-semibold text-rose-300 mb-2">Community Feedback</h4>
                  <p className="text-gray-300 text-sm">
                    We regularly receive feedback from users who have transformed their sleep habits and experienced 
                    significant improvements in their health, productivity, and overall quality of life. Your success stories 
                    inspire us to continue improving and expanding our services.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Get Involved */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Get Involved</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-300">
                    We believe in the power of community and collaboration. There are many ways you can get involved 
                    with SleepCycle and help us improve sleep health for everyone.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-400/20">
                      <h5 className="font-semibold text-purple-300 mb-2">Share Your Experience</h5>
                      <p className="text-sm text-gray-300">
                        Tell us how SleepCycle has helped improve your sleep. Your feedback helps us improve our tools 
                        and inspires others on their sleep journey.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-400/20">
                      <h5 className="font-semibold text-blue-300 mb-2">Spread the Word</h5>
                      <p className="text-sm text-gray-300">
                        Help friends and family discover better sleep by sharing our tools and educational content. 
                        Better sleep starts with awareness.
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl border border-purple-400/20">
                    <h4 className="font-semibold text-purple-300 mb-2">Stay Connected</h4>
                    <p className="text-gray-300 text-sm">
                      Follow us for the latest sleep science updates, new features, and tips for better sleep. 
                      We're committed to being your trusted partner in sleep optimization.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-gray-500/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Have questions, suggestions, or want to learn more about SleepCycle? We'd love to hear from you!
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-gray-500/10 rounded-lg border border-gray-400/20">
                    <h5 className="font-semibold text-gray-300 mb-2">General Inquiries</h5>
                    <p className="text-sm text-gray-300">
                      <strong>Email:</strong> hello@sleepcycle.app<br />
                      <strong>Subject:</strong> General Inquiry
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-600/10 rounded-lg border border-gray-500/20">
                    <h5 className="font-semibold text-gray-300 mb-2">Partnership Opportunities</h5>
                    <p className="text-sm text-gray-300">
                      <strong>Email:</strong> partnerships@sleepcycle.app<br />
                      <strong>Subject:</strong> Partnership Inquiry
                    </p>
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
