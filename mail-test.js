import nodemailer from "nodemailer";

async function main() {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST || "mail.lt-coding.com",
      port: 465,        
      secure: true, 
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
      logger: true,
      debug: true,
    });

    const info = await transporter.sendMail({
      from: `"LT Coding Test" <noreply@lt-coding.com>`,
      to: "artgish1964@gmail.com",
      subject: "SMTP 465 Test ✔",
      text: "This is a test email sent using nodemailer on port 465",
      html: "<b>This is a test email sent using nodemailer on port 465</b>",
    });

    console.log("✅ Message sent:", info.messageId);
  } catch (err) {
    console.error("❌ Email sending failed:", err);
  }
}

main();
