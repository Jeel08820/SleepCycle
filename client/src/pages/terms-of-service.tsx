import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { FooterNavigation } from "../components/ui/navigation";
import { FileText, Shield, AlertTriangle, CheckCircle, XCircle, Info, BookOpen } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full animate-float blur-sm"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full animate-float blur-sm" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full animate-pulse blur-sm" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="flex-shrink-0 text-center py-16 px-4">
          <div className="relative inline-block mb-8">
            <div className="absolute -inset-2 bg-purple-500/20 rounded-full blur-xl animate-pulse-slow"></div>
            <FileText className="relative h-20 w-20 text-purple-400 mx-auto mb-4" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Terms of Service
          </h1>
          
          <p className="text-gray-200 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            These terms govern your use of our sleep cycle calculator and related services. 
            By using our service, you agree to these terms and conditions.
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
            {/* Acceptance of Terms */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-green-500/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                  <CheckCircle className="h-8 w-8 text-green-400" />
                  Acceptance of Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  By accessing and using SleepCycle's sleep calculator and related services, you accept and agree to be bound by the terms and provision of this agreement. 
                  If you do not agree to abide by the above, please do not use this service.
                </p>
                
                <div className="p-4 bg-green-500/10 rounded-xl border border-green-400/20">
                  <h4 className="font-semibold text-green-300 mb-2">Important Notice</h4>
                  <p className="text-gray-300 text-sm">
                    These terms constitute a legally binding agreement between you and SleepCycle. 
                    Please read them carefully before using our services.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Service Description */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-blue-500/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                  <Info className="h-8 w-8 text-blue-400" />
                  Description of Service
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  SleepCycle provides a sleep cycle calculator that helps users optimize their sleep schedule based on scientific research 
                  about 90-minute sleep cycles. Our service includes educational content about sleep science and optimization tips.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                    <h4 className="font-semibold text-blue-300 mb-2">What We Provide</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Sleep cycle calculations</li>
                      <li>• Educational sleep content</li>
                      <li>• Sleep optimization tips</li>
                      <li>• Scientific sleep information</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-indigo-500/10 rounded-xl border border-indigo-400/20">
                    <h4 className="font-semibold text-indigo-300 mb-2">Service Limitations</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Educational purposes only</li>
                      <li>• Not medical advice</li>
                      <li>• Results may vary</li>
                      <li>• Individual differences apply</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* User Responsibilities */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                  <Shield className="h-8 w-8 text-purple-400" />
                  User Responsibilities and Conduct
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-400/20">
                    <h4 className="font-semibold text-purple-300 mb-2">Acceptable Use</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Use for personal sleep optimization</li>
                      <li>• Educational and research purposes</li>
                      <li>• Sharing with family and friends</li>
                      <li>• Professional sleep coaching</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-xl border border-pink-400/20">
                    <h4 className="font-semibold text-pink-300 mb-2">Prohibited Activities</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Commercial redistribution</li>
                      <li>• Modifying or reverse engineering</li>
                      <li>• Attempting to gain unauthorized access</li>
                      <li>• Using for illegal purposes</li>
                    </ul>
                  </div>
                </div>
                
                <div className="p-4 bg-gradient-to-r from-rose-500/10 to-red-500/10 rounded-xl border border-rose-400/20">
                  <h4 className="font-semibold text-rose-300 mb-2">Content Guidelines</h4>
                  <p className="text-gray-300 text-sm">
                    Users must not upload, share, or transmit any content that violates applicable laws, 
                    infringes on intellectual property rights, or contains harmful, offensive, or inappropriate material.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-yellow-500/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                  <FileText className="h-8 w-8 text-yellow-400" />
                  Intellectual Property Rights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-yellow-500/10 rounded-xl border border-yellow-400/20">
                    <h4 className="font-semibold text-yellow-300 mb-2">Our Rights</h4>
                    <p className="text-gray-300 text-sm">
                      SleepCycle retains all rights, title, and interest in and to the service, including all intellectual property rights. 
                      The service and its content are protected by copyright, trademark, and other laws.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-orange-500/10 rounded-xl border border-orange-400/20">
                    <h4 className="font-semibold text-orange-300 mb-2">Your Rights</h4>
                    <p className="text-gray-300 text-sm">
                      You retain ownership of any content you create using our service. However, you grant us a license to use 
                      anonymous usage data to improve our services.
                    </p>
                  </div>
                </div>
                
                <div className="p-4 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl border border-orange-400/20">
                  <h4 className="font-semibold text-orange-300 mb-2">License Restrictions</h4>
                  <p className="text-gray-300 text-sm">
                    You may not copy, modify, distribute, sell, or lease any part of our service or included software, 
                    except as expressly permitted by these terms.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Disclaimers */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-red-500/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                  <AlertTriangle className="h-8 w-8 text-red-400" />
                  Disclaimers and Limitations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-red-500/10 rounded-xl border border-red-400/20">
                  <h4 className="font-semibold text-red-300 mb-2">Medical Disclaimer</h4>
                  <p className="text-gray-300 text-sm mb-3">
                    Our sleep calculator and educational content are provided for informational and educational purposes only. 
                    They are not intended to be a substitute for professional medical advice, diagnosis, or treatment.
                  </p>
                  <p className="text-gray-300 text-sm">
                    Always seek the advice of your physician or other qualified health provider with any questions you may have 
                    regarding a medical condition or sleep disorder.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-xl border border-red-400/20">
                    <h4 className="font-semibold text-red-300 mb-2">Service Availability</h4>
                    <p className="text-gray-300 text-sm">
                      We strive to maintain high service availability but cannot guarantee uninterrupted access. 
                      The service is provided "as is" without warranties of any kind.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-xl border border-pink-400/20">
                    <h4 className="font-semibold text-pink-300 mb-2">Accuracy of Information</h4>
                    <p className="text-gray-300 text-sm">
                      While we strive for accuracy, sleep science is complex and individual results may vary. 
                      Our calculations are estimates based on general scientific principles.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Privacy and Data */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-indigo-500/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                  <Shield className="h-8 w-8 text-indigo-400" />
                  Privacy and Data Protection
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, 
                  which is incorporated into these Terms of Service by reference.
                </p>
                
                <div className="p-4 bg-indigo-500/10 rounded-xl border border-indigo-400/20">
                  <h4 className="font-semibold text-indigo-300 mb-2">Data Collection</h4>
                  <p className="text-gray-300 text-sm">
                    We collect anonymous usage data to improve our services. We do not collect personal information 
                    such as names, email addresses, or any personally identifiable data.
                  </p>
                </div>
                
                <div className="p-4 bg-purple-500/10 rounded-xl border border-purple-400/20">
                  <h4 className="font-semibold text-purple-300 mb-2">Data Security</h4>
                  <p className="text-gray-300 text-sm">
                    We implement appropriate security measures to protect your information. However, no method of transmission 
                    over the internet is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-gray-500/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Termination of Service</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-gray-500/10 rounded-lg border border-gray-400/20">
                    <h5 className="font-semibold text-gray-300 mb-2">By You</h5>
                    <p className="text-sm text-gray-300">You may stop using our service at any time by simply discontinuing use.</p>
                  </div>
                  
                  <div className="p-4 bg-gray-600/10 rounded-lg border border-gray-500/20">
                    <h5 className="font-semibold text-gray-300 mb-2">By Us</h5>
                    <p className="text-sm text-gray-300">We may terminate or suspend access to our service immediately, without prior notice, for any reason.</p>
                  </div>
                </div>
                
                <div className="p-4 bg-gray-700/30 rounded-lg border border-gray-600/30">
                  <h4 className="font-semibold text-gray-300 mb-2">Effect of Termination</h4>
                  <p className="text-gray-300 text-sm">
                    Upon termination, your right to use the service will cease immediately. All provisions of the Terms which by their nature 
                    should survive termination shall survive termination.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Governing Law and Disputes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-300">
                    These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which SleepCycle operates, 
                    without regard to its conflict of law provisions.
                  </p>
                  
                  <div className="p-4 bg-purple-500/10 rounded-xl border border-purple-400/20">
                    <h4 className="font-semibold text-purple-300 mb-2">Dispute Resolution</h4>
                    <p className="text-gray-300 text-sm">
                      Any disputes arising from these Terms or your use of the service shall be resolved through good faith negotiations. 
                      If such negotiations fail, disputes may be resolved through appropriate legal proceedings.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Changes to Terms */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-blue-500/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-300">
                    We reserve the right to modify or replace these Terms at any time. If a revision is material, 
                    we will try to provide at least 30 days notice prior to any new terms taking effect.
                  </p>
                  
                  <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                    <h4 className="font-semibold text-blue-300 mb-2">Your Responsibility</h4>
                    <p className="text-gray-300 text-sm">
                      It is your responsibility to review these Terms periodically for changes. Your continued use of the service 
                      after any changes constitutes acceptance of the new Terms.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-green-500/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="p-4 bg-green-500/10 rounded-lg border border-green-400/20">
                  <p className="text-green-300 text-sm">
                    <strong>Email:</strong> legal@sleepcycle.app<br />
                    <strong>Subject:</strong> Terms of Service Inquiry
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Effective Date */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Effective Date</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-400/20">
                  <p className="text-purple-300 text-sm">
                    <strong>Effective Date:</strong> December 2024<br />
                    <strong>Last Updated:</strong> December 2024
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Sleep Education & Legal Resources */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                  <BookOpen className="h-8 w-8 text-purple-400" />
                  Sleep Education & Legal Resources
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Understanding your rights and responsibilities when using sleep optimization tools is important. 
                  This section provides educational resources about sleep health, legal considerations, and how to 
                  make informed decisions about your sleep technology usage.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-purple-500/10 rounded-xl border border-purple-400/20">
                    <h4 className="font-semibold text-purple-300 mb-3">Sleep Health Education</h4>
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li>• Understanding sleep cycles</li>
                      <li>• Sleep hygiene best practices</li>
                      <li>• Common sleep disorders</li>
                      <li>• Sleep optimization strategies</li>
                      <li>• Technology and sleep interaction</li>
                      <li>• Professional sleep consultation</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-indigo-500/10 rounded-xl border border-indigo-400/20">
                    <h4 className="font-semibold text-indigo-300 mb-3">Legal Considerations</h4>
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li>• User rights and protections</li>
                      <li>• Data privacy regulations</li>
                      <li>• Service terms understanding</li>
                      <li>• Dispute resolution processes</li>
                      <li>• Consumer protection laws</li>
                      <li>• International legal compliance</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-xl border border-purple-400/20">
                  <h4 className="font-semibold text-purple-300 mb-3">Making Informed Decisions</h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    When using sleep optimization tools and services, it's important to understand both the benefits 
                    and the terms of use. This knowledge helps you make informed decisions about your sleep health journey.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-3 bg-purple-600/10 rounded-lg">
                      <h5 className="font-semibold text-purple-200 mb-2 text-sm">Before Using Services</h5>
                      <ul className="text-xs text-gray-300 space-y-1">
                        <li>• Read terms carefully</li>
                        <li>• Understand data collection</li>
                        <li>• Review privacy policies</li>
                        <li>• Check user reviews</li>
                      </ul>
                    </div>
                    <div className="p-3 bg-indigo-600/10 rounded-lg">
                      <h5 className="font-semibold text-indigo-200 mb-2 text-sm">During Usage</h5>
                      <ul className="text-xs text-gray-300 space-y-1">
                        <li>• Monitor data sharing</li>
                        <li>• Update privacy settings</li>
                        <li>• Report issues promptly</li>
                        <li>• Keep records of concerns</li>
                      </ul>
                    </div>
                    <div className="p-3 bg-blue-600/10 rounded-lg">
                      <h5 className="font-semibold text-blue-200 mb-2 text-sm">If Issues Arise</h5>
                      <ul className="text-xs text-gray-300 space-y-1">
                        <li>• Contact support first</li>
                        <li>• Document all interactions</li>
                        <li>• Know your rights</li>
                        <li>• Seek legal advice if needed</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Consumer Rights & Protections */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-green-500/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                  <Shield className="h-8 w-8 text-green-400" />
                  Consumer Rights & Protections
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-green-500/10 rounded-xl border border-green-400/20">
                    <h4 className="font-semibold text-green-300 mb-3">Your Rights as a User</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Understanding your rights helps ensure you receive fair treatment and proper service. 
                      These rights are protected by various consumer protection laws and regulations.
                    </p>
                    <div className="mt-3 p-3 bg-green-600/10 rounded-lg">
                      <h5 className="font-semibold text-green-200 mb-2 text-sm">Key Rights:</h5>
                      <ul className="text-xs text-gray-300 space-y-1">
                        <li>• Right to clear information</li>
                        <li>• Right to privacy protection</li>
                        <li>• Right to fair treatment</li>
                        <li>• Right to dispute resolution</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-emerald-500/10 rounded-xl border border-emerald-400/20">
                    <h4 className="font-semibold text-emerald-300 mb-3">Protection Mechanisms</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Various mechanisms exist to protect consumers in the digital space. 
                      Understanding these protections helps you navigate service relationships confidently.
                    </p>
                    <div className="mt-3 p-3 bg-emerald-600/10 rounded-lg">
                      <h5 className="font-semibold text-emerald-200 mb-2 text-sm">Protections Include:</h5>
                      <ul className="text-xs text-gray-300 space-y-1">
                        <li>• Data protection regulations</li>
                        <li>• Consumer protection laws</li>
                        <li>• Industry standards</li>
                        <li>• User advocacy groups</li>
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
