
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

  const handleSubscribe = async (e) => {
    e.preventDefault()
    if (!email) return

    setLoading(true)
    setMessage('')

    const { data, error } = await supabase
      .from('subscribers')
      .insert([{ email }])

    if (error) setMessage('Error: ' + error.message)
    else setMessage('Subscribed successfully!')

    setEmail('')
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubscribe} className="mt-10 flex items-center gap-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className="flex-1 border-b border-border bg-transparent py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
      />
      <button
        type="submit"
        disabled={loading}
        className="text-[11px] font-medium tracking-[0.15em] text-foreground transition-opacity hover:opacity-60 disabled:opacity-50"
      >
        {loading ? 'SUBSCRIBING...' : 'SUBSCRIBE →'}
      </button>
      {message && <p className="mt-4 text-sm text-center">{message}</p>}
    </form>
  )
}

<div className="footer-subscribe">
  <h2>STAY INFORMED.</h2>
  <p>Weekly research notes on markets, macro, and digital assets.</p>
  <SubscribeForm />
</div>