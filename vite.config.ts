import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

import path from 'path';
export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
	const isDev = mode == 'development';
	
	return {
		plugins: [
			vue(),
			vueDevTools(),
		],
		base: process.env.NODE_ENV == 'lab' ? "/hp322pe.osd.simulator/" : "/",
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url))
			}
		},
		css: {
			devSourcemap: isDev
		},
		build: {
			rollupOptions: {
				output: {
					chunkFileNames: 'scripts/[name]-[hash].js',
					entryFileNames: 'scripts/[name]-[hash].js',
					assetFileNames: (chunkInfo) => {
						let subDir = "assets/images";
	
						if (path.extname(chunkInfo.name as string) === ".css") {
							subDir = "css";
						}
	
						if (path.extname(chunkInfo.name as string) === ".woff2") {
							subDir = "assets/fonts";
						}
	
						return `${subDir}/[name].[hash].[ext]`;
					},
					manualChunks: (id) => {
						if (id.includes("node_modules")) {
							return "vendor";
						}
					}
				}
			}
		}
	}
});
// https://vitejs.dev/config/
// export default defineConfig({
// 	plugins: [
// 		vue(),
// 		vueDevTools(),
// 	],
// 	resolve: {
// 		alias: {
// 			'@': fileURLToPath(new URL('./src', import.meta.url))
// 		}
// 	},
// 	css: {
// 		devSourcemap: isDev,
// 		preprocessorOptions: {
// 			scss: {
// 				additionalData: `
// 		@import "@frontendlibrary/lam8da-ui/libs/scss/eip-var.scss";
// 		`
// 			}
// 		}
// 	},
// 	build: {
// 		rollupOptions: {
// 			output: {
// 				chunkFileNames: 'scripts/[name]-[hash].js',
// 				entryFileNames: 'scripts/[name]-[hash].js',
// 				assetFileNames: (chunkInfo) => {
// 					let subDir = "assets/images";

// 					if (path.extname(chunkInfo.name as string) === ".css") {
// 						subDir = "css";
// 					}

// 					if (path.extname(chunkInfo.name as string) === ".woff2") {
// 						subDir = "assets/fonts";
// 					}

// 					return `${subDir}/[name].[hash].[ext]`;
// 				},
// 				manualChunks: (id) => {
// 					if (id.includes("node_modules")) {
// 						return "vendor";
// 					}
// 				}
// 			}
// 		}
// 	}
// })
