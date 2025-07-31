import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface TimePickerProps {
  value: {
    hour: string;
    minute: string;
    ampm: string;
  };
  onChange: (value: { hour: string; minute: string; ampm: string }) => void;
  className?: string;
}

export default function TimePicker({ value, onChange, className = "" }: TimePickerProps) {
  const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString());
  const minutes = ['00', '15', '30', '45'];

  const handleHourChange = (hour: string) => {
    onChange({ ...value, hour });
  };

  const handleMinuteChange = (minute: string) => {
    onChange({ ...value, minute });
  };

  const handleAmPmChange = (ampm: string) => {
    onChange({ ...value, ampm });
  };

  return (
    <div className={className}>
      <div className="flex items-center space-x-2">
        {/* Hour Selector */}
        <Select value={value.hour} onValueChange={handleHourChange}>
          <SelectTrigger className="bg-gradient-to-r from-purple-600/30 to-blue-600/30 border-purple-400/40 rounded-xl px-4 py-3 text-white font-medium focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 w-20 hover:from-purple-500/40 hover:to-blue-500/40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-slate-800/95 backdrop-blur-sm border-purple-400/30 text-white">
            {hours.map((hour) => (
              <SelectItem key={hour} value={hour} className="hover:bg-purple-500/30 focus:bg-purple-500/30">
                {hour}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <span className="text-purple-300 text-2xl font-bold animate-pulse">:</span>

        {/* Minute Selector */}
        <Select value={value.minute} onValueChange={handleMinuteChange}>
          <SelectTrigger className="bg-gradient-to-r from-blue-600/30 to-indigo-600/30 border-blue-400/40 rounded-xl px-4 py-3 text-white font-medium focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 w-20 hover:from-blue-500/40 hover:to-indigo-500/40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-slate-800/95 backdrop-blur-sm border-blue-400/30 text-white">
            {minutes.map((minute) => (
              <SelectItem key={minute} value={minute} className="hover:bg-blue-500/30 focus:bg-blue-500/30">
                {minute}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* AM/PM Selector */}
        <Select value={value.ampm} onValueChange={handleAmPmChange}>
          <SelectTrigger className="bg-gradient-to-r from-indigo-600/30 to-purple-600/30 border-indigo-400/40 rounded-xl px-4 py-3 text-white font-medium focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-300 w-20 hover:from-indigo-500/40 hover:to-purple-500/40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-slate-800/95 backdrop-blur-sm border-indigo-400/30 text-white">
            <SelectItem value="AM" className="hover:bg-indigo-500/30 focus:bg-indigo-500/30">AM</SelectItem>
            <SelectItem value="PM" className="hover:bg-indigo-500/30 focus:bg-indigo-500/30">PM</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}