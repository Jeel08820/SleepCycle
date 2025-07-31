import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TimePicker from "@/components/ui/time-picker";
import SleepResultCard from "@/components/ui/sleep-result-card";
import { Moon, Sun, Bed, Calculator, Clock, Info, Lightbulb } from "lucide-react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

type CalculatorMode = 'wakeup' | 'bedtime';

interface SleepTime {
  time: string;
  cycles: number;
  totalSleep: number;
}

interface TimeValue {
  hour: string;
  minute: string;
  ampm: string;
}

export default function SleepCalculator() {
  const [mode, setMode] = useState<CalculatorMode>('wakeup');
  const [wakeTime, setWakeTime] = useState<TimeValue>({ hour: '6', minute: '30', ampm: 'AM' });
  const [currentTime, setCurrentTime] = useState<string>('');
  const [bedtimeResults, setBedtimeResults] = useState<SleepTime[]>([]);
  const [wakeTimeResults, setWakeTimeResults] = useState<SleepTime[]>([]);
  const [showBedtimeResults, setShowBedtimeResults] = useState(false);
  const [showWakeTimeResults, setShowWakeTimeResults] = useState(false);
  const queryClient = useQueryClient();

  // Initialize data mutation
  const initializeDataMutation = useMutation({
    mutationFn: () => fetch('/api/initialize-data', { method: 'POST' }).then(res => res.json()),
    onSuccess: () => {
      console.log('Data initialized successfully');
    },
  });

  // Save sleep calculation mutation
  const saveCalculationMutation = useMutation({
    mutationFn: (calculation: any) => 
      fetch('/api/sleep-calculations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(calculation),
      }).then(res => res.json()),
    onSuccess: () => {
      // Calculation saved successfully
    },
  });

  const SLEEP_CYCLE_MINUTES = 90;
  const FALL_ASLEEP_MINUTES = 15;

  // Initialize data on mount
  useEffect(() => {
    initializeDataMutation.mutate();
  }, []);

  // Update current time every second
  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true });
      setCurrentTime(timeString);
    };

    updateCurrentTime();
    const interval = setInterval(updateCurrentTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Auto-calculate bedtimes when wake time changes
  useEffect(() => {
    if (mode === 'wakeup') {
      calculateBedtimes();
    }
  }, [wakeTime, mode]);

  const parseTime = (hour: string, minute: string, ampm: string) => {
    let parsedHour = parseInt(hour);
    if (ampm === 'PM' && parsedHour !== 12) {
      parsedHour += 12;
    } else if (ampm === 'AM' && parsedHour === 12) {
      parsedHour = 0;
    }
    return { hour: parsedHour, minute: parseInt(minute) };
  };

  const formatTime = (hour: number, minute: number) => {
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour === 0 ? 12 : (hour > 12 ? hour - 12 : hour);
    const displayMinute = minute.toString().padStart(2, '0');
    return `${displayHour}:${displayMinute} ${period}`;
  };

  const calculateBedtimes = () => {
    const time = parseTime(wakeTime.hour, wakeTime.minute, wakeTime.ampm);
    const wakeTimeMinutes = time.hour * 60 + time.minute;

    const cycles = [6, 5, 4, 3];
    const results = cycles.map(cycleCount => {
      const sleepTimeMinutes = cycleCount * SLEEP_CYCLE_MINUTES + FALL_ASLEEP_MINUTES;
      let bedtimeMinutes = wakeTimeMinutes - sleepTimeMinutes;
      
      if (bedtimeMinutes < 0) {
        bedtimeMinutes += 24 * 60;
      }
      
      const bedtimeHour = Math.floor(bedtimeMinutes / 60);
      const bedtimeMinute = bedtimeMinutes % 60;
      
      return {
        time: formatTime(bedtimeHour, bedtimeMinute),
        cycles: cycleCount,
        totalSleep: (cycleCount * SLEEP_CYCLE_MINUTES) / 60
      };
    });

    setBedtimeResults(results);
    setShowBedtimeResults(true);

    // Save calculations to database
    results.forEach(result => {
      saveCalculationMutation.mutate({
        calculationType: 'wakeup',
        inputTime: `${wakeTime.hour}:${wakeTime.minute} ${wakeTime.ampm}`,
        targetTime: result.time,
        sleepCycles: result.cycles,
        totalSleepHours: result.totalSleep.toString(),
        isOptimal: result.cycles >= 5,
      });
    });
  };

  const calculateWakeTimes = () => {
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes() + FALL_ASLEEP_MINUTES;

    const cycles = [3, 4, 5, 6];
    const results = cycles.map(cycleCount => {
      const sleepTimeMinutes = cycleCount * SLEEP_CYCLE_MINUTES;
      let wakeTimeMinutes = currentMinutes + sleepTimeMinutes;
      
      if (wakeTimeMinutes >= 24 * 60) {
        wakeTimeMinutes -= 24 * 60;
      }
      
      const wakeTimeHour = Math.floor(wakeTimeMinutes / 60);
      const wakeTimeMinute = wakeTimeMinutes % 60;
      
      return {
        time: formatTime(wakeTimeHour, wakeTimeMinute),
        cycles: cycleCount,
        totalSleep: (cycleCount * SLEEP_CYCLE_MINUTES) / 60
      };
    });

    setWakeTimeResults(results);
    setShowWakeTimeResults(true);

    // Save calculations to database
    results.forEach(result => {
      saveCalculationMutation.mutate({
        calculationType: 'bedtime',
        inputTime: currentTime,
        targetTime: result.time,
        sleepCycles: result.cycles,
        totalSleepHours: result.totalSleep.toString(),
        isOptimal: result.cycles >= 5,
      });
    });
  };

  return (
    <div className="min-h-screen relative">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full animate-float blur-sm"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full animate-float blur-sm" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full animate-float blur-sm" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-60 left-1/2 w-16 h-16 bg-gradient-to-br from-green-500/15 to-emerald-500/15 rounded-full animate-float blur-sm" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-br from-indigo-500/15 to-violet-500/15 rounded-full animate-float blur-sm" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-gradient-to-br from-rose-500/20 to-pink-500/20 rounded-full animate-float blur-sm" style={{animationDelay: '2.5s'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex flex-col">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <Moon className="text-5xl text-purple-400 mr-4 animate-pulse-slow drop-shadow-lg" size={56} />
              <div className="absolute -inset-2 bg-purple-500/20 rounded-full blur-xl animate-pulse-slow"></div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-2xl">
              Sleep Calculator
            </h1>
            <div className="relative">
              <Sun className="text-5xl text-yellow-400 ml-4 animate-pulse-slow drop-shadow-lg" size={56} style={{animationDelay: '1s'}} />
              <div className="absolute -inset-2 bg-yellow-500/20 rounded-full blur-xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
          <p className="text-gray-200 text-xl max-w-3xl mx-auto leading-relaxed">
            Optimize your sleep cycles and wake up refreshed. Based on 90-minute sleep cycles for natural awakening.
          </p>
          <div className="mt-4 flex justify-center space-x-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>
          </div>
        </header>

        {/* Main Calculator Container */}
        <div className="flex-1 max-w-4xl mx-auto w-full">
          {/* Google AdSense Banner */}
          {/* 
            INSTRUCTIONS FOR GOOGLE ADSENSE INTEGRATION:
            
            1. Sign up for Google AdSense at https://www.google.com/adsense/
            2. Add your domain to AdSense and get approved
            3. Create an ad unit in AdSense dashboard
            4. Replace this entire section with the AdSense code provided by Google
            
            Example AdSense code structure for 728x90:
            <ins className="adsbygoogle"
                 style={{display:"inline-block", width:"728px", height:"90px"}}
                 data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
                 data-ad-slot="XXXXXXXXXX"
                 data-ad-format="leaderboard"></ins>
            
            Don't forget to add the AdSense script to your HTML head:
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"></script>
          */}
          <div className="mb-8 flex justify-center px-4">
            <Card className="bg-gradient-to-r from-slate-800/40 via-gray-800/40 to-slate-800/40 backdrop-blur-sm border border-gray-600/30 shadow-xl">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-lg border-2 border-dashed border-gray-500/40 p-4 flex items-center justify-center" style={{width: '728px', height: '90px', maxWidth: '100%'}}>
                    <div className="flex items-center space-x-3">
                      <svg className="w-8 h-8 text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                      <div className="text-center">
                        <p className="text-gray-400 font-medium text-sm">Google AdSense</p>
                        <p className="text-gray-500 text-xs">728×90 Leaderboard Banner</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Calculator Mode Toggle */}
          <div className="flex justify-center mb-8 px-4">
            <Card className="bg-gradient-to-r from-slate-800/60 via-purple-900/40 to-slate-800/60 backdrop-blur-sm border-2 border-purple-400/30 p-3 shadow-xl w-full max-w-lg">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-2">
                <Button
                  onClick={() => setMode('wakeup')}
                  className={`flex-1 px-4 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold transition-all duration-500 transform text-sm sm:text-base ${
                    mode === 'wakeup'
                      ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white shadow-2xl scale-105 shadow-purple-500/50'
                      : 'bg-slate-700/50 text-gray-300 hover:text-white hover:bg-slate-600/50 hover:scale-102'
                  }`}
                >
                  <Sun className="mr-2 drop-shadow-lg flex-shrink-0" size={18} />
                  <span className="truncate">Wake Up Time</span>
                </Button>
                <Button
                  onClick={() => setMode('bedtime')}
                  className={`flex-1 px-4 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold transition-all duration-500 transform text-sm sm:text-base ${
                    mode === 'bedtime'
                      ? 'bg-gradient-to-r from-yellow-500 via-orange-500 to-amber-500 text-white shadow-2xl scale-105 shadow-yellow-500/50'
                      : 'bg-slate-700/50 text-gray-300 hover:text-white hover:bg-slate-600/50 hover:scale-102'
                  }`}
                >
                  <Bed className="mr-2 drop-shadow-lg flex-shrink-0" size={18} />
                  <span className="truncate">Go to Bed Now</span>
                </Button>
              </div>
            </Card>
          </div>

          {/* Wake Up Time Calculator */}
          {mode === 'wakeup' && (
            <div className="animate-fade-in">
              <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20 shadow-2xl mb-8">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-white mb-2">What time do you want to wake up?</h2>
                    <p className="text-gray-400">We'll calculate the best bedtimes for optimal sleep cycles</p>
                  </div>

                  <div className="flex justify-center mb-8 px-4">
                    <TimePicker
                      value={wakeTime}
                      onChange={setWakeTime}
                      className="flex items-center space-x-2 w-full max-w-md"
                    />
                  </div>

                  <div className="text-center px-4">
                    <Button
                      onClick={calculateBedtimes}
                      className="bg-purple-gradient hover:opacity-90 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base w-full sm:w-auto max-w-xs"
                    >
                      <Calculator className="mr-2 flex-shrink-0" size={16} />
                      <span>Calculate Bedtime</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Bedtime Results */}
              {showBedtimeResults && (
                <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20 shadow-2xl animate-fade-in">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">Recommended Bedtimes</h3>
                      <p className="text-gray-400">The average human takes 15 minutes to fall asleep</p>
                      <p className="text-sm text-purple-300 mt-2">
                        To wake up refreshed at <span className="font-bold">{wakeTime.hour}:{wakeTime.minute} {wakeTime.ampm}</span>, go to sleep at one of these times:
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                      {bedtimeResults.map((result, index) => (
                        <SleepResultCard
                          key={index}
                          time={result.time}
                          cycles={result.cycles}
                          totalSleep={result.totalSleep}
                          type="bedtime"
                          index={index}
                        />
                      ))}
                    </div>

                    <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
                      <p className="text-blue-300 text-sm text-center">
                        <Info className="inline mr-2" size={16} />
                        A good night's sleep consists of 5-6 complete sleep cycles (90 minutes each)
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          {/* Go to Bed Now Calculator */}
          {mode === 'bedtime' && (
            <div className="animate-fade-in">
              <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20 shadow-2xl mb-8">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-white mb-2">Going to bed now?</h2>
                    <p className="text-gray-400">We'll calculate the optimal wake-up times for you</p>
                    <div className="mt-4 text-yellow-300">
                      <Clock className="inline mr-2" size={16} />
                      Current time: <span className="font-bold">{currentTime}</span>
                    </div>
                  </div>

                  <div className="text-center px-4">
                    <Button
                      onClick={calculateWakeTimes}
                      className="bg-yellow-gradient hover:opacity-90 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base w-full sm:w-auto max-w-xs"
                    >
                      <Bed className="mr-2 flex-shrink-0" size={16} />
                      <span>Calculate Wake-up Time</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Wake-up Results */}
              {showWakeTimeResults && (
                <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20 shadow-2xl animate-fade-in">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">Optimal Wake-up Times</h3>
                      <p className="text-gray-400">If you go to sleep right now, wake up at one of these times:</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                      {wakeTimeResults.map((result, index) => (
                        <SleepResultCard
                          key={index}
                          time={result.time}
                          cycles={result.cycles}
                          totalSleep={result.totalSleep}
                          type="waketime"
                          index={index}
                        />
                      ))}
                    </div>

                    <div className="p-4 bg-yellow-500/10 rounded-xl border border-yellow-500/20">
                      <p className="text-yellow-300 text-sm text-center">
                        <Lightbulb className="inline mr-2" size={16} />
                        Wake up between sleep cycles to feel more refreshed and energized
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}


        </div>

        {/* Sleep Cycles Education Section */}
        <section className="mt-16 max-w-6xl mx-auto px-4">
          <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20 shadow-2xl">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent mb-4">
                  Understanding Sleep Cycles
                </h2>
                <p className="text-gray-300 text-base sm:text-lg">
                  Learn how your brain naturally cycles through different stages of sleep
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
                {/* Sleep Stages */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                    The 4 Stages of Sleep
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl border border-purple-400/20">
                      <h4 className="font-semibold text-purple-300 mb-2">Stage 1: Light Sleep (5%)</h4>
                      <p className="text-gray-400 text-sm">The transition between wakefulness and sleep. Muscles relax and brain waves slow down.</p>
                    </div>

                    <div className="p-4 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl border border-blue-400/20">
                      <h4 className="font-semibold text-blue-300 mb-2">Stage 2: Deeper Sleep (45%)</h4>
                      <p className="text-gray-400 text-sm">Heart rate and breathing slow down. Body temperature drops. Most of your sleep time.</p>
                    </div>

                    <div className="p-4 bg-gradient-to-r from-indigo-500/10 to-violet-500/10 rounded-xl border border-indigo-400/20">
                      <h4 className="font-semibold text-indigo-300 mb-2">Stage 3: Deep Sleep (25%)</h4>
                      <p className="text-gray-400 text-sm">The most restorative stage. Physical recovery, immune system boost, memory consolidation.</p>
                    </div>

                    <div className="p-4 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-xl border border-violet-400/20">
                      <h4 className="font-semibold text-violet-300 mb-2">REM Sleep (25%)</h4>
                      <p className="text-gray-400 text-sm">Rapid Eye Movement sleep. Dreams occur, brain processes emotions and memories.</p>
                    </div>
                  </div>
                </div>

                {/* Sleep Cycle Visualization */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    90-Minute Sleep Cycles
                  </h3>

                  <div className="p-6 bg-slate-700/30 rounded-xl border border-blue-400/20">
                    <div className="mb-4">
                      <p className="text-gray-300 mb-4">Each complete sleep cycle lasts about 90 minutes and includes all 4 stages:</p>
                    </div>

                    {/* Visual representation of a sleep cycle */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"></div>
                        <span className="text-sm text-gray-300">0-15 min: Light Sleep</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-16 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-300">15-45 min: Deeper Sleep</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-3 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full"></div>
                        <span className="text-sm text-gray-300">45-70 min: Deep Sleep</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-3 bg-gradient-to-r from-violet-500 to-violet-600 rounded-full"></div>
                        <span className="text-sm text-gray-300">70-90 min: REM Sleep</span>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-blue-500/10 rounded-lg border border-blue-400/20">
                      <p className="text-blue-300 text-sm">
                        <Info className="inline mr-2" size={14} />
                        Waking up at the end of a cycle (after REM) helps you feel more refreshed and alert.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sleep Tips */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl border border-green-400/20">
                  <div className="text-green-400 mb-3">
                    <Lightbulb size={24} />
                  </div>
                  <h4 className="font-semibold text-green-300 mb-2">Optimal Sleep Duration</h4>
                  <p className="text-gray-400 text-sm">Most adults need 5-6 complete cycles (7.5-9 hours) for optimal rest and recovery.</p>
                </div>

                <div className="p-6 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-xl border border-amber-400/20">
                  <div className="text-amber-400 mb-3">
                    <Clock size={24} />
                  </div>
                  <h4 className="font-semibold text-amber-300 mb-2">Consistent Sleep Schedule</h4>
                  <p className="text-gray-400 text-sm">Going to bed and waking up at the same time daily helps regulate your natural sleep-wake cycle.</p>
                </div>

                <div className="p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-400/20">
                  <div className="text-blue-400 mb-3">
                    <Moon size={24} />
                  </div>
                  <h4 className="font-semibold text-blue-300 mb-2">Sleep Environment</h4>
                  <p className="text-gray-400 text-sm">A cool, dark, and quiet room promotes deeper, more restful sleep cycles.</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-indigo-500/10 rounded-xl border border-purple-400/20">
                <h4 className="font-semibold text-purple-300 mb-3 text-center">Why This Calculator Works</h4>
                <p className="text-gray-300 text-sm text-center leading-relaxed">
                  By timing your sleep to complete full 90-minute cycles, you avoid waking up during deep sleep stages, 
                  which can leave you feeling groggy and tired. This calculator adds 15 minutes for the average time it takes to fall asleep, 
                  ensuring you complete full cycles and wake up feeling refreshed.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="mt-16 border-t border-gray-700 pt-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-sm text-gray-400">Sleep cycles are approximately 90 minutes long. This calculator helps you wake up at the end of a cycle for better rest.</p>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-6 text-sm text-gray-300 space-y-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white mb-4">Terms and Privacy Policy</h3>
                <p className="text-gray-400">
                  This agreement describes the conditions and rules under which our company ("our company", "we") offers you its services.
                </p>
                <p className="text-gray-400 mt-2">
                  This agreement will be governed by applicable laws, without reference to conflict of laws principles. 
                  You agree that any litigation relating to this agreement may only be brought in, and shall be subject to the jurisdiction of, any applicable Court.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-3">Terms</h4>
                <p className="mb-3">By using our services, you agree to observe all of the following conditions and rules:</p>
                <ol className="list-decimal list-inside space-y-2 text-gray-400">
                  <li>You acknowledge that using this service is entirely at your own discretion and risk.</li>
                  <li>You are solely responsible for all information and data you provide or transmit through our platform.</li>
                  <li>You must not upload, share, or transmit any content that violates applicable laws or regulations.</li>
                  <li>Integration of our service into other applications or platforms is strictly prohibited without prior authorization.</li>
                  <li>This service may be used for both personal and commercial purposes within the scope of these terms.</li>
                  <li>We retain the right to modify, suspend, or discontinue any aspect of our service at our sole discretion.</li>
                  <li>These terms may be updated or modified without prior notification to users.</li>
                  <li>This service is provided "as is" without any warranties, express or implied.</li>
                </ol>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-3">Privacy</h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-400" start={9}>
                  <li>In order to improve the quality of our service, we may save and analyze the metadata of your requests.</li>
                  <li>
                    Google collects data and uses cookies for ad personalization and measurement for this site. 
                    <a href="https://policies.google.com/technologies/partner-sites" className="text-blue-400 hover:text-blue-300 underline ml-1" target="_blank" rel="noopener noreferrer">
                      Learn how Google collects and uses data
                    </a>. 
                    You can turn off ad personalization at any time in your Google account settings. 
                    Also, we use cookies for statistical purposes. By using this site, you consent to our use of cookies.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
