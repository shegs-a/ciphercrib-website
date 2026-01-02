"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-foreground">
              Cipher<span className="text-primary">crib</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Portfolio
            </a>
            <a href="#process" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Process
            </a>
            <a href="#testimonials" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Testimonials
            </a>
            <Button className="gradient-cyan text-navy-deep font-semibold hover:opacity-90">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-6 space-y-4">
            <a href="#services" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#portfolio" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
              Portfolio
            </a>
            <a href="#process" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
              Process
            </a>
            <a
              href="#testimonials"
              className="block text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Testimonials
            </a>
            <Button className="w-full gradient-cyan text-navy-deep font-semibold">Get Started</Button>
          </div>
        )}
      </div>
    </nav>
  )
}
