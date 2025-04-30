// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';

// This is a basic placeholder. In a real application, you would:
// 1. Validate the input data more thoroughly.
// 2. Use a library like Nodemailer to send an email.
// 3. Store the message in a database.
// 4. Add proper error handling and security measures (rate limiting, etc.).

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Basic validation (should be more robust)
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    console.log('Received contact form submission:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Subject:', subject);
    console.log('Message:', message);

    // --- Simulate sending email/saving to DB ---
    // Replace this section with your actual email sending or database logic
    console.log('Simulating sending email...');
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate delay
    console.log('Email supposedly sent!');
    // --- End simulation ---


    return NextResponse.json({ message: 'Message received successfully!' }, { status: 200 });

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
