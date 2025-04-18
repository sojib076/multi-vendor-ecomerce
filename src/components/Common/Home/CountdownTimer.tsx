"use client"

import { useEffect, useState } from "react"

interface CountdownTimerProps {
  targetDate: Date
  className?: string
}

export function CountdownTimer({ targetDate, className = "" }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      })
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const formatNumber = (num: number) => {
    return num.toString().padStart(2, "0")
  }

  return (
    <div className={className}>
      End In: {formatNumber(timeLeft.days)} : {formatNumber(timeLeft.hours)} : {formatNumber(timeLeft.minutes)} :{" "}
      {formatNumber(timeLeft.seconds)}
    </div>
  )
}
