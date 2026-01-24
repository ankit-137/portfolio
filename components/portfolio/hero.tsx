"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { DecorativeStar } from "./decorative-star";

export function Hero() {
  return (
    <section className="min-h-screen bg-primary text-primary-foreground pt-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="relative z-10">
            {/* Decorative Stars */}
            <DecorativeStar size="lg" className="text-accent absolute -top-4 -left-4" />
            <DecorativeStar size="sm" className="text-accent absolute top-20 left-40" />
            
            {/* Large Typography */}
            <div className="mb-8">
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none tracking-tight">
                PORTFOLIO
              </h1>
              {/* Echo text effect */}
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-none tracking-tight opacity-40 -mt-2">
                PORTFOLIO
              </h2>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-none tracking-tight opacity-20 -mt-1">
                PORTFOLIO
              </h2>
            </div>

            {/* Bio Text */}
            <p className="text-primary-foreground/80 max-w-md text-sm lg:text-base leading-relaxed mb-8">
              I love building scalable backend systems and cloud infrastructure.
              I approach problems in a rational and pragmatic way and seek the simplest
              and most functional solutions possible.
            </p>

            {/* Decorative Star */}
            <DecorativeStar size="md" className="text-accent" />
          </div>

          {/* Right Content - Image and Social Links */}
          <div className="relative">
            {/* Image Container */}
            <div className="relative">
              <div className="bg-accent w-full max-w-sm mx-auto aspect-[3/4] rounded-lg overflow-hidden relative shadow-2xl">
                {/* Placeholder for profile image */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center">
                  <span className="font-serif text-8xl font-bold text-accent-foreground/20">AP</span>
                </div>
              </div>
              
              {/* Social Links Card */}
              <div className="absolute -right-4 lg:-right-8 top-1/4 bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4 border border-primary-foreground/20">
                <div className="space-y-3 text-sm">
                  <Link 
                    href="https://github.com/ankit-137" 
                    target="_blank"
                    className="flex items-center gap-2 hover:text-accent transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GH: /ankit-137</span>
                  </Link>
                  <Link 
                    href="https://linkedin.com/in/ankitpatel" 
                    target="_blank"
                    className="flex items-center gap-2 hover:text-accent transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LI: /ankitpatel</span>
                  </Link>
                  <Link 
                    href="mailto:ankitpatel45820@gmail.com"
                    className="flex items-center gap-2 hover:text-accent transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email me</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <Link 
            href="#about"
            className="flex flex-col items-center gap-2 text-primary-foreground/60 hover:text-accent transition-colors group"
          >
            <span className="bg-accent text-accent-foreground rounded-full w-20 h-20 flex flex-col items-center justify-center text-xs font-medium shadow-lg">
              Scroll
              <br />
              down
            </span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  );
}
