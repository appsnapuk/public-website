'use server'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

export async function bookDemo(formData: FormData) {
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const company = formData.get('company') as string

    console.log({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: process.env.SMTP_SECURE,
        username: process.env.SMTP_USERNAME,
        password: process.env.SMTP_PASSWORD,
    })

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
            user: process.env.SMTP_USERNAME,
            pass: process.env.SMTP_PASSWORD,
        },
    })

    // Define email options
    const mailOptions = {
        from: process.env.FROM_EMAIL,
        to: process.env.TO_EMAIL,
        subject: 'App Snap - New Demo Booking',
        text: `
      New demo booking request:
      Name: ${name}
      Email: ${email}
      Company: ${company}
    `,
        html: `
      <h1>New Demo Booking Request</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company}</p>
    `,
    }

    try {
        // Send email
        await transporter.sendMail(mailOptions)
        console.log('Email sent successfully')
        return { success: true }
    } catch (error) {
        console.error('Failed to send email:', error)
        return { success: false, error: 'Failed to send email' }
    }
}

