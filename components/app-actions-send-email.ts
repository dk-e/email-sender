'use client'

'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData: FormData) {
  const to = formData.get('to') as string
  const subject = formData.get('subject') as string
  const html = formData.get('html') as string

  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to,
      subject,
      html,
    })

    return { success: true, data }
  } catch (error) {
    return { success: false, error }
  }
}