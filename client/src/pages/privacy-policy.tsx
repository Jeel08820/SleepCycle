import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { FooterNavigation } from "../components/ui/navigation";
import { Shield, Lock, Eye, Database, Cookie, Settings, Smartphone } from "lucide-react";

export default function PrivacyPolicy() {
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
            <Shield className="relative h-20 w-20 text-purple-400 mx-auto mb-4" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Privacy Policy
          </h1>
          
          <p className="text-gray-200 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information 
            when you use our sleep cycle calculator and related services.
          </p>

          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex-1 max-w-4xl mx-auto w-full px-4 pb-16">
          <div className="space-y-8">
            {/* Information We Collect */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                  <Database className="h-8 w-8 text-purple-400" />
                  Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl border border-purple-400/20">
                    <h4 className="font-semibold text-purple-300 mb-2">Usage Data</h4>
                    <p className="text-gray-300 text-sm">
                      We collect anonymous usage statistics to improve our service, including calculation requests, 
                      page views, and feature usage patterns.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl border border-blue-400/20">
                    <h4 className="font-semibold text-blue-300 mb-2">Technical Data</h4>
                    <p className="text-gray-300 text-sm">
                      Browser type, device information, and IP address for security and service optimization purposes.
                    </p>
                  </div>
                </div>
                
                <div className="p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl border border-green-400/20">
                  <h4 className="font-semibold text-green-300 mb-2">What We Don't Collect</h4>
                  <p className="text-gray-300 text-sm">
                    We do not collect personal information such as names, email addresses, or any personally identifiable data. 
                    Your sleep calculations remain completely anonymous.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Information */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-blue-500/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                  <Eye className="h-8 w-8 text-blue-400" />
                  How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-400/20">
                    <h5 className="font-semibold text-blue-300 mb-2">Service Improvement</h5>
                    <p className="text-sm text-gray-300">Analyze usage patterns to enhance calculator accuracy and user experience.</p>
                  </div>
                  
                  <div className="p-4 bg-indigo-500/10 rounded-lg border border-indigo-400/20">
                    <h5 className="font-semibold text-indigo-300 mb-2">Technical Support</h5>
                    <p className="text-sm text-gray-300">Resolve technical issues and ensure optimal performance across devices.</p>
                  </div>
                  
                  <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-400/20">
                    <h5 className="font-semibold text-purple-300 mb-2">Security</h5>
                    <p className="text-sm text-gray-300">Protect against fraud, abuse, and ensure service security.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cookies and Tracking */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-green-500/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                  <Cookie className="h-8 w-8 text-green-400" />
                  Cookies and Tracking Technologies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  We use cookies and similar technologies to enhance your experience and analyze service usage. 
                  These technologies help us understand how you interact with our sleep calculator and improve our services.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl border border-green-400/20">
                    <h4 className="font-semibold text-green-300 mb-2">Essential Cookies</h4>
                    <p className="text-gray-300 text-sm">
                      Required for basic functionality, such as remembering your preferences and ensuring secure connections.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl border border-emerald-400/20">
                    <h4 className="font-semibold text-emerald-300 mb-2">Analytics Cookies</h4>
                    <p className="text-gray-300 text-sm">
                      Help us understand how visitors use our site, enabling us to improve functionality and user experience.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Google Services */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-yellow-500/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                  <Settings className="h-8 w-8 text-yellow-400" />
                  Google Services and Third-Party Integration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-yellow-500/10 rounded-xl border border-yellow-400/20">
                  <h4 className="font-semibold text-yellow-300 mb-2">Google Analytics</h4>
                  <p className="text-gray-300 text-sm mb-3">
                    We use Google Analytics to understand how our service is used and improve user experience. 
                    Google may collect and process data according to their privacy policy.
                  </p>
                  <p className="text-gray-300 text-sm">
                    <a href="https://policies.google.com/technologies/partner-sites" 
                       className="text-blue-400 hover:text-blue-300 underline" 
                       target="_blank" 
                       rel="noopener noreferrer">
                      Learn how Google collects and uses data
                    </a>
                  </p>
                </div>
                
                <div className="p-4 bg-orange-500/10 rounded-xl border border-orange-400/20">
                  <h4 className="font-semibold text-orange-300 mb-2">Ad Personalization</h4>
                  <p className="text-gray-300 text-sm">
                    Google may use cookies for ad personalization and measurement. You can control ad personalization 
                    in your Google account settings at any time.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-red-500/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                  <Lock className="h-8 w-8 text-red-400" />
                  Data Security and Protection
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-xl border border-red-400/20">
                    <h4 className="font-semibold text-red-300 mb-2">Encryption</h4>
                    <p className="text-gray-300 text-sm">
                      All data transmission is encrypted using industry-standard SSL/TLS protocols to protect your information.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-xl border border-pink-400/20">
                    <h4 className="font-semibold text-pink-300 mb-2">Access Control</h4>
                    <p className="text-gray-300 text-sm">
                      Strict access controls ensure only authorized personnel can access our systems and data.
                    </p>
                  </div>
                </div>
                
                <div className="p-4 bg-gradient-to-r from-rose-500/10 to-red-500/10 rounded-xl border border-rose-400/20">
                  <h4 className="font-semibold text-rose-300 mb-2">Regular Security Audits</h4>
                  <p className="text-gray-300 text-sm">
                    We conduct regular security assessments and updates to maintain the highest level of data protection.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-indigo-500/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                  <Shield className="h-8 w-8 text-indigo-400" />
                  Your Rights and Choices
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-indigo-500/10 rounded-lg border border-indigo-400/20">
                    <h5 className="font-semibold text-indigo-300 mb-2">Cookie Preferences</h5>
                    <p className="text-sm text-gray-300">Control cookie settings through your browser preferences and settings.</p>
                  </div>
                  
                  <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-400/20">
                    <h5 className="font-semibold text-purple-300 mb-2">Data Access</h5>
                    <p className="text-sm text-gray-300">Request information about what data we have collected about your usage.</p>
                  </div>
                  
                  <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-400/20">
                    <h5 className="font-semibold text-blue-300 mb-2">Data Deletion</h5>
                    <p className="text-sm text-gray-300">Request deletion of any stored data related to your usage.</p>
                  </div>
                  
                  <div className="p-4 bg-cyan-500/10 rounded-lg border border-cyan-400/20">
                    <h5 className="font-semibold text-cyan-300 mb-2">Opt-Out</h5>
                    <p className="text-sm text-gray-300">Opt out of analytics tracking and data collection at any time.</p>
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
                  If you have any questions about this privacy policy or our data practices, please contact us:
                </p>
                <div className="p-4 bg-gray-700/30 rounded-lg border border-gray-600/30">
                  <p className="text-gray-300 text-sm">
                    <strong>Email:</strong> privacy@sleepcycle.app<br />
                    <strong>Subject:</strong> Privacy Policy Inquiry
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Policy Updates */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Policy Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  We may update this privacy policy from time to time to reflect changes in our practices or for other operational, 
                  legal, or regulatory reasons. We will notify users of any material changes by posting the new policy on this page 
                  and updating the "Last Updated" date.
                </p>
                <div className="mt-4 p-4 bg-purple-500/10 rounded-lg border border-purple-400/20">
                  <p className="text-purple-300 text-sm">
                    <strong>Last Updated:</strong> December 2024
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Sleep Privacy & Security Education */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-blue-500/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                  <Shield className="h-8 w-8 text-blue-400" />
                  Sleep Privacy & Security Best Practices
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Protecting your sleep data and privacy is crucial in today's digital world. Understanding how to safeguard 
                  your personal information while using sleep tracking and optimization tools helps ensure both security and better sleep.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                    <h4 className="font-semibold text-blue-300 mb-3">Digital Privacy Protection</h4>
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li>• Use strong, unique passwords</li>
                      <li>• Enable two-factor authentication</li>
                      <li>• Regularly review app permissions</li>
                      <li>• Keep software updated</li>
                      <li>• Use VPN for public networks</li>
                      <li>• Monitor account activity</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-indigo-500/10 rounded-xl border border-indigo-400/20">
                    <h4 className="font-semibold text-indigo-300 mb-3">Sleep Data Security</h4>
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li>• Choose reputable sleep apps</li>
                      <li>• Review privacy policies carefully</li>
                      <li>• Limit data sharing permissions</li>
                      <li>• Use local storage when possible</li>
                      <li>• Regular data backups</li>
                      <li>• Secure device access</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl border border-blue-400/20">
                  <h4 className="font-semibold text-blue-300 mb-3">Understanding Data Collection</h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    Sleep tracking apps and devices collect various types of data to provide personalized insights. 
                    Understanding what data is collected and how it's used helps you make informed decisions about your privacy.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-3 bg-blue-600/10 rounded-lg">
                      <h5 className="font-semibold text-blue-200 mb-2 text-sm">Personal Data</h5>
                      <ul className="text-xs text-gray-300 space-y-1">
                        <li>• Sleep duration and timing</li>
                        <li>• Sleep quality metrics</li>
                        <li>• Bedtime and wake time</li>
                        <li>• Sleep environment data</li>
                      </ul>
                    </div>
                    <div className="p-3 bg-indigo-600/10 rounded-lg">
                      <h5 className="font-semibold text-indigo-200 mb-2 text-sm">Device Data</h5>
                      <ul className="text-xs text-gray-300 space-y-1">
                        <li>• Movement and activity</li>
                        <li>• Heart rate patterns</li>
                        <li>• Breathing patterns</li>
                        <li>• Environmental sensors</li>
                      </ul>
                    </div>
                    <div className="p-3 bg-purple-600/10 rounded-lg">
                      <h5 className="font-semibold text-purple-200 mb-2 text-sm">Usage Data</h5>
                      <ul className="text-xs text-gray-300 space-y-1">
                        <li>• App interactions</li>
                        <li>• Feature usage patterns</li>
                        <li>• Settings preferences</li>
                        <li>• Performance metrics</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sleep Technology Privacy */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-green-500/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                  <Smartphone className="h-8 w-8 text-green-400" />
                  Sleep Technology & Privacy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-green-500/10 rounded-xl border border-green-400/20">
                    <h4 className="font-semibold text-green-300 mb-3">Smart Devices & Privacy</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Smart sleep devices, including wearables and bedside monitors, collect sensitive health data. 
                      Understanding their privacy implications helps you make informed choices about which devices to use.
                    </p>
                    <div className="mt-3 p-3 bg-green-600/10 rounded-lg">
                      <h5 className="font-semibold text-green-200 mb-2 text-sm">Privacy Considerations:</h5>
                      <ul className="text-xs text-gray-300 space-y-1">
                        <li>• Data encryption standards</li>
                        <li>• Cloud storage security</li>
                        <li>• Third-party data sharing</li>
                        <li>• Local vs. cloud processing</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-emerald-500/10 rounded-xl border border-emerald-400/20">
                    <h4 className="font-semibold text-emerald-300 mb-3">App Privacy Settings</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Most sleep tracking apps offer various privacy settings and controls. 
                      Taking time to configure these settings helps protect your personal information.
                    </p>
                    <div className="mt-3 p-3 bg-emerald-600/10 rounded-lg">
                      <h5 className="font-semibold text-emerald-200 mb-2 text-sm">Key Settings:</h5>
                      <ul className="text-xs text-gray-300 space-y-1">
                        <li>• Data sharing permissions</li>
                        <li>• Analytics and tracking</li>
                        <li>• Third-party integrations</li>
                        <li>• Data retention policies</li>
                      </ul>
                    </div>
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
