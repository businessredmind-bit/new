
import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

// 🔑 Replace with your Supabase URL and Anon Key
const supabaseUrl = 'https://pfhrtmfjvxflvzaycysy.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmaHJ0bWZqdnhmbHZ6YXljeXN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM1MzI3ODgsImV4cCI6MjA4OTEwODc4OH0.PRN2bQqeMOZZCZeXaHxBWqNmToQ12lS36W45P5J6tWQ'
const supabase = createClient(supabaseUrl, supabaseKey)

export default function SubscribeForm() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [emailError, setEmailError] = useState('')

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleEmailChange = (e) => {
    const value = e.target.value
    setEmail(value)
    
    // Clear error when user starts typing
    if (emailError) setEmailError('')
  }

  const handleSubscribe = async (e) => {
    e.preventDefault()
    
    // Clear previous messages
    setMessage('')
    setEmailError('')

    // Validate email
    if (!email.trim()) {
      setEmailError('Email is required')
      return
    }

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address')
      return
    }

    setLoading(true)

    const { data, error } = await supabase
      .from('subscribers')
      .insert([{ email: email.trim() }])

    if (error) {
      if (error.code === '23505') { // Unique constraint violation
        setMessage('This email is already subscribed!')
      } else {
        setMessage('Error: ' + error.message)
      }
    } else {
      setMessage('Subscribed successfully!')
      setEmail('')
    }

    setLoading(false)
  }

  return (
    <form onSubmit={handleSubscribe} className="mt-10 flex flex-col items-center gap-4">
      <div className="flex items-center gap-4 w-full">
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="your@email.com"
          className={`flex-1 border-b bg-transparent py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none transition-colors ${
            emailError 
              ? 'border-red-500 focus:border-red-500' 
              : 'border-border focus:border-foreground'
          }`}
        />
        <button
          type="submit"
          disabled={loading}
          className="text-[11px] font-medium tracking-[0.15em] text-foreground transition-opacity hover:opacity-60 disabled:opacity-50"
        >
          {loading ? 'SUBSCRIBING...' : 'SUBSCRIBE →'}
        </button>
      </div>
      {emailError && <p className="text-red-500 text-sm text-center">{emailError}</p>}
      {message && <p className={`text-sm text-center ${message.includes('Error') || message.includes('already') ? 'text-red-500' : 'text-green-500'}`}>{message}</p>}
    </form>
  )
}

<div className="footer-subscribe">
  <h2>STAY INFORMED.</h2>
  <p>Weekly research notes on markets, macro, and digital assets.</p>
  <SubscribeForm />
</div>