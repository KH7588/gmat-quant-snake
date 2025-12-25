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

      // BUGGY LINE REMOVED: The line that replaced dollar signs was here.
      // It was incorrectly escaping math delimiters as if they were currency.
      
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