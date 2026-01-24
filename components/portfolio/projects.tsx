"use client";

import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DecorativeStar } from "./decorative-star";

const projects = [
  {
    title: "Club and Event Management Portal",
    description:
      "A centralized digital platform to manage clubs and host events instead of relying on scattered WhatsApp groups and manual coordination.",
    techStack: ["MongoDB", "Express.js", "React", "Node.js"],
    features: [
      "User authentication",
      "Event creation",
      "Club registration",
      "Admin dashboard",
    ],
    role: "Full-Stack Developer",
    github: "https://github.com/ankit-137",
    color: "bg-primary",
  },
  {
    title: "Task Management Web App",
    description:
      "A productivity-focused task manager with user login, CRUD operations, and persistent storage. Built with clean API design and efficient backend logic.",
    techStack: ["JavaScript", "Node.js", "Express.js", "MongoDB"],
    features: [
      "User authentication",
      "Task CRUD operations",
      "Persistent storage",
      "Clean API design",
    ],
    role: "Backend Developer",
    github: "https://github.com/ankit-137",
    color: "bg-accent",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio to showcase projects, skills, and professional profile with emphasis on UI clarity and accessibility.",
    techStack: ["HTML", "CSS", "JavaScript"],
    features: [
      "Responsive design",
      "Project showcase",
      "Skills presentation",
      "Contact form",
    ],
    role: "Frontend Developer",
    github: "https://github.com/ankit-137",
    color: "bg-secondary",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <DecorativeStar size="sm" className="text-accent mx-auto mb-4" />
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground italic">
            My Work
          </h2>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative rounded-2xl overflow-hidden ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              <div className="flex flex-col lg:flex-row gap-0">
                {/* Project Color Block */}
                <div
                  className={`${project.color} w-full lg:w-1/3 p-8 flex flex-col justify-center ${
                    project.color === "bg-primary" || project.color === "bg-accent"
                      ? "text-primary-foreground"
                      : "text-foreground"
                  }`}
                >
                  <span className="text-sm font-medium opacity-70 uppercase tracking-wider mb-2">
                    Project {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-2xl lg:text-3xl font-bold italic mb-4">
                    {project.title}
                  </h3>
                  <p className="text-sm opacity-80">{project.role}</p>
                </div>

                {/* Project Details */}
                <div className="flex-1 bg-card p-8 border border-border">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-foreground mb-3 uppercase tracking-wider">
                      Key Features
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="text-sm text-muted-foreground flex items-center gap-2"
                        >
                          <DecorativeStar size="sm" className="text-accent w-3 h-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2 bg-transparent border-foreground/20 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                      >
                        <Github className="h-4 w-4" />
                        View Code
                        <ExternalLink className="h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
