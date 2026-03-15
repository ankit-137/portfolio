"use client";

import React, { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { DecorativeStar } from "./decorative-star";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: "", email: "", message: "" });
        // Optional: you can show sonner/toast here
        alert("Message sent successfully!");
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      alert(error instanceof Error ? error.message : "Failed to send message. Please try again.");
    } finally {
      if (status !== 'error') {
        setTimeout(() => setStatus('idle'), 3000);
      }
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <DecorativeStar size="sm" className="text-accent mx-auto mb-4" />
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold italic mb-4">
            Get in Touch
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            {"I'm always open to discussing new projects, opportunities, or partnerships. Feel free to reach out!"}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-foreground">Email</h4>
                  <Link
                    href="mailto:ankitpatel45820@gmail.com"
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    ankitpatel45820@gmail.com
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-foreground">Location</h4>
                  <p className="text-primary-foreground/70">Nadiad, Gujarat, India</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-primary-foreground/20">
              <h4 className="font-semibold text-primary-foreground mb-4">
                Connect with me
              </h4>
              <div className="flex gap-4">
                <Link
                  href="https://github.com/ankit-137"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center text-primary-foreground hover:text-accent-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/ankit-patel-10b1b434a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center text-primary-foreground hover:text-accent-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="mailto:ankitpatel45820@gmail.com"
                  className="w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center text-primary-foreground hover:text-accent-foreground transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20">
              <h4 className="font-semibold text-primary-foreground mb-2">
                Open to Opportunities
              </h4>
              <p className="text-sm text-primary-foreground/70">
                {"I'm actively looking for internships, hackathons, research opportunities, and challenging engineering roles. Let's connect!"}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-6 md:p-8 rounded-2xl bg-background text-foreground">
            <h4 className="font-serif text-2xl font-semibold text-foreground mb-6 italic">
              Send a Message
            </h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-secondary border-border"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="bg-secondary border-border"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="bg-secondary border-border resize-none"
                />
              </div>
              <Button 
                type="submit" 
                disabled={status === 'loading' || status === 'success'}
                className="w-full gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
              >
                {status === 'loading' ? (
                  "Sending..."
                ) : status === 'success' ? (
                  "Message Sent!"
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
