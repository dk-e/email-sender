'use client'

import { useState } from 'react'
import { useFormStatus } from 'react-dom'
import { sendEmail } from '../actions/send-email'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/components/ui/use-toast'

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Sending...' : 'Send Email'}
    </Button>
  )
}

export function EmailForm() {
  const [message, setMessage] = useState('')

  async function handleSubmit(formData: FormData) {
    const result = await sendEmail(formData)
    if (result.success) {
      toast({
        title: 'Email sent successfully!',
        description: 'Your email has been sent.',
      })
      setMessage('Email sent successfully!')
    } else {
      toast({
        title: 'Error sending email',
        description: 'There was an error sending your email. Please try again.',
        variant: 'destructive',
      })
      setMessage('Error sending email. Please try again.')
    }
  }

  return (
    <form action={handleSubmit} className="space-y-4">
      <Input type="email" name="to" placeholder="Recipient Email" required />
      <Input type="text" name="subject" placeholder="Subject" required />
      <Textarea name="html" placeholder="Email Content (HTML)" required />
      <SubmitButton />
      {message && <p>{message}</p>}
    </form>
  )
}