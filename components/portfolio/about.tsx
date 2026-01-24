"use client";

import Link from "next/link";
import { MapPin, Mail, Phone, Linkedin } from "lucide-react";
import { DecorativeStar } from "./decorative-star";

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Hello Section */}
          <div>
            <DecorativeStar size="sm" className="text-accent mb-4" />
            
            <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 italic">
              Hello,
              <br />
              {"I'm Ankit !"}
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
              I am a B.Tech Computer Science student at CHARUSAT University
              with a strong interest in backend development and cloud computing.
              I am currently living in Gujarat, India and pursuing my degree
              while building scalable systems and exploring cloud technologies.
            </p>

            {/* LinkedIn Button */}
            <Link
              href="https://linkedin.com/in/ankitpatel"
              target="_blank"
              className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-6 py-3 rounded-full hover:bg-accent/90 transition-colors shadow-md"
            >
              <Linkedin className="w-4 h-4" />
              <span className="text-sm font-medium">linkedin.com/in/ankitpatel</span>
            </Link>
          </div>

          {/* Right - Image with Info Cards */}
          <div className="relative mt-12 lg:mt-0">
            {/* Profile Image Container */}
            <div className="relative">
              <div className="bg-secondary w-full max-w-sm mx-auto aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <span className="font-serif text-8xl font-bold text-primary/20">AP</span>
                </div>
              </div>

              {/* Floating Info Cards */}
              <div className="absolute -left-4 lg:-left-8 top-1/4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                B.Tech CSE 2028
              </div>
              
              <div className="absolute -right-4 lg:-right-8 top-1/2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                Indian
              </div>

              {/* Contact Card */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl w-[90%] max-w-xs">
                <h3 className="font-serif text-xl font-bold mb-4 italic">Contact</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Gujarat, India</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="truncate">ankitpatel45820@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>+91 XXXXXXXXXX</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
