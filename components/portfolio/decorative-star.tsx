"use client";

interface DecorativeStarProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function DecorativeStar({ className = "", size = "md" }: DecorativeStarProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`${sizeClasses[size]} ${className}`}
    >
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  );
}
