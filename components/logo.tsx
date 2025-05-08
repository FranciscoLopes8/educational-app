import Image from "next/image"

interface LogoProps {
  className?: string
  variant?: "default" | "white"
}

export function Logo({ className = "w-16 h-16", variant = "default" }: LogoProps) {
  return (
    <div className={`${className} flex items-center justify-center`}>
      <Image
        src="/images/logo.png"
        alt="EducaSinal Logo"
        width={variant === "white" ? 120 : 120}
        height={variant === "white" ? 120 : 120}
        className={`object-contain ${variant === "white" ? "brightness-0 invert" : ""}`}
      />
    </div>
  )
}

