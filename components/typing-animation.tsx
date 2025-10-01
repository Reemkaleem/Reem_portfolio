"use client"

import { useState, useEffect } from "react"

interface TypingAnimationProps {
  text: string
  duration?: number
  className?: string
}

export function TypingAnimation({ text, duration = 50, className = "" }: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, duration)

      return () => clearTimeout(timeout)
    } else {
      setIsComplete(true)
    }
  }, [currentIndex, duration, text])

  return (
    <span className={className}>
      {displayText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </span>
  )
}

interface MultiTypingAnimationProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetween?: number
  className?: string
}

export function MultiTypingAnimation({ 
  texts, 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  delayBetween = 2000,
  className = "" 
}: MultiTypingAnimationProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [displayText, setDisplayText] = useState("")

  useEffect(() => {
    // Safety check to ensure texts array exists and has content
    if (!texts || texts.length === 0) return
    
    const currentText = texts[currentTextIndex] || ""
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentCharIndex < currentText.length) {
          setDisplayText(currentText.slice(0, currentCharIndex + 1))
          setCurrentCharIndex(prev => prev + 1)
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), delayBetween)
        }
      } else {
        // Deleting
        if (currentCharIndex > 0) {
          setDisplayText(currentText.slice(0, currentCharIndex - 1))
          setCurrentCharIndex(prev => prev - 1)
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false)
          setCurrentTextIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [currentCharIndex, currentTextIndex, isDeleting, texts, typingSpeed, deletingSpeed, delayBetween])

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse text-primary">|</span>
    </span>
  )
}