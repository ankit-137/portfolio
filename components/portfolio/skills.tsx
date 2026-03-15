"use client";

import { DecorativeStar } from "./decorative-star";

const technicalSkills = {
  languages: ["JavaScript", "C++", "Java", "C","python", "SQL", "HTML", "CSS"],
  frameworks: ["Node.js", "Express.js", "React","TensorFlow"],
  tools: ["Git", "GitHub", "Docker", "Firebase", "VS Code", "Postman"],
  databases: ["MySQL", "MongoDB"],
};

const coreSkills = [
  "DSA",
  "OOP",
  "JavaScript",
  "React",
  "AWS",
];

const softSkills = [
  { tag: "#Leadership", color: "bg-accent" },
  { tag: "#Communication", color: "bg-primary" },
  { tag: "#Detail-oriented", color: "bg-accent" },
  { tag: "#Adaptability", color: "bg-primary" },
];

const languages = [
  { name: "English", level: "Fluent" },
  { name: "Hindi", level: "Fluent" },
  { name: "Gujarati", level: "Native" },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Technical Skills */}
          <div>
            <DecorativeStar size="sm" className="text-accent mb-4" />
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-8 italic">
              Technical Skills
            </h2>

            {/* Software/Tools Icons */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
                Tools & Platforms
              </h3>
              <div className="flex flex-wrap gap-3">
                {technicalSkills.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium border border-border hover:border-accent transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
                Programming Languages
              </h3>
              <div className="flex flex-wrap gap-3">
                {technicalSkills.languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium border border-border hover:border-accent transition-colors"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
                Frameworks & Libraries
              </h3>
              <div className="flex flex-wrap gap-3">
                {technicalSkills.frameworks.map((fw) => (
                  <span
                    key={fw}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium border border-border hover:border-accent transition-colors"
                  >
                    {fw}
                  </span>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
                Databases
              </h3>
              <div className="flex flex-wrap gap-3">
                {technicalSkills.databases.map((db) => (
                  <span
                    key={db}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium border border-border hover:border-accent transition-colors"
                  >
                    {db}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Core & Soft Skills */}
          <div>
            {/* Core Concepts */}
            <div className="mb-12">
              <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
                Core Concepts
              </h3>
              <div className="flex flex-wrap gap-3">
                {coreSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft Skills Tags */}
            <div className="mb-12">
              <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill) => (
                  <span
                    key={skill.tag}
                    className={`px-4 py-2 ${skill.color} text-primary-foreground rounded-full text-sm font-medium`}
                  >
                    {skill.tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <DecorativeStar size="sm" className="text-accent mb-4" />
              <h2 className="font-serif text-4xl font-bold text-foreground mb-6 italic">
                Languages
              </h2>
              <div className="flex flex-wrap gap-8">
                {languages.map((lang) => (
                  <div key={lang.name} className="text-center">
                    <h4 className="font-serif text-xl font-bold text-foreground italic">
                      {lang.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">{lang.level}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
