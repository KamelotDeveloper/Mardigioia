// vite.config.js
export default {
    build: {
      rollupOptions: {
        external: [
          'photoswipe/style.css'  // Excluir este módulo de la construcción final
        ]
      }
    }
  }
  