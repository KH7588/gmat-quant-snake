const fs = require('fs');
const path = require('path');

const examsDir = path.join(__dirname, '..', 'data', 'exams');
let changesMade = false;

console.log('Linting exam files...');

try {
  const files = fs.readdirSync(examsDir);

  for (const file of files) {
    if (file.endsWith('.ts')) {
      const filePath = path.join(examsDir, file);
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;

      // Fix 1: Ensure import path for 'questions' does not have a .ts extension
      content = content.replace(/'\.\.\/questions\.ts'/g, "'../questions'");

      // Fix 2: Escape standalone dollar signs followed by a number to prevent MathJax errors
      // This regex looks for a '$' that is NOT preceded by a backslash, and is followed by a digit.
      // It avoids breaking existing LaTeX like `$\frac{...}$` while fixing price formats like `$52.50`.
      content = content.replace(/(?<!\\)\$(\d)/g, '\\\\$$$1');
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`  - Fixed formatting in ${file}`);
        changesMade = true;
      }
    }
  }

  if (!changesMade) {
    console.log('All exam files are correctly formatted. No changes needed.');
  } else {
    console.log('Formatting fixes applied successfully.');
  }

} catch (error) {
  console.error('Error while linting exam files:', error);
  process.exit(1);
}
