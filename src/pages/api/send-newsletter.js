import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  // Validate environment variables
  if (!process.env.MAIL_HOST || !process.env.MAIL_USER || !process.env.MAIL_PASS) {
    console.error('Missing email configuration');
    return res.status(500).json({ message: 'Email service not configured' });
  }

  // Configure the transporter with better error handling
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: parseInt(process.env.MAIL_PORT || '465'),
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
    connectionTimeout: 10000, // 10 seconds
    greetingTimeout: 10000,
    socketTimeout: 10000,
  });

  try {
    // Verify transporter configuration
    await transporter.verify();
    console.log('SMTP connection verified');

    // Send welcome email to subscriber
    const welcomeResult = await transporter.sendMail({
      from: `"LT Coding" <${process.env.MAIL_FROM}>`,
      to: email,
      subject: 'Welcome to Our Newsletter!',
      text: `Thank you for subscribing to our newsletter with ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 20px; border-radius: 10px;">
            <h2 style="color: #0C1682;">Welcome to LT Coding Newsletter! 🎉</h2>
            <p style="font-size: 16px;">Thank you for subscribing to our newsletter.</p>
            <p style="color: #666;">We'll keep you updated with the latest news and updates.</p>
            <p style="color: #666;">Your email: <strong>${email}</strong></p>
          </div>
        </div>
      `,
    });

    console.log('Welcome email sent:', welcomeResult.messageId);

    // Send notification to admin
    const notificationResult = await transporter.sendMail({
      from: `"LT Coding" <${process.env.MAIL_FROM}>`,
      to: 'artgish1964@gmail.com',
      subject: 'New Newsletter Subscription',
      text: `New subscription from: ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>New Newsletter Subscription</h2>
          <p>Email: <strong>${email}</strong></p>
          <p>Date: ${new Date().toLocaleString()}</p>
        </div>
      `,
    });

    console.log('Notification email sent:', notificationResult.messageId);
    
    return res.status(200).json({ 
      message: 'Subscription successful! Welcome email sent.' 
    });
    
  } catch (error) {
    console.error('Email error details:', {
      message: error.message,
      code: error.code,
      command: error.command
    });
    
    // More specific error messages
    if (error.code === 'EAUTH') {
      return res.status(500).json({ 
        message: 'Authentication failed. Please check email credentials.' 
      });
    } else if (error.code === 'ECONNECTION') {
      return res.status(500).json({ 
        message: 'Cannot connect to email server.' 
      });
    } else {
      return res.status(500).json({ 
        message: 'Failed to send email. Please try again later.',
        error: error.message 
      });
    }
  }
}