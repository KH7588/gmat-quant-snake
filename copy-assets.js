const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
const srcHtml = path.join(__dirname, 'index.html');
const destHtml = path.join(distDir, 'index.html');

// 確保 dist 資料夾存在
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// 複製 index.html
try {
  fs.copyFileSync(srcHtml, destHtml);
  console.log('Successfully copied index.html to dist/');
} catch (err) {
  console.error('Error copying index.html:', err);
  process.exit(1);
}