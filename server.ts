import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

  app.use(express.json());

  // API Route for sending emails
  app.post("/api/send-email", async (req, res) => {
    try {
      const { subject, message, contactInfo, type } = req.body;

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.zoho.eu",
        port: parseInt(process.env.SMTP_PORT || "465", 10),
        secure: true, // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER || "support@buyretatrutideonline.uk", // e.g., support@buyretatrutideonline.uk
          pass: process.env.SMTP_PASS,
        },
      });

      const adminEmail = process.env.ADMIN_EMAIL || "support@buyretatrutideonline.uk";
      const fromEmail = process.env.SMTP_USER || "support@buyretatrutideonline.uk";

      let textContent = "";
      if (type === "order") {
        textContent = `New Order Received!\n\nContact Details:\n${contactInfo}\n\nOrder Details:\n${message}`;
      } else {
        textContent = `New Contact Form Submission!\n\nContact Details:\n${contactInfo}\n\nMessage:\n${message}`;
      }

      await transporter.sendMail({
        from: `Buy Retatrutide Online <${fromEmail}>`,
        to: adminEmail,
        subject: subject || "New Submission",
        text: textContent,
      });

      res.status(200).json({ success: true, message: "Email sent successfully" });
    } catch (error) {
      console.error("Email error:", error);
      res.status(500).json({ success: false, error: "Failed to send email" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
