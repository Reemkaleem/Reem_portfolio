"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/contact-form"
import { TypingAnimation, MultiTypingAnimation } from "@/components/typing-animation"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  GraduationCap,
  Code,
  Brain,
  MapPin,
  Calendar,
  Trophy,
  BookOpen,
  Users,
  Medal,
  Zap,
  ChevronLeft,
  ChevronRight,
  Database,
  Globe,
  Cpu,
  FileCode,
  Server,
  Layers,
  Terminal,
  Container,
  GitBranch,
} from "lucide-react"
import Image from "next/image"

export default function ReemPortfolio() {
  const [currentProject, setCurrentProject] = useState(0)
  const [currentAboutImage, setCurrentAboutImage] = useState(0)
  const [selectedEducation, setSelectedEducation] = useState(0) // Default to B.E. (now first)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedAchievement, setSelectedAchievement] = useState<number | null>(null)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  const aboutImages = [
    { src: "/placeholder-hackathon1.jpeg", caption: "CodeBattle Hackathon - Showcasing innovative solutions" },
    { src: "/placeholder-hackathon2.jpeg", caption: "Tech Avishkar 2.0 - National Hackathon Organization" },
    { src: "/placeholder-hackathon3.jpeg", caption: "IET Weekly Activity - Technical workshops and learning" },
    { src: "/placeholder-hackathon4.png", caption: "Best Volunteer for IET Summit - Leadership in education" },
  ]

  const projects = [
    {
      title: "Personal Loan Eligibility Prediction System",
      description:
        "Production-grade ML pipeline to predict loan approvals with comprehensive data preprocessing, feature engineering, and model validation. Implemented automated model monitoring and drift detection using Deepchecks framework.",
      tech: [
        "Python",
        "Flask",
        "Supabase",
        "Random Forest",
        "XGBoost",
        "Deepchecks",
        "Docker",
        "PostgreSQL",
        "Scikit-learn",
      ],
      metrics: "AUC: 0.89, F1-Score: 0.82, 94% Precision",
      date: "06/2025",
      github: "https://github.com/Reemkaleem/Loan_Eligibility_Classification",
      details:
        "Built end-to-end ML pipeline with automated feature selection, hyperparameter tuning, and model deployment. Integrated with Supabase for real-time data storage and Flask API for seamless frontend integration.",
      image: "/personal-loan-eligibility-explained-in-simple-terms_blog_1757931218.png",
    },
    {
      title: "StreeRaksha - Women's Safety System",
      description:
        "Real-time AI system for crowd monitoring and women's safety using YOLOv5 object detection, DeepSORT tracking, and automated alert systems with geolocation services.",
      tech: ["Python", "YOLOv5", "DeepSORT", "FastAPI", "Firebase", "Supabase", "OpenCV", "WebRTC", "Twilio"],
      metrics: "Real-time processing, 95% Detection Accuracy",
      date: "04/2025",
      github: "https://github.com/Reemkaleem/StreeRaksha_Dashboard",
      details:
        "Developed computer vision system for real-time crowd analysis and threat detection. Integrated SMS/email alerts, GPS tracking, and emergency contact system with 24/7 monitoring dashboard.",
      image: "/placeholder-rn22z.jpeg",
    },
    {
      title: "Lung Disease Classification System",
      description:
        "Deep learning diagnostic tool for chest X-ray classification using transfer learning with VGG-19 model. Implemented data augmentation and ensemble methods for improved accuracy.",
      tech: ["Python", "TensorFlow", "Keras", "VGG-19", "CNN", "OpenCV", "Matplotlib", "NumPy"],
      metrics: "95.75% Test Accuracy, 97% Sensitivity",
      date: "02/2025",
      github: "https://github.com/Reemkaleem/Lung_disease_classifier",
      details:
        "Created medical imaging AI system with comprehensive preprocessing pipeline, data augmentation techniques, and model interpretability using Grad-CAM for clinical decision support.",
      image: "/placeholder-090gc.jpg",
    },
  ]

  const skills = [
    {
      category: "Programming Languages",
      items: [
        { name: "Python", icon: <FileCode className="w-6 h-6" /> },
        { name: "Java", icon: <Cpu className="w-6 h-6" /> },
        { name: "C", icon: <Terminal className="w-6 h-6" /> },
      ],
    },
    {
      category: "ML/AI Frameworks",
      items: [
        { name: "TensorFlow", icon: <Brain className="w-6 h-6" /> },
        { name: "Keras", icon: <Layers className="w-6 h-6" /> },
        { name: "OpenCV", icon: <Code className="w-6 h-6" /> },
        { name: "Scikit-learn", icon: <Cpu className="w-6 h-6" /> },
      ],
    },
    {
      category: "Web Technologies",
      items: [
        { name: "FastAPI", icon: <Zap className="w-6 h-6" /> },
        { name: "Flask", icon: <Server className="w-6 h-6" /> },
        { name: "Docker", icon: <Container className="w-6 h-6" /> },
        { name: "REST APIs", icon: <Globe className="w-6 h-6" /> },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "PostgreSQL", icon: <Database className="w-6 h-6" /> },
        { name: "MongoDB", icon: <Database className="w-6 h-6" /> },
        { name: "MySQL", icon: <Database className="w-6 h-6" /> },
        { name: "Supabase", icon: <Database className="w-6 h-6" /> },
      ],
    },
  ]

  const achievements = [
    {
      title: "Python for Data Science - Silver Medal",
      organization: "NPTEL",
      date: "02/2024",
      type: "certification",
      icon: <Medal className="w-6 h-6" />,
      color: "text-yellow-400",
      image: "/placeholder-hlnpj.jpeg",
    },
    {
      title: "Ethical Hacking - Silver Medal",
      organization: "NPTEL",
      date: "10/2024",
      type: "certification",
      icon: <Medal className="w-6 h-6" />,
      color: "text-yellow-400",
      image: "/placeholder-f1n23.jpeg",
    },
    {
      title: "Building LLM Applications With Prompt Engineering",
      organization: "NVIDIA",
      date: "05/2025",
      type: "certification",
      icon: <Zap className="w-6 h-6" />,
      color: "text-green-400",
      image: "/placeholder-xzb70.png",
    },
    {
      title: "Runner-Up, CodeBattle Hackathon",
      organization: "KLS VDIT, Haliyal",
      date: "04/2025",
      type: "achievement",
      icon: <Trophy className="w-6 h-6" />,
      color: "text-orange-400",
      image: "/placeholder-e3po6.jpeg",
    },
    {
      title: "Best Volunteer for IET Summit",
      organization: "IET ATME College of Engineering",
      date: "2025",
      type: "leadership",
      icon: <Users className="w-6 h-6" />,
      color: "text-blue-400",
      image: "/placeholder-hackathon4.png",
    },
  ]

  const educationTimeline = [
    {
      level: "B.E. CSE-AIML",
      institution: "ATME College of Engineering, Mysore",
      board: "VTU",
      score: "CGPA: 9.15/10",
      year: "2022 - Present",
      icon: <Brain className="w-5 h-5" />,
      current: true,
      featured: true,
      description:
        "Specializing in AI/ML with hands-on projects in computer vision, machine learning, and full-stack development. Leading technical initiatives and achieving academic excellence.",
    },
    {
      level: "12th Grade",
      institution: "Pramati Hillview Academy",
      board: "CBSE",
      score: "83%",
      year: "2022",
      icon: <GraduationCap className="w-5 h-5" />,
      description: "Focused on PCM stream with computer science, developing early programming skills.",
    },
    {
      level: "10th Grade",
      institution: "CFTRI School, Mysore",
      board: "CBSE",
      score: "92.6%",
      year: "2020",
      icon: <BookOpen className="w-5 h-5" />,
      description: "Strong foundation in mathematics and science subjects with consistent academic performance.",
    },
  ]

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const nextAboutImage = () => {
    setCurrentAboutImage((prev) => (prev + 1) % aboutImages.length)
  }

  const prevAboutImage = () => {
    setCurrentAboutImage((prev) => (prev - 1 + aboutImages.length) % aboutImages.length)
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-primary text-primary-foreground border-primary"
      case "Advanced":
        return "bg-secondary text-secondary-foreground border-secondary"
      case "Intermediate":
        return "bg-accent text-accent-foreground border-accent"
      default:
        return "bg-muted text-muted-foreground border-muted"
    }
  }

  const closeModal = () => {
    setSelectedAchievement(null)
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <div className="text-xl font-bold text-primary">Reem Kaleem</div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex space-x-8">
                {["Home", "About", "Projects", "Skills", "Achievements", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium cursor-pointer"
                  >
                    {item}
                  </button>
                ))}
              </div>
              <ThemeToggle />
            </div>
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="cursor-pointer"
              >
                <div className="flex flex-col space-y-1">
                  <div
                    className={`w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
                  ></div>
                  <div
                    className={`w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
                  ></div>
                  <div
                    className={`w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
                  ></div>
                </div>
              </Button>
            </div>
          </div>
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
              <div className="px-4 py-4 space-y-3">
                {["Home", "About", "Projects", "Skills", "Achievements", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      scrollToSection(item.toLowerCase())
                      setIsMobileMenuOpen(false)
                    }}
                    className="block w-full text-left text-muted-foreground hover:text-primary transition-colors text-sm font-medium cursor-pointer py-2"
                  >
                    {item}
                  </button>
                ))}
                <div className="pt-3 border-t border-border">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/20 z-40 md:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      <div className="pt-16">
        {/* Home/Hero Section */}
        <section id="home" className="py-16 px-4 sm:px-6">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[85vh] max-w-6xl mx-auto">
              <div className="space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1">
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-balance">
                    <TypingAnimation 
                      text="Hi, I'm Reem" 
                      duration={100}
                      className="text-foreground"
                    />
                  </h1>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl text-secondary text-balance min-h-[2.5rem] lg:min-h-[3.5rem]">
                    <MultiTypingAnimation 
                      texts={[
                        "AI/ML Developer",
                        "Full-Stack Developer",
                        "Problem Solver",
                        "Tech Enthusiast"
                      ]}
                      typingSpeed={100}
                      deletingSpeed={50}
                      delayBetween={2000}
                      className="text-secondary"
                    />
                  </h2>
                  <p className="text-base sm:text-lg text-muted-foreground max-w-lg text-pretty mx-auto lg:mx-0">
                    I'm passionate about building AI-powered systems that solve real-world problems. I love experimenting with Computer Vision, ML, and edge computing to create impactful solutions.
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center lg:justify-start space-x-4">
                  <a
                    href="https://github.com/Reemkaleem"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/20 bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 social-link"
                  >
                    <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    <span className="font-medium">GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/reem-k-184153248/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-4 py-2 rounded-lg border border-secondary/20 bg-secondary/10 hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:scale-105 social-link"
                  >
                    <Linkedin className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    <span className="font-medium">LinkedIn</span>
                  </a>
                  <a
                    href="mailto:reemk3103@gmail.com"
                    className="group flex items-center gap-2 px-4 py-2 rounded-lg border border-accent/20 bg-accent/10 hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105 social-link"
                  >
                    <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    <span className="font-medium">Email</span>
                  </a>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Mysore, Karnataka
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4" />
                    ATME College
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4" />
                    CGPA: 9.15/10
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => scrollToSection("projects")}
                  >
                    <Code className="w-4 h-4 mr-2" />
                    View Projects
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => window.open("/resume", "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                </div>
              </div>

              <div className="flex justify-center lg:justify-center order-1 lg:order-2">
                <div className="relative">
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-full blur-3xl animate-pulse"></div>
                  
                  {/* Profile image */}
                  <div className="relative z-10 animate-float">
                    <div className="relative group">
                      <Image
                        src="/placeholder-user-photo.jpeg"
                        alt="Reem Kaleem"
                        width={280}
                        height={280}
                        className="sm:w-[320px] sm:h-[320px] lg:w-[350px] lg:h-[350px] rounded-full border-4 border-primary/30 shadow-2xl shadow-primary/20 group-hover:border-primary/50 transition-all duration-300"
                        priority
                      />
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-10 -left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
                  <div className="absolute bottom-10 -right-10 w-16 h-16 bg-secondary/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 sm:py-20 px-4 sm:px-6">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-balance">About Me</h2>
                <p className="text-base sm:text-lg text-muted-foreground text-pretty max-w-3xl mx-auto">
                  I'm a passionate Computer Science Engineering student specializing in Artificial Intelligence and 
                  Machine Learning, driven by the vision of creating AI systems that make a meaningful impact on society. 
                  My journey combines academic excellence with hands-on innovation.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-6 order-2 lg:order-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-primary">My Passion & Vision</h3>
                  <p className="text-muted-foreground">
                    My fascination with AI began with a simple question: "How can we make machines understand and solve 
                    real-world problems?" This curiosity led me to dive deep into Computer Vision, Machine Learning, and 
                    edge computing. From organizing national hackathons to developing production-ready AI systems, 
                    I've been on a mission to bridge the gap between cutting-edge research and practical applications.
                  </p>
                  <p className="text-muted-foreground">
                    Every project I work on is driven by impact - whether it's improving healthcare with medical imaging AI, 
                    enhancing safety through intelligent surveillance, or democratizing access to AI-powered solutions. 
                    I believe technology should empower people and solve meaningful problems.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Trophy className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm sm:text-base">Organized Tech Avishkar 2.0 with 200+ participants</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Medal className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm sm:text-base">Runner-up at CodeBattle Hackathon</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm sm:text-base">Best Volunteer at IET Summit</span>
                    </div>
                  </div>
                </div>

                <div className="relative order-1 lg:order-2">
                  <div className="relative h-64 sm:h-80 overflow-hidden rounded-lg border border-primary/20 bg-black">
                    <Image
                      src={aboutImages[currentAboutImage].src || "/placeholder.svg"}
                      alt={aboutImages[currentAboutImage].caption}
                      fill
                      className="object-contain transition-all duration-500 ease-in-out hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={currentAboutImage === 0}
                    />
                  </div>
                  <p className="text-center text-xs sm:text-sm text-muted-foreground mt-2">
                    {aboutImages[currentAboutImage].caption}
                  </p>

                  {/* Navigation Controls */}
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                    onClick={prevAboutImage}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                    onClick={nextAboutImage}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>

                  {/* Image Indicators */}
                  <div className="flex justify-center space-x-2 mt-4">
                    {aboutImages.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentAboutImage ? "bg-primary" : "bg-primary/30"
                        }`}
                        onClick={() => setCurrentAboutImage(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="text-xl sm:text-2xl font-bold text-center text-primary">Educational Journey</h3>
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/20 via-primary to-primary/20"></div>
                  <div className="space-y-8">
                    {educationTimeline.map((edu, index) => (
                      <div
                        key={index}
                        className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                      >
                        <div
                          className={`w-full sm:w-1/2 ${index % 2 === 0 ? "sm:pr-8 sm:text-right" : "sm:pl-8 sm:text-left"} px-4 sm:px-0`}
                        >
                          <Card
                            className={`bg-card/50 border-primary/20 cursor-pointer transition-all duration-300 hover:scale-105 ${
                              selectedEducation === index ? "border-primary ring-2 ring-primary/20 bg-card/80" : ""
                            } ${edu.current ? "border-primary ring-2 ring-primary/20" : ""} ${
                              edu.featured ? "border-secondary ring-2 ring-secondary/30 bg-gradient-to-br from-primary/10 to-secondary/10" : ""
                            }`}
                            onClick={() => setSelectedEducation(index)}
                          >
                            <CardContent className="p-4">
                              <div className="space-y-2">
                                <h4 className="text-base sm:text-lg font-semibold text-card-foreground">{edu.level}</h4>
                                <p className="text-xs sm:text-sm text-card-foreground/80">{edu.institution}</p>
                                <p className="text-xs text-card-foreground/60">{edu.board}</p>
                                <div className="flex items-center justify-between">
                                  <Badge
                                    variant="secondary"
                                    className="bg-primary text-primary-foreground border-primary text-base sm:text-lg font-bold px-2 sm:px-3 py-1"
                                  >
                                    {edu.score}
                                  </Badge>
                                  <span className="text-card-foreground/60 text-xs">{edu.year}</span>
                                </div>
                                {selectedEducation === index && (
                                  <p className="text-xs text-card-foreground/70 mt-2 animate-in slide-in-from-top-2">
                                    {edu.description}
                                  </p>
                                )}
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                        <div className="relative z-10 hidden sm:block">
                          <div
                            className={`w-10 h-10 rounded-full border-4 border-primary flex items-center justify-center transition-all duration-300 ${
                              selectedEducation === index || edu.current
                                ? "bg-primary text-primary-foreground animate-pulse scale-110"
                                : "bg-background text-primary hover:scale-105"
                            }`}
                          >
                            {edu.icon}
                          </div>
                        </div>
                        <div className="w-full sm:w-1/2 hidden sm:block"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Key Strengths */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="bg-card/50 border-primary/20 hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <Brain className="w-8 h-8 text-primary mb-2" />
                    <CardTitle className="text-card-foreground">AI/ML Expertise</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-card-foreground/80 text-sm sm:text-base">
                      Specialized in machine learning algorithms, deep learning, and computer vision with hands-on
                      project experience.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20 hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <Code className="w-8 h-8 text-primary mb-2" />
                    <CardTitle className="text-card-foreground">Full-Stack Development</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-card-foreground/80 text-sm sm:text-base">
                      Proficient in Python, Java, and modern web technologies with experience in API development and
                      deployment.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20 hover:border-primary/50 transition-colors sm:col-span-2 lg:col-span-1">
                  <CardHeader>
                    <Users className="w-8 h-8 text-primary mb-2" />
                    <CardTitle className="text-card-foreground">Leadership</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-card-foreground/80 text-sm sm:text-base">
                      Active in technical communities with leadership roles and experience organizing large-scale
                      events.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6">
          <div className="container mx-auto">
            <div className="text-center space-y-4 mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-balance">Featured Projects</h2>
              <p className="text-base sm:text-lg text-muted-foreground text-pretty">
                AI/ML, Computer Vision, and Full-Stack Development
              </p>
            </div>

            <div className="relative max-w-5xl mx-auto">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentProject * 100}%)` }}
                >
                  {projects.map((project, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-2 sm:px-4">
                      <Card className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                        <div className="relative h-40 sm:h-48 overflow-hidden rounded-t-lg bg-black">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-contain transition-all duration-300 hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                          />
                        </div>
                        <CardHeader className="p-4 sm:p-6">
                          <div className="flex items-start justify-between">
                            <div className="space-y-2 flex-1">
                              <CardTitle className="text-lg sm:text-2xl">{project.title}</CardTitle>
                              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  {project.date}
                                </div>
                                <Badge variant="outline" className="border-secondary text-secondary w-fit">
                                  {project.metrics}
                                </Badge>
                              </div>
                            </div>
                            <div className="flex space-x-2 ml-2">
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                              >
                                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                              </a>
                            </div>
                          </div>
                          <CardDescription className="text-pretty text-sm sm:text-lg">
                            {project.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4 p-4 sm:p-6 pt-0">
                          <p className="text-card-foreground/80 text-sm sm:text-base">{project.details}</p>
                          <div>
                            <h4 className="text-sm font-semibold text-card-foreground mb-2">Tech Stack:</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.tech.map((tech, techIndex) => (
                                <Badge
                                  key={techIndex}
                                  className="bg-primary text-primary-foreground border-primary text-xs"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Controls */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 sm:-translate-x-4 bg-background/80 backdrop-blur-sm border-primary/20 hover:border-primary/50"
                onClick={prevProject}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 sm:translate-x-4 bg-background/80 backdrop-blur-sm border-primary/20 hover:border-primary/50"
                onClick={nextProject}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>

              {/* Project Indicators */}
              <div className="flex justify-center space-x-2 mt-6 sm:mt-8">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentProject ? "bg-primary" : "bg-primary/30"
                    }`}
                    onClick={() => setCurrentProject(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6">
          <div className="container mx-auto">
            <div className="text-center space-y-4 mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-balance">Skills & Expertise</h2>
              <p className="text-base sm:text-lg text-muted-foreground text-pretty">
                Technologies and tools I use to build intelligent systems and solve complex problems
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              {skills.map((skillGroup, index) => (
                <Card key={index} className="bg-card/50 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-base sm:text-lg text-primary">{skillGroup.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center gap-3">
                          <div className="text-primary">{skill.icon}</div>
                          <span className="text-card-foreground font-medium text-sm sm:text-base">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Skills */}
            <div className="mt-8 sm:mt-12 grid sm:grid-cols-2 gap-6 sm:gap-8">
              <Card className="bg-card/50 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg text-primary flex items-center gap-2">
                    <GitBranch className="w-5 h-5" />
                    Tools & IDEs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["VS Code", "Google Colab", "Git", "Docker", "Jupyter"].map((tool, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-primary/30 text-card-foreground text-xs sm:text-sm"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg text-primary flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Interpersonal Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["Problem Solving", "Leadership", "Public Speaking", "Teamwork", "Project Management"].map(
                      (skill, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="border-secondary/30 text-card-foreground text-xs sm:text-sm"
                        >
                          {skill}
                        </Badge>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="achievements" className="py-16 sm:py-20 px-4 sm:px-6">
          <div className="container mx-auto">
            <div className="text-center space-y-4 mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-balance">Wall of Achievements</h2>
              <p className="text-base sm:text-lg text-muted-foreground text-pretty">
                Recognition for academic excellence and technical contributions
              </p>
            </div>

            {/* Achievement Wall Grid */}
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {achievements.map((achievement, index) => (
                  <Card
                    key={index}
                    className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 group overflow-hidden cursor-pointer"
                    onClick={() => setSelectedAchievement(index)}
                  >
                    <div className="relative h-24 sm:h-32 overflow-hidden bg-black rounded-t-lg">
                      <Image
                        src={achievement.image || "/placeholder.svg"}
                        alt={achievement.title}
                        fill
                        className="object-contain group-hover:scale-110 transition-transform duration-300"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      />
                    </div>
                    <CardContent className="p-4 sm:p-6 text-center">
                      <div
                        className={`inline-flex p-2 sm:p-3 rounded-full bg-primary/10 mb-3 group-hover:scale-110 transition-transform ${achievement.color}`}
                      >
                        {achievement.icon}
                      </div>
                      <h3 className="text-sm sm:text-lg font-semibold text-card-foreground mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-xs sm:text-base text-card-foreground/80 mb-3">{achievement.organization}</p>
                      <Badge
                        variant="outline"
                        className={`text-xs ${
                          achievement.type === "certification"
                            ? "border-primary/30 text-primary"
                            : achievement.type === "achievement"
                              ? "border-secondary/30 text-secondary"
                              : "border-accent/30 text-accent"
                        }`}
                      >
                        {achievement.date}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Additional Activities */}
              <div className="mt-12 sm:mt-16">
                <Card className="bg-card/50 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-primary text-center">Community Involvement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-3 gap-6">
                      <div className="text-center space-y-2">
                        <BookOpen className="w-8 h-8 text-secondary mx-auto" />
                        <p className="text-card-foreground font-medium text-sm sm:text-base">
                          Active IET and IEEE member
                        </p>
                      </div>
                      <div className="text-center space-y-2">
                        <Users className="w-8 h-8 text-secondary mx-auto" />
                        <p className="text-card-foreground font-medium text-sm sm:text-base">
                          Organized Tech Avishkar 2.0 - National hackathon with 200+ participants
                        </p>
                      </div>
                      <div className="text-center space-y-2">
                        <Trophy className="w-8 h-8 text-secondary mx-auto" />
                        <p className="text-card-foreground font-medium text-sm sm:text-base">
                          Conducted workshops and expert talks on emerging technologies
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6">
          <div className="container mx-auto">
            <div className="max-w-2xl mx-auto text-center space-y-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-balance">Let's Build Something Amazing</h2>
              <p className="text-base sm:text-lg text-muted-foreground text-pretty">
                I'm always excited to discuss innovative AI projects, collaborate on cutting-edge research, or explore 
                how we can leverage technology to solve real-world challenges. Let's connect and create impact together!
              </p>

                <div className="grid lg:grid-cols-2 gap-8 mt-8 sm:mt-12">
                  <div className="space-y-6">
                    <Card className="bg-card/50 border-primary/20">
                      <CardContent className="p-4 sm:p-6 text-center">
                        <Mail className="w-6 sm:w-8 h-6 sm:h-8 text-primary mx-auto mb-4" />
                        <h3 className="font-semibold text-card-foreground mb-2">Email</h3>
                        <p className="text-card-foreground/80 text-sm sm:text-base">reemk3103@gmail.com</p>
                      </CardContent>
                    </Card>
                  </div>
                  <ContactForm />
                </div>              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 sm:mt-8">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => window.open("mailto:reemk3103@gmail.com")}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
                  onClick={() => window.open("https://www.linkedin.com/in/reem-k-184153248/", "_blank")}
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  Connect on LinkedIn
                </Button>
              </div>

              <div className="flex justify-center space-x-6 mt-6 sm:mt-8">
                <a
                  href="https://github.com/Reemkaleem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-6 sm:w-8 h-6 sm:h-8" />
                </a>
                <a
                  href="https://www.linkedin.com/in/reem-k-184153248/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-6 sm:w-8 h-6 sm:h-8" />
                </a>
                <a
                  href="mailto:reemk3103@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-6 sm:w-8 h-6 sm:h-8" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Achievement Modal */}
      {selectedAchievement !== null && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="relative bg-background rounded-lg max-w-4xl max-h-[90vh] w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors"
            >
              <span className="text-xl">&times;</span>
            </button>
            
            {/* Modal content */}
            <div className="flex flex-col md:flex-row h-full">
              {/* Image section */}
              <div className="flex-1 bg-black flex items-center justify-center p-4 min-h-[300px] md:min-h-[500px]">
                <div className="relative w-full h-full max-w-2xl max-h-96 md:max-h-full">
                  <Image
                    src={achievements[selectedAchievement].image || "/placeholder.svg"}
                    alt={achievements[selectedAchievement].title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 80vw"
                    priority
                  />
                </div>
              </div>
              
              {/* Details section */}
              <div className="w-full md:w-80 p-6 space-y-4 overflow-y-auto">
                <div className={`inline-flex p-3 rounded-full bg-primary/10 ${achievements[selectedAchievement].color}`}>
                  {achievements[selectedAchievement].icon}
                </div>
                
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                  {achievements[selectedAchievement].title}
                </h2>
                
                <p className="text-base sm:text-lg text-muted-foreground">
                  {achievements[selectedAchievement].organization}
                </p>
                
                <Badge
                  variant="outline"
                  className={`text-sm ${
                    achievements[selectedAchievement].type === "certification"
                      ? "border-primary/30 text-primary"
                      : achievements[selectedAchievement].type === "achievement"
                        ? "border-secondary/30 text-secondary"
                        : "border-accent/30 text-accent"
                  }`}
                >
                  {achievements[selectedAchievement].date}
                </Badge>
                
                <div className="pt-4">
                  <h3 className="font-semibold text-foreground mb-2">Achievement Type</h3>
                  <Badge className="capitalize">
                    {achievements[selectedAchievement].type}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-border">
        <div className="container mx-auto">
          <div className="text-center text-muted-foreground">
            <p className="text-sm sm:text-base">&copy; 2024 Reem Kaleem. Built with Next.js and passion for AI/ML.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
