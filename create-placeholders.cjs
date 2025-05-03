/**
 * This script creates necessary directories for placeholder images
 * Run with: node create-placeholders.cjs
 */

const fs = require('fs');
const path = require('path');

const directories = [
  'public/images',
  'public/images/gallery',
  'public/images/gallery/rings',
  'public/images/gallery/necklaces',
  'public/images/gallery/earrings',
  'public/images/gallery/bridal',
  'public/images/gallery/custom'
];

// Create directories
directories.forEach(dir => {
  const fullPath = path.join(__dirname, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`Created directory: ${fullPath}`);
  } else {
    console.log(`Directory already exists: ${fullPath}`);
  }
});

// Create placeholder text files to remind users to add real images
const imagePlaceholders = [
  { path: 'public/images/hero-placeholder.jpg', message: 'Replace with hero banner image (1920x1080px recommended)' },
  { path: 'public/images/about-placeholder.jpg', message: 'Replace with about section image (800x600px recommended)' },
  { path: 'public/images/story-placeholder.jpg', message: 'Replace with story image (800x600px recommended)' },
  { path: 'public/images/founder-placeholder.jpg', message: 'Replace with founder image (600x600px recommended)' },
  
  // Gallery placeholders - rings
  { path: 'public/images/gallery/rings-1.jpg', message: 'Replace with ring image 1 (500x500px recommended)' },
  { path: 'public/images/gallery/rings-2.jpg', message: 'Replace with ring image 2 (500x500px recommended)' },
  { path: 'public/images/gallery/rings-3.jpg', message: 'Replace with ring image 3 (500x500px recommended)' },
  { path: 'public/images/gallery/rings-4.jpg', message: 'Replace with ring image 4 (500x500px recommended)' },
  
  // Gallery placeholders - necklaces
  { path: 'public/images/gallery/necklace-1.jpg', message: 'Replace with necklace image 1 (500x500px recommended)' },
  { path: 'public/images/gallery/necklace-2.jpg', message: 'Replace with necklace image 2 (500x500px recommended)' },
  { path: 'public/images/gallery/necklace-3.jpg', message: 'Replace with necklace image 3 (500x500px recommended)' },
  { path: 'public/images/gallery/necklace-4.jpg', message: 'Replace with necklace image 4 (500x500px recommended)' },
  
  // Gallery placeholders - earrings
  { path: 'public/images/gallery/earrings-1.jpg', message: 'Replace with earrings image 1 (500x500px recommended)' },
  { path: 'public/images/gallery/earrings-2.jpg', message: 'Replace with earrings image 2 (500x500px recommended)' },
  { path: 'public/images/gallery/earrings-3.jpg', message: 'Replace with earrings image 3 (500x500px recommended)' },
  { path: 'public/images/gallery/earrings-4.jpg', message: 'Replace with earrings image 4 (500x500px recommended)' },
  
  // Gallery placeholders - bridal sets
  { path: 'public/images/gallery/bridal-1.jpg', message: 'Replace with bridal set image 1 (500x500px recommended)' },
  { path: 'public/images/gallery/bridal-2.jpg', message: 'Replace with bridal set image 2 (500x500px recommended)' },
  { path: 'public/images/gallery/bridal-3.jpg', message: 'Replace with bridal set image 3 (500x500px recommended)' },
  { path: 'public/images/gallery/bridal-4.jpg', message: 'Replace with bridal set image 4 (500x500px recommended)' },
  
  // Gallery placeholders - custom designs
  { path: 'public/images/gallery/custom-1.jpg', message: 'Replace with custom design image 1 (500x500px recommended)' },
  { path: 'public/images/gallery/custom-2.jpg', message: 'Replace with custom design image 2 (500x500px recommended)' },
  { path: 'public/images/gallery/custom-3.jpg', message: 'Replace with custom design image 3 (500x500px recommended)' },
  { path: 'public/images/gallery/custom-4.jpg', message: 'Replace with custom design image 4 (500x500px recommended)' },
];

// Create placeholder text files
imagePlaceholders.forEach(placeholder => {
  const fullPath = path.join(__dirname, placeholder.path);
  const dirName = path.dirname(fullPath);
  
  // Ensure the directory exists
  if (!fs.existsSync(dirName)) {
    fs.mkdirSync(dirName, { recursive: true });
  }
  
  // Create a placeholder text file (not an actual image)
  if (!fs.existsSync(fullPath)) {
    fs.writeFileSync(fullPath + '.txt', placeholder.message);
    console.log(`Created placeholder file: ${fullPath}.txt`);
  } else {
    console.log(`File already exists: ${fullPath}`);
  }
});

console.log('Placeholder setup complete! Replace the .txt files with actual images.'); 