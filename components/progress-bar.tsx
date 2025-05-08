interface ProgressBarProps {
  value: number
}

export function ProgressBar({ value }: ProgressBarProps) {
  return (
    <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
      <div className="bg-slate-600 h-full rounded-full" style={{ width: `${value}%` }}></div>
    </div>
  )
}

