import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function Logo({ className, size = "md" }: LogoProps) {
  const sizes = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-14 w-14"
  }

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* Chess/Scales/Star Logo */}
      <svg
        viewBox="0 0 100 100"
        className={cn(sizes[size], "flex-shrink-0")}
        aria-hidden="true"
      >
        {/* Outer circle with star points */}
        <circle cx="50" cy="50" r="48" fill="#1B2D4F" />
        
        {/* Star burst effect */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <line
            key={i}
            x1="50"
            y1="50"
            x2={50 + 45 * Math.cos((angle * Math.PI) / 180)}
            y2={50 + 45 * Math.sin((angle * Math.PI) / 180)}
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="2"
          />
        ))}
        
        {/* Inner circle */}
        <circle cx="50" cy="50" r="38" fill="#1B2D4F" stroke="white" strokeWidth="2" />
        
        {/* Scales of Justice */}
        {/* Center pillar */}
        <rect x="48" y="30" width="4" height="40" fill="white" />
        
        {/* Balance beam */}
        <rect x="25" y="32" width="50" height="3" fill="white" rx="1" />
        
        {/* Left scale pan */}
        <path d="M25 35 L20 50 L30 50 Z" fill="white" />
        <ellipse cx="25" cy="52" rx="8" ry="3" fill="white" />
        
        {/* Right scale pan */}
        <path d="M75 35 L70 50 L80 50 Z" fill="white" />
        <ellipse cx="75" cy="52" rx="8" ry="3" fill="white" />
        
        {/* Chess knight crown/top piece */}
        <path d="M44 30 L50 20 L56 30 Z" fill="white" />
        
        {/* Star accent at center top */}
        <polygon
          points="50,15 51.5,19 56,19 52.5,22 54,26 50,23.5 46,26 47.5,22 44,19 48.5,19"
          fill="white"
        />
        
        {/* Base platform */}
        <rect x="40" y="70" width="20" height="4" rx="2" fill="white" />
      </svg>
      
      <div className="flex flex-col">
        <span className="font-playfair text-2xl font-bold tracking-tight text-[#1B2D4F]">
          AIM
        </span>
        <span className="text-xs font-medium tracking-widest text-slate-600 uppercase">
          Law
        </span>
      </div>
    </div>
  )
}

