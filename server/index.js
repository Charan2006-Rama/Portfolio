import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'Portfolio Contact Backend API' });
});

// Contact Form Endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message, botcheck } = req.body;

    // Honeypot spam check
    if (botcheck) {
      return res.status(400).json({ success: false, message: 'Spam detected' });
    }

    // Validation
    if (!name || !name.trim()) {
      return res.status(400).json({ success: false, message: 'Name is required' });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return res.status(400).json({ success: false, message: 'Valid email address is required' });
    }
    if (!message || message.trim().length < 10) {
      return res.status(400).json({ success: false, message: 'Message must be at least 10 characters long' });
    }

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const recipientEmail = process.env.RECIPIENT_EMAIL || 'ramacharanbalivada2006@gmail.com';

    // If SMTP Credentials exist in .env, send via Nodemailer
    if (emailUser && emailPass) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: emailUser,
          pass: emailPass
        }
      });

      const mailOptions = {
        from: `"${name}" <${emailUser}>`,
        replyTo: email,
        to: recipientEmail,
        subject: subject || `New Portfolio Message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
            <h2 style="color: #0284c7;">New Portfolio Contact Message</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
            <hr style="border: 1px solid #eee;" />
            <h3 style="color: #333;">Message:</h3>
            <p style="background: #f8fafc; padding: 15px; border-radius: 8px; border-left: 4px solid #0284c7;">${message.replace(/\n/g, '<br>')}</p>
          </div>
        `
      };

      await transporter.sendMail(mailOptions);
      console.log(`[Backend Server] Email successfully sent from ${name} <${email}>`);
      return res.json({ success: true, message: 'Message sent successfully to inbox' });
    } else {
      // Log cleanly if SMTP is pending config
      console.log('====================================================');
      console.log('[Backend Server] Received Portfolio Contact Submission:');
      console.log(`Name:    ${name}`);
      console.log(`Email:   ${email}`);
      console.log(`Subject: ${subject || 'N/A'}`);
      console.log(`Message: ${message}`);
      console.log('====================================================');

      return res.json({
        success: true,
        message: 'Message received and logged by Express backend server.'
      });
    }
  } catch (error) {
    console.error('[Backend Server Error]:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error processing contact message. Please try again.'
    });
  }
});

app.listen(PORT, () => {
  console.log(`⚡ Portfolio Backend Express Server running on http://localhost:${PORT}`);
});
