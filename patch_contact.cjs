const fs = require('fs');
let code = fs.readFileSync('src/components/ContactSection.tsx', 'utf8');

code = code.replace(/\/api\/contact/g, '/api/send-email');
fs.writeFileSync('src/components/ContactSection.tsx', code);
