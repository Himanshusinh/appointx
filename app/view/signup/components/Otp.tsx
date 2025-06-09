'use client'
import React, { useEffect, useRef, useState } from 'react'

const OTPVerification = () => {
  const [otp, setOtp] = useState(['', '', '', '', ''])
  const [timer, setTimer] = useState(152) // 2 min 32 sec = 152 sec
  const inputRefs = useRef<HTMLInputElement[]>([])

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer(prev => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(countdown)
  }, [])

  const handleChange = (index: number, value: string) => {
    if (!/^[0-9]?$/.test(value)) return
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Auto focus next
    if (value && index < 4) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handleResend = () => {
    console.log('Resend OTP clicked')
    setTimer(152)
    setOtp(['', '', '', '', ''])
    inputRefs.current[0]?.focus()
  }

  const formatTime = (sec: number) => {
    const minutes = String(Math.floor(sec / 60)).padStart(2, '0')
    const seconds = String(sec % 60).padStart(2, '0')
    return `${minutes}:${seconds}`
  }

  return (
    <div className="flex flex-col items-center gap-6 p-4">
      {/* Timer */}
      <p className="text-blue-600 text-sm font-semibold">{formatTime(timer)}</p>

      {/* OTP Boxes */}
      <div className="flex gap-4">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            ref={(el) => (inputRefs.current[index] = el!)}
            className="w-10 h-10 text-center text-xl border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
          />
        ))}
      </div>

      {/* Resend */}
      <p className="text-sm text-gray-600">
        Didn’t receive the OTP?{' '}
        <button
          onClick={handleResend}
          disabled={timer !== 0}
          className={`ml-1 font-medium underline ${
            timer === 0 ? 'text-blue-600' : 'text-gray-400 cursor-not-allowed'
          }`}
        >
          RESEND OTP
        </button>
      </p>
    </div>
  )
}

export default OTPVerification
