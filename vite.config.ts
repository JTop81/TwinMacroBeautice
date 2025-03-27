import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { fileURLToPath, URL } from "node:url";



// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020',
    },
  },

  resolve: {
    alias: {
      "assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
      "components": fileURLToPath(new URL("./src/components", import.meta.url)),
      "pages": fileURLToPath(new URL("./src/pages", import.meta.url)),
      "layouts": fileURLToPath(new URL("./src/layouts", import.meta.url))

    }
  },
  base: "/",

  esbuild: {
    // https://github.com/vitejs/vite/issues/8644#issuecomment-1159308803
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
  },
  plugins: [
    react({
      babel: {
        plugins: [
          'babel-plugin-macros',
          [
            '@emotion/babel-plugin-jsx-pragmatic',
            {
              export: 'jsx',
              import: '__cssprop',
              module: '@emotion/react',
            },
          ],
          [
            '@babel/plugin-transform-react-jsx',
            { pragma: '__cssprop' },
            'twin.macro',
          ],
        ],
      },
      
    }),
  ],

})

