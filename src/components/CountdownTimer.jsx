import { useEffect, useState } from 'react'
import '../css/CountDown.css'

const CountdownTimer = ({ date, time, compact = false }) => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 })
  const [isExpired, setIsExpired] = useState(false)

  useEffect(() => {
    const calculate = () => {
      const eventAt = new Date(`${date}T${time}`)
      const now = new Date()
      const diff = eventAt.getTime() - now.getTime()

      if (diff <= 0) {
        setIsExpired(true)
        return
      }

      // ✅ convert everything into total hours
      const totalHours = Math.floor(diff / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)

      setIsExpired(false)
      setTimeLeft({ hours: totalHours, minutes, seconds })
    }

    calculate()
    const interval = setInterval(calculate, 1000)
    return () => clearInterval(interval)
  }, [date, time])

  if (isExpired) {
    return <div className="expired">Event Started!</div>
  }

  return (
    <div className={`timer ${compact ? 'compact' : ''}`}>
      <div className="unit">
        <span className="value">{String(timeLeft.hours).padStart(2, '0')}</span>
        <span className="label">Hours</span>
      </div>
      <div className="unit">
        <span className="value">{String(timeLeft.minutes).padStart(2, '0')}</span>
        <span className="label">Min</span>
      </div>
      <div className="unit">
        <span className="value">{String(timeLeft.seconds).padStart(2, '0')}</span>
        <span className="label">Sec</span>
      </div>
    </div>
  )
}

export default CountdownTimer
