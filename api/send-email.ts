import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { subject, message, contactInfo, type } = req.body;

    // 1. Double check environment variables
    const host = process.env.SMTP_HOST || "smtp.zoho.eu";
    const port = parseInt(process.env.SMTP_PORT || "465", 10);
    const user = process.env.SMTP_USER || "support@buyretatrutideonline.uk";
    const pass = process.env.SMTP_PASS;

    console.log(`[SMTP CONFIG] Attempting to connect to host: ${host}, port: ${port}`);
    console.log(`[SMTP CONFIG] Using user: ${user}`);
    
    if (!pass) {
      console.warn("[SMTP CONFIG] WARNING: SMTP_PASS is not set in environment variables!");
    }

    // 4. Ensure transporter forces authentication and handles secure connection correctly
    const transporter = nodemailer.createTransport({
      host: host,
      port: port,
      secure: port === 465, // true for 465, false for other ports like 587
      requireTLS: port !== 465, // force TLS if port is not 465
      auth: {
        user: user,
        pass: pass,
      },
    });

    const adminEmail = process.env.ADMIN_EMAIL || "support@buyretatrutideonline.uk";
    const fromEmail = user;

    let textContent = "";
    if (type === "order") {
      textContent = `New Order Received!\n\nContact Details:\n${contactInfo}\n\nOrder Details:\n${message}`;
    } else {
      textContent = `New Contact Form Submission!\n\nContact Details:\n${contactInfo}\n\nMessage:\n${message}`;
    }

    const info = await transporter.sendMail({
      from: `Buy Retatrutide Online <${fromEmail}>`,
      to: adminEmail,
      subject: subject || "New Submission",
      text: textContent,
    });

    console.log(`[SMTP SUCCESS] Message sent: ${info.messageId}`);
    return res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error: any) {
    // 2 & 3. Robust try/catch with explicit console logs for error tracking
    console.error("====== EMAIL SENDING ERROR ======");
    console.error("Error Message:", error.message);
    console.error("Error Code:", error.code);
    console.error("SMTP Command:", error.command);
    console.error("SMTP Response:", error.response);
    console.error("Full Error Object:", error);
    console.error("=================================");
    
    return res.status(500).json({ 
      success: false, 
      error: "Failed to send email", 
      details: error.message 
    });
  }
}
