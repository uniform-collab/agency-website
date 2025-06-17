"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import {
  Layers,
  Atom,
  Zap,
  BarChart,
  Lightbulb,
  Linkedin,
  Twitter,
  Github,
  Search,
  Palette,
  Code,
  Rocket,
  TrendingUp,
  ShieldCheck,
  Brain,
  Award,
} from "lucide-react"
import { motion } from "framer-motion"
import { AuroraBackground } from "@/components/ui/aurora-background"

export default function AgencyLandingPage() {
  const services = [
    {
      icon: <Search size={32} className="mb-4 text-purple-400" />,
      title: "DXP Strategy & Consulting",
      description: "Crafting bespoke DXP roadmaps aligned with your business goals for maximum impact and ROI.",
    },
    {
      icon: <Layers size={32} className="mb-4 text-teal-400" />,
      title: "Platform Implementation",
      description: "Seamless integration and customization of leading DXP solutions tailored to your unique needs.",
    },
    {
      icon: <Palette size={32} className="mb-4 text-pink-400" />,
      title: "Experience Design (UX/UI)",
      description: "Designing intuitive, engaging, and visually stunning user experiences that captivate and convert.",
    },
    {
      icon: <Zap size={32} className="mb-4 text-yellow-400" />,
      title: "Personalization & Optimization",
      description: "Leveraging data to deliver hyper-personalized content and continuously optimize for performance.",
    },
    {
      icon: <BarChart size={32} className="mb-4 text-green-400" />,
      title: "Analytics & Performance",
      description: "In-depth tracking and analysis to measure success and uncover actionable insights for growth.",
    },
    {
      icon: <ShieldCheck size={32} className="mb-4 text-sky-400" />,
      title: "Support & Managed Services",
      description:
        "Ongoing support and management to ensure your DXP operates flawlessly and evolves with your business.",
    },
  ]

  const portfolioItems = [
    {
      imageSrc: "/placeholder.svg?width=600&height=400",
      title: "Project Alpha: E-commerce Revolution",
      description:
        "Transformed a legacy e-commerce platform into a dynamic, personalized shopping experience, boosting conversion by 40%.",
      tags: ["DXP", "Personalization", "UX/UI"],
    },
    {
      imageSrc: "/placeholder.svg?width=600&height=400",
      title: "Project Beta: Global Content Hub",
      description:
        "Launched a unified content platform for a multinational corporation, streamlining operations and enhancing brand consistency.",
      tags: ["CMS", "Integration", "Global Scale"],
    },
    {
      imageSrc: "/placeholder.svg?width=600&height=400",
      title: "Project Gamma: Mobile-First Engagement",
      description:
        "Developed an award-winning mobile DXP solution, driving user engagement and loyalty for a leading service provider.",
      tags: ["Mobile DXP", "User Engagement", "API First"],
    },
  ]

  const processSteps = [
    {
      icon: <Lightbulb className="w-8 h-8 text-purple-400" />,
      title: "Discovery & Strategy",
      description: "Understanding your vision and defining a clear path to success.",
    },
    {
      icon: <Palette className="w-8 h-8 text-teal-400" />,
      title: "Design & Prototyping",
      description: "Crafting intuitive interfaces and validating concepts.",
    },
    {
      icon: <Code className="w-8 h-8 text-pink-400" />,
      title: "Development & Integration",
      description: "Building robust solutions with cutting-edge technology.",
    },
    {
      icon: <Rocket className="w-8 h-8 text-yellow-400" />,
      title: "Launch & Optimization",
      description: "Deploying and fine-tuning for peak performance.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      title: "Continuous Growth",
      description: "Partnering for ongoing evolution and market leadership.",
    },
  ]

  const testimonials = [
    {
      quote:
        "This agency didn't just build a platform; they architected our future. Their innovative approach to DXP is unparalleled.",
      name: "Alex Chen",
      company: "CEO, FutureTech Corp",
      avatar: "/placeholder.svg?width=100&height=100",
    },
    {
      quote:
        "The level of personalization and user engagement we've achieved is phenomenal. Truly a game-changer for our business.",
      name: "Samantha Miller",
      company: "CMO, Innovate Solutions",
      avatar: "/placeholder.svg?width=100&height=100",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-slate-200 text-slate-800 scroll-smooth">
      {/* Background Gradient */}
      <div className="fixed inset-0 z-[-1] bg-gradient-radial from-white via-slate-100 to-slate-300" />

      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full bg-white/50 backdrop-blur-xl border-b border-white/60 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-slate-900">
              <Atom className="h-8 w-8 text-blue-600" />
              <span>Reactr Studios</span>
            </Link>
            <nav className="hidden md:flex space-x-8 items-center">
              {["About", "Mission", "Services", "Work", "Process", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-600 hover:text-slate-900 transition-colors font-medium"
                >
                  {item}
                </Link>
              ))}
            </nav>
            <Button
              asChild
              className="hidden md:inline-flex bg-gradient-to-b from-slate-50 via-slate-200 to-slate-50 text-slate-800 font-semibold border border-slate-400/50 shadow-md hover:brightness-105 active:brightness-95 transition-all"
            >
              <Link href="#contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section with Aurora Effect */}
        <AuroraBackground id="home">
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center px-4"
          >
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-slate-900">
                <span className="block">Engineering the Apex of</span>
                <span className="block bg-gradient-to-r from-slate-700 to-slate-900 text-transparent bg-clip-text">
                  Digital Interaction.
                </span>
              </h1>
              <p className="max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto text-lg sm:text-xl text-slate-600 mb-10">
                We are Reactr Studios, an elite agency forging the next generation of Digital Experience Platforms with
                precision engineering and metallic design.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-to-b from-slate-50 via-slate-200 to-slate-50 text-slate-800 font-semibold border border-slate-400/50 shadow-lg hover:brightness-105 active:brightness-95 transition-all px-8 py-3 text-lg"
                >
                  <Link href="#contact">Forge Your Project</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="bg-transparent border-slate-500 text-slate-700 hover:bg-white/50 hover:text-slate-900 px-8 py-3 text-lg"
                >
                  <Link href="#services">Explore Blueprints</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </AuroraBackground>

        {/* About Us Snippet */}
        <section id="about" className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-slate-900">
                  We Are{" "}
                  <span className="bg-gradient-to-r from-slate-700 to-slate-900 text-transparent bg-clip-text">
                    Reactr Studios
                  </span>
                </h2>
                <p className="text-slate-600 text-lg mb-4">
                  At Reactr Studios, we believe that superior digital platforms are forged, not just built. Our
                  philosophy combines meticulous strategy, fluid design, and robust technology to create experiences
                  that are both powerful and elegant.
                </p>
                <p className="text-slate-600 text-lg mb-6">
                  We are your partners in innovation, dedicated to engineering digital solutions that stand the test of
                  time and define market leadership.
                </p>
                <div className="flex space-x-6">
                  <div className="flex items-center space-x-2 text-blue-600">
                    <Brain size={24} /> <span className="font-semibold text-slate-700">Precision Strategy</span>
                  </div>
                  <div className="flex items-center space-x-2 text-blue-600">
                    <Award size={24} /> <span className="font-semibold text-slate-700">Engineered Excellence</span>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src="/placeholder.svg?width=600&height=450"
                  alt="Our Team Collaborating"
                  width={600}
                  height={450}
                  className="rounded-lg shadow-2xl border-4 border-white"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section - ADDED */}
        <section id="mission" className="py-16 md:py-24 bg-white/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/placeholder.svg?width=600&height=450"
                  alt="Our Mission Embodied"
                  width={600}
                  height={450}
                  className="rounded-lg shadow-2xl border-4 border-white"
                />
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-slate-900">
                  Our Core{" "}
                  <span className="bg-gradient-to-r from-slate-700 to-slate-900 text-transparent bg-clip-text">
                    Catalyst
                  </span>
                </h2>
                <p className="text-slate-600 text-lg mb-4">
                  Our mission is to be the catalyst for digital transformation, empowering businesses to achieve
                  unprecedented levels of engagement and efficiency. We strive to engineer Digital Experience Platforms
                  that are not only technologically advanced but also intuitively human-centric.
                </p>
                <p className="text-slate-600 text-lg mb-6">
                  We are committed to pushing the boundaries of what's possible, crafting bespoke solutions that
                  resonate with users, amplify brand narratives, and deliver sustainable growth for our clients. Reactr
                  Studios is dedicated to building the future, one exceptional digital experience at a time.
                </p>
                <div className="flex space-x-6">
                  <div className="flex items-center space-x-2 text-blue-600">
                    <Zap size={24} /> <span className="font-semibold text-slate-700">Transformative Impact</span>
                  </div>
                  <div className="flex items-center space-x-2 text-blue-600">
                    <Lightbulb size={24} /> <span className="font-semibold text-slate-700">Innovative Solutions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Liquid Glass */}
        <section id="services" className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900">Our Core Schematics</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                A full suite of services to architect, construct, and refine your Digital Experience Platform.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="bg-white/40 backdrop-blur-2xl border border-white/50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <CardHeader>
                    <div className="flex justify-center md:justify-start">
                      {React.cloneElement(service.icon, { className: "mb-4 text-blue-600", size: 32 })}
                    </div>
                    <CardTitle className="text-2xl font-semibold text-slate-800">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Work Section */}
        <section id="work" className="py-16 md:py-24 bg-white/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900">Case Studies in Metal</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Explore how we've engineered success for our clients with cutting-edge DXP solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item, index) => (
                <Card
                  key={index}
                  className="bg-white border border-slate-200 overflow-hidden group shadow-lg rounded-xl"
                >
                  <Image
                    src={item.imageSrc || "/placeholder.svg"}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-slate-800">{item.title}</h3>
                    <p className="text-slate-600 mb-4 text-sm">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-slate-200 text-slate-700 px-2 py-1 rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section - Liquid Glass */}
        <section id="process" className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900">Our Assembly Line</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Our structured process ensures quality, efficiency, and outstanding results at every stage.
              </p>
            </div>
            <div className="relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-400/50 to-transparent transform -translate-y-1/2 -z-10"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {processSteps.map((step, index) => (
                  <div
                    key={index}
                    className="text-center p-6 bg-white/40 backdrop-blur-2xl border border-white/50 rounded-2xl shadow-lg"
                  >
                    <div className="flex justify-center mb-4">
                      {React.cloneElement(step.icon, { className: "w-8 h-8 text-blue-600" })}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-slate-800">{step.title}</h3>
                    <p className="text-sm text-slate-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Client Logos Section */}
        <section className="py-12 md:py-16 bg-white/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-center text-xl font-semibold text-slate-600 mb-8">Trusted by Industry Titans</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
              {[...Array(5)].map((_, i) => (
                <Image
                  key={i}
                  src={`/placeholder-logo.svg?height=50&width=150&query=tech+company+logo+${i + 1}`}
                  alt={`Client Logo ${i + 1}`}
                  width={150}
                  height={50}
                  className="opacity-60 hover:opacity-100 transition-opacity"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-slate-900">
                Ready to Build Your{" "}
                <span className="bg-gradient-to-r from-slate-700 to-slate-900 text-transparent bg-clip-text">
                  Digital Legacy?
                </span>
              </h2>
              <p className="text-lg text-slate-600 mb-10">
                Let's discuss your project. Submit your details, and our engineers will be in touch to draft the
                blueprint for your success.
              </p>
            </div>
            <Card className="max-w-2xl mx-auto bg-white/40 backdrop-blur-2xl border border-white/50 rounded-2xl shadow-xl p-6 md:p-8">
              <form action="#" method="POST" className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                      Full Name
                    </label>
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      required
                      className="bg-white/50 border-slate-300 text-slate-900 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="bg-white/50 border-slate-300 text-slate-900 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">
                    Company (Optional)
                  </label>
                  <Input
                    type="text"
                    name="company"
                    id="company"
                    className="bg-white/50 border-slate-300 text-slate-900 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                    Project Details
                  </label>
                  <Textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    className="bg-white/50 border-slate-300 text-slate-900 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-b from-slate-50 via-slate-200 to-slate-50 text-slate-800 font-semibold border border-slate-400/50 shadow-lg hover:brightness-105 active:brightness-95 transition-all py-3 text-lg"
                  >
                    Initiate Collaboration
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-slate-200/50 border-t border-slate-300/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Atom className="h-7 w-7 text-blue-600" />
              <span className="text-xl font-bold text-slate-800">Reactr Studios</span>
            </div>
            <p className="text-sm text-slate-600 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Reactr Studios. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-slate-500 hover:text-blue-600 transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="text-slate-500 hover:text-blue-600 transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-slate-500 hover:text-blue-600 transition-colors">
                <Github size={20} />
              </Link>
            </div>
          </div>
          <div className="text-center mt-6 text-xs text-slate-500">
            <Link href="#" className="hover:text-slate-800">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link href="#" className="hover:text-slate-800">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
