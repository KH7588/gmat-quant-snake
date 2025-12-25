const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');

// If the dist directory exists, remove it
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
  console.log('Successfully cleaned the dist directory.');
}
