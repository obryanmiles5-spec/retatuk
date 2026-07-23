const fs = require('fs');
let code = fs.readFileSync('src/components/CartDrawer.tsx', 'utf8');

code = code.replace(/registryNumber:\s*"",?\n?\s*/g, '');
code = code.replace(/purpose:\s*"",?\n?\s*/g, '');

const val1Regex = /if\s*\(!form\.registryNumber\.trim\(\)\)\s*\{[^}]+\}/g;
code = code.replace(val1Regex, '');

const val2Regex = /if\s*\(!form\.purpose\.trim\(\)\s*\|\|[^}]+\}/g;
code = code.replace(val2Regex, '');

code = code.replace(/\n\*Lab Registry ID\/Licence:\*\s*\$\{form\.registryNumber\}/g, '');
code = code.replace(/\n\*Intended Application:\*\s*\$\{form\.purpose\}/g, '');

code = code.replace(/\\nRegistry:\s*\$\{form\.registryNumber\}/g, '');

const ui1Regex = /<div className="space-y-1">\s*<label className="block text-\[10px\] text-slate-400 font-mono uppercase">Lab Registry ID or Academic License Number \*\s*<\/label>[\s\S]*?<\/div>/;
code = code.replace(ui1Regex, '');

const ui2Regex = /<div className="space-y-1">\s*<label className="block text-\[10px\] text-slate-400 font-mono uppercase">Intended Scientific Application \*\s*<\/label>[\s\S]*?<\/div>/;
code = code.replace(ui2Regex, '');

fs.writeFileSync('src/components/CartDrawer.tsx', code);
