import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const iconsDir = path.join(__dirname, '../public/icons');

async function convertSVGtoPNG() {
  console.log('🔄 Converting SVG icons to PNG...\n');
  
  for (const size of sizes) {
    const svgFile = path.join(iconsDir, `icon-${size}x${size}.svg`);
    const pngFile = path.join(iconsDir, `icon-${size}x${size}.png`);
    
    if (fs.existsSync(svgFile)) {
      try {
        await sharp(svgFile)
          .resize(size, size)
          .png()
          .toFile(pngFile);
        
        console.log(`✅ Converted icon-${size}x${size}.png`);
      } catch (error) {
        console.error(`❌ Failed to convert ${size}x${size}:`, error.message);
      }
    }
  }
  
  console.log('\n✅ Icon conversion complete!');
}

convertSVGtoPNG().catch(console.error);
