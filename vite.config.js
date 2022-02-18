import { defineConfig } from "vite"
export default defineConfig({
    // build: {
    //     rollupOptions: {
    //         external: [
    //             //'src/gobs.js',
    //             'src/models/cannonball.js',
    //             'src/models/player.js',
    //             'src/models/asteroid.js',
    //             'src/canvas.js',
    //             'src/nobs.js',
    //         ],
    //         input: {
    //             index: 'main.js',
    //             src: 'src/gobs.js'
    //         },
    //         output: {

    //         }
    //     }
    // },
    // input: {
    //     a: 'main.js',
    //     b: 'src/gobs.js',
    //     c: 'src/models/cannonball.js',
        
    //     d: 'src/models/player.js',
    //     e: 'src/models/asteroid.js',
        
    //     f: 'src/canvas.js',
    //     g: 'src/nobs.js' 
    // },
    base: '/orbitPortfolio/'
})