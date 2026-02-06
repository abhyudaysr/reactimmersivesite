const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// 🔐 Gmail transporter (App Password)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "a79270966@gmail.com",
    pass: "ayfw uaoi kvuw xkqd", // ✅ YOUR APP PASSWORD
  },
});

// 📩 API route
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false });
  }

  try {
    // 1️⃣ Email to Admin
    await transporter.sendMail({
      from: `"NovaTech Contact" <a79270966@gmail.com>`,
      to: "a79270966@gmail.com",
      subject: "📩 New Contact Form Submission",
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    // 2️⃣ Auto-reply to User
    await transporter.sendMail({
      from: `"NovaTech" <a79270966@gmail.com>`,
      to: email,
      subject: "Thanks for contacting NovaTech",
      text: `
Hi ${name},

Thank you for contacting NovaTech.
We have received your message and our team will get back to you shortly.

Regards,
NovaTech Team
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ success: false });
  }
});

// 🚀 Start server
app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
