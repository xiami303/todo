// 简单的图标生成脚本
// 创建基础的 SVG 图标（实际项目中应该使用专业工具生成）

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const iconsDir = path.join(__dirname, '../public/icons');

// 确保图标目录存在
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// 生成 SVG 图标
const generateSVGIcon = (size) => {
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#a855f7;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#ec4899;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#ef4444;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="${size}" height="${size}" rx="${size * 0.2}" fill="url(#grad1)"/>
  
  <!-- Microphone Icon -->
  <g transform="translate(${size * 0.5}, ${size * 0.5})">
    <!-- Mic body -->
    <rect x="${-size * 0.08}" y="${-size * 0.25}" width="${size * 0.16}" height="${size * 0.3}" rx="${size * 0.08}" fill="white"/>
    
    <!-- Mic stand -->
    <path d="M ${-size * 0.15} ${size * 0.15} Q ${-size * 0.15} ${size * 0.25}, 0 ${size * 0.25} Q ${size * 0.15} ${size * 0.25}, ${size * 0.15} ${size * 0.15}" 
          stroke="white" stroke-width="${size * 0.02}" fill="none"/>
    
    <!-- Mic base -->
    <line x1="0" y1="${size * 0.25}" x2="0" y2="${size * 0.32}" stroke="white" stroke-width="${size * 0.02}"/>
    <line x1="${-size * 0.1}" y1="${size * 0.32}" x2="${size * 0.1}" y2="${size * 0.32}" stroke="white" stroke-width="${size * 0.02}" stroke-linecap="round"/>
    
    <!-- Checkmark -->
    <circle cx="${size * 0.2}" cy="${-size * 0.2}" r="${size * 0.12}" fill="white" opacity="0.9"/>
    <path d="M ${size * 0.14} ${-size * 0.2} L ${size * 0.18} ${-size * 0.16} L ${size * 0.26} ${-size * 0.24}" 
          stroke="url(#grad1)" stroke-width="${size * 0.025}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
</svg>`;
  
  return svg;
};

// 为每个尺寸生成 SVG 文件
sizes.forEach(size => {
  const svg = generateSVGIcon(size);
  const filename = path.join(iconsDir, `icon-${size}x${size}.png`);
  const svgFilename = path.join(iconsDir, `icon-${size}x${size}.svg`);
  
  // 保存 SVG 文件
  fs.writeFileSync(svgFilename, svg);
  console.log(`Generated ${svgFilename}`);
});

console.log('\n✅ Icon generation complete!');
console.log('📝 Note: SVG files created. For production, convert to PNG using:');
console.log('   - Online tools like CloudConvert');
console.log('   - Or install sharp/jimp for Node.js conversion');
