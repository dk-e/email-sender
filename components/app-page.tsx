'use client'

import { EmailForm } from './components/email-form'

export function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">Send Email with Resend</h1>
      <EmailForm />
    </main>
  )
}