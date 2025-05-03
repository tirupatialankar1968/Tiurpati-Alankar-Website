// netlify-build-plugin.js
module.exports = {
  onPreBuild: async ({ utils }) => {
    console.log('Preparing build environment...');
    console.log('Current directory:', process.cwd());
    
    try {
      // Check if src/main.tsx exists
      const fs = require('fs');
      const path = require('path');
      
      const srcDir = path.join(process.cwd(), 'src');
      const mainFile = path.join(srcDir, 'main.tsx');
      
      console.log('Source directory exists:', fs.existsSync(srcDir));
      console.log('Main TSX exists:', fs.existsSync(mainFile));
      
      // List the files in src directory
      if (fs.existsSync(srcDir)) {
        console.log('Files in src directory:');
        fs.readdirSync(srcDir).forEach(file => {
          console.log('  -', file);
        });
      }
      
      // Check index.html path
      const indexFile = path.join(process.cwd(), 'index.html');
      if (fs.existsSync(indexFile)) {
        console.log('Index HTML exists');
        let indexContent = fs.readFileSync(indexFile, 'utf8');
        console.log('Index HTML path reference:', indexContent.match(/<script type="module" src="([^"]+)"/)[1]);
      }
    } catch (error) {
      console.error('Error in pre-build plugin:', error);
    }
  }
}; 