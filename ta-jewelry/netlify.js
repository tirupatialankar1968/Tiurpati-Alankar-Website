/**
 * Netlify build plugin to ensure proper environment setup
 */
module.exports = {
  onPreBuild: ({ utils }) => {
    console.log('Checking Node.js and npm versions...');
    console.log(`Node.js version: ${process.version}`);
    console.log(`NPM version: ${process.env.npm_version}`);
    
    // Check if required directories exist
    try {
      const fs = require('fs');
      if (!fs.existsSync('./dist')) {
        fs.mkdirSync('./dist', { recursive: true });
        console.log('Created dist directory');
      }
    } catch (error) {
      console.error('Error creating directories:', error);
    }
  },
  onBuild: ({ utils }) => {
    console.log('Build completed successfully!');
  },
  onError: ({ error, utils }) => {
    console.error('Build failed with error:', error);
  }
}; 