"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { DecorativeStar } from "./decorative-star";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <DecorativeStar size="sm" className="text-accent" />
            <span className="font-serif text-2xl font-bold text-foreground italic">
              Patel Ankit
            </span>
          </Link>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {["About", "Skills", "Work", "Experience", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/ankit-137"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary hover:bg-primary flex items-center justify-center text-muted-foreground hover:text-primary-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/ankit-patel-10b1b434a"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary hover:bg-primary flex items-center justify-center text-muted-foreground hover:text-primary-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:ankitpatel45820@gmail.com"
              className="w-10 h-10 rounded-full bg-secondary hover:bg-primary flex items-center justify-center text-muted-foreground hover:text-primary-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Patel Ankit. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground/60 mt-1">
              Backend & Cloud Enthusiast
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
