"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, FileText, Mail, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ResumePage() {
  const handleDownload = () => {
    // This will trigger download of the resume PDF
    const link = document.createElement('a')
    link.href = '/Reem_Resume_RR.pdf' // Your actual resume file
    link.download = 'Reem_Kaleem_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          {/* Back button */}
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>

          <Card className="bg-card/50 border-primary/20">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Download My Resume</CardTitle>
              <CardDescription>
                Get the latest version of my resume with detailed information about my experience, skills, and projects.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-muted/30 rounded-lg p-4 space-y-2">
                <h3 className="font-semibold text-primary">What's included:</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Educational background and achievements</li>
                  <li>• Technical skills and expertise</li>
                  <li>• Featured projects with detailed descriptions</li>
                  <li>• Certifications and awards</li>
                  <li>• Contact information</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleDownload}
                  className="flex-1 bg-primary hover:bg-primary/90"
                  size="lg"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF Resume
                </Button>
                <Button 
                  variant="outline"
                  className="flex-1 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                  size="lg"
                  onClick={() => window.open("mailto:reemk3103@gmail.com?subject=Resume Request", "_blank")}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Request via Email
                </Button>
              </div>

              <div className="text-center text-sm text-muted-foreground">
                <p>Last updated: September 2024</p>
                <p>For the most current version, feel free to contact me directly.</p>
              </div>
            </CardContent>
          </Card>

          {/* Additional info card */}
          <Card className="bg-card/50 border-primary/20 mt-6">
            <CardContent className="p-6">
              <h3 className="font-semibold text-primary mb-3">Quick Facts</h3>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Current CGPA</p>
                  <p className="font-medium">9.15/10</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Expected Graduation</p>
                  <p className="font-medium">2026</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Specialization</p>
                  <p className="font-medium">AI/ML & Computer Vision</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Key Skills</p>
                  <p className="font-medium">Python, TensorFlow, Flask</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}