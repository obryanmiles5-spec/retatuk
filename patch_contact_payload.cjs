const fs = require('fs');
let code = fs.readFileSync('src/components/ContactSection.tsx', 'utf8');

const targetStr = `        const response = await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });`;

const replacementStr = `        const contactInfo = \`Name: \${form.name}\\nEmail: \${form.email}\`;
        const response = await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            subject: \`Contact Form: \${form.subject}\`,
            contactInfo: contactInfo,
            message: form.message,
            type: "contact"
          }),
        });`;

code = code.replace(targetStr, replacementStr);
fs.writeFileSync('src/components/ContactSection.tsx', code);
