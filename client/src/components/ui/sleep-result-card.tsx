import { Card, CardContent } from "@/components/ui/card";

interface SleepResultCardProps {
  time: string;
  cycles: number;
  totalSleep: number;
  type: 'bedtime' | 'waketime';
  index: number;
}

export default function SleepResultCard({ time, cycles, totalSleep, type, index }: SleepResultCardProps) {
  const bedtimeColors = [
    { 
      bg: 'bg-gradient-to-br from-purple-500 to-purple-600', 
      border: 'border-purple-400/50',
      glow: 'shadow-purple-500/25',
      progress: 'bg-gradient-to-r from-purple-400 to-purple-500'
    },
    { 
      bg: 'bg-gradient-to-br from-blue-500 to-blue-600', 
      border: 'border-blue-400/50',
      glow: 'shadow-blue-500/25',
      progress: 'bg-gradient-to-r from-blue-400 to-blue-500'
    },
    { 
      bg: 'bg-gradient-to-br from-indigo-500 to-indigo-600', 
      border: 'border-indigo-400/50',
      glow: 'shadow-indigo-500/25',
      progress: 'bg-gradient-to-r from-indigo-400 to-indigo-500'
    },
    { 
      bg: 'bg-gradient-to-br from-violet-500 to-violet-600', 
      border: 'border-violet-400/50',
      glow: 'shadow-violet-500/25',
      progress: 'bg-gradient-to-r from-violet-400 to-violet-500'
    }
  ];

  const waketimeColors = [
    { 
      bg: 'bg-gradient-to-br from-amber-500 to-yellow-500', 
      border: 'border-amber-400/50',
      glow: 'shadow-amber-500/25',
      progress: 'bg-gradient-to-r from-amber-400 to-yellow-400'
    },
    { 
      bg: 'bg-gradient-to-br from-orange-500 to-amber-500', 
      border: 'border-orange-400/50',
      glow: 'shadow-orange-500/25',
      progress: 'bg-gradient-to-r from-orange-400 to-amber-400'
    },
    { 
      bg: 'bg-gradient-to-br from-yellow-500 to-amber-500', 
      border: 'border-yellow-400/50',
      glow: 'shadow-yellow-500/25',
      progress: 'bg-gradient-to-r from-yellow-400 to-amber-400'
    },
    { 
      bg: 'bg-gradient-to-br from-orange-400 to-yellow-500', 
      border: 'border-orange-300/50',
      glow: 'shadow-orange-400/25',
      progress: 'bg-gradient-to-r from-orange-300 to-yellow-400'
    }
  ];

  const colors = type === 'bedtime' ? bedtimeColors : waketimeColors;
  const colorSet = colors[index % colors.length];

  return (
    <Card className={`bg-slate-800/40 backdrop-blur-sm rounded-2xl border-2 ${colorSet.border} transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${colorSet.glow} hover:rotate-1`}>
      <CardContent className="p-6 relative overflow-hidden">
        {/* Gradient overlay */}
        <div className={`absolute inset-0 ${colorSet.bg} opacity-10 rounded-2xl`}></div>
        
        <div className="relative z-10 text-center">
          <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">{time}</div>
          <div className="text-sm text-gray-200 mb-1 font-medium">{cycles} sleep cycles</div>
          <div className="text-xs text-gray-300 mb-4">{totalSleep.toFixed(1)} hours of sleep</div>
          
          {/* Progress bar */}
          <div className="h-3 bg-slate-700/50 rounded-full overflow-hidden backdrop-blur-sm">
            <div 
              className={`${colorSet.progress} h-full rounded-full transition-all duration-700 shadow-sm`} 
              style={{ width: `${(cycles / 6) * 100}%` }}
            ></div>
          </div>
          
          {/* Quality indicator */}
          <div className="mt-3">
            {cycles >= 5 ? (
              <span className="text-xs px-2 py-1 bg-green-500/20 text-green-300 rounded-full border border-green-400/30">
                Optimal
              </span>
            ) : cycles >= 4 ? (
              <span className="text-xs px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded-full border border-yellow-400/30">
                Good
              </span>
            ) : (
              <span className="text-xs px-2 py-1 bg-orange-500/20 text-orange-300 rounded-full border border-orange-400/30">
                Short
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}