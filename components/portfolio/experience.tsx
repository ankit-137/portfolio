"use client";

import { DecorativeStar } from "./decorative-star";

const education = [
  {
    years: "2024 - 2028",
    title: "CHARUSAT University",
    subtitle: "B.Tech Computer Science & Engineering",
    details: "CGPA: 8.5/10",
  },
];

const experience = [
  {
    year: "2026",
    title: "Sports Coordinator",
    subtitle: "University Level, CHARUSAT",
    description: "Led planning and management of inter-department sports schedules. Coordinated with faculty and students.",
  },
  {
    year: "2026",
    title: "Technical Club Coordinator",
    subtitle: "University Level, CHARUSAT",
    description: "Led planning and management of inter-department club schedules. Coordinated with faculty and students.",
  },
];

const achievements = [
  "Recognized for leadership at university level activities",
  "Built multiple independent projects beyond academics",
  "Consistently self-learning through documentation",
];

export function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8">
          {/* Left Column - Education & Experience */}
          <div className="space-y-12">
            {/* Education */}
            <div>
              <DecorativeStar size="sm" className="text-accent mb-4" />
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-8 italic">
                Education
              </h2>

              <div className="space-y-6">
                {education.map((edu) => (
                  <div key={edu.title} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <DecorativeStar size="sm" className="text-accent" />
                      <div className="w-0.5 h-full bg-border mt-2" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-accent">{edu.years}</span>
                      <h3 className="font-bold text-foreground text-lg mt-1">{edu.title}</h3>
                      <p className="text-muted-foreground text-sm">{edu.subtitle}</p>
                      {edu.details && (
                        <span className="inline-block mt-2 px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                          {edu.details}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Card */}
            <div className="bg-primary text-primary-foreground p-8 rounded-2xl">
              <h2 className="font-serif text-4xl font-bold mb-8 italic">
                Experience
              </h2>

              <div className="space-y-6">
                {experience.map((exp) => (
                  <div key={exp.title} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <DecorativeStar size="sm" className="text-accent" />
                      <div className="w-0.5 h-full bg-primary-foreground/20 mt-2" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-accent">{exp.year}</span>
                      <h3 className="font-bold text-primary-foreground text-lg mt-1">{exp.title}</h3>
                      <p className="text-primary-foreground/70 text-sm">{exp.subtitle}</p>
                      <p className="text-primary-foreground/60 text-sm mt-2">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Soft Skills Tags */}
              <div className="flex flex-wrap gap-2 mt-8">
                {["#Leadership", "#Communication", "#Detail-oriented", "#Adaptability"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-primary-foreground/10 text-primary-foreground rounded-full text-sm font-medium border border-primary-foreground/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Achievements & Activities */}
          <div className="space-y-12">
            {/* Achievements */}
            <div>
              <DecorativeStar size="sm" className="text-accent mb-4" />
              <h2 className="font-serif text-4xl font-bold text-foreground mb-8 italic">
                Achievements
              </h2>

              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-secondary rounded-xl border border-border"
                  >
                    <DecorativeStar size="sm" className="text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-foreground text-sm">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hobbies & Interests */}
            <div>
              <DecorativeStar size="sm" className="text-accent mb-4" />
              <h2 className="font-serif text-4xl font-bold text-foreground mb-8 italic">
                Hobbies & Interests
              </h2>

              {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {[
                  { icon: "🎵", label: "Music" },
                  { icon: "🏏", label: "Cricket" },
                  { icon: "💻", label: "Coding" },
                  { icon: "📚", label: "Learning" },
                ].map((hobby) => (
                  <div key={hobby.label} className="text-center">
                    <div className="text-4xl mb-2">{hobby.icon}</div>
                    <p className="text-sm text-muted-foreground">{hobby.label}</p>
                  </div>
                ))}
              </div> */}
            </div>

            {/* Languages Spoken */}
            <div className="bg-secondary p-8 rounded-2xl">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6 italic">
                Languages Spoken
              </h3>
              <div className="flex flex-wrap gap-8">
                {[
                  { name: "English", level: "Fluent" },
                  { name: "Hindi", level: "Fluent" },
                  { name: "Gujarati", level: "Native" },
                ].map((lang) => (
                  <div key={lang.name}>
                    <h4 className="font-serif text-lg font-bold text-foreground italic">
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
