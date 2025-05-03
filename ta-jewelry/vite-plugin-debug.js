import fs from 'fs'
import path from 'path'

// Custom plugin to debug file resolution issues
export function debugResolvePlugin() {
  return {
    name: 'debug-resolve-plugin',
    configResolved(config) {
      console.log('Vite configuration resolved:')
      console.log('- Base:', config.base)
      console.log('- Root:', config.root)
      console.log('- Build outDir:', config.build.outDir)
      
      const indexPath = path.resolve(config.root, 'index.html')
      const mainPath = path.resolve(config.root, 'src/main.tsx')
      
      console.log('- Index HTML exists:', fs.existsSync(indexPath))
      console.log('- Main TSX exists:', fs.existsSync(mainPath))
    },
    transform(code, id) {
      if (id.includes('index.html')) {
        console.log('Transforming index.html:', id)
        console.log('Original code:', code)
      }
      return null
    },
    resolveId(id, importer) {
      if (id.includes('main.tsx')) {
        console.log('Resolving:', id)
        console.log('Importer:', importer)
      }
      return null
    }
  }
} 