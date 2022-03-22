import { defineConfig } from 'vite'
import path from "path";
import vue from '@vitejs/plugin-vue'
import styleImport, { VantResolve } from 'vite-plugin-style-import';
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		styleImport({
			resolves: [VantResolve()],
			libs: [
				{
				  libraryName: 'vant',
				  esModule: true,
				  resolveStyle: name => `vant/es/${name}/style/index.js`
				}
			]
		}),
	],
	css: {
		postcss: {
		  plugins: [
			require('autoprefixer'),
			require('postcss-px-to-viewport')({
			  unitToConvert: 'px',
			  viewportWidth: 375,
			  unitPrecision: 3,
			  propList: ['*'],
			  viewportUnit: 'vw',
			  fontViewportUnit: 'vw',
			  selectorBlackList: ['ignore-'],
			  minPixelValue: 1,
			  mediaQuery: false,
			  replace: true,
			  exclude: [],
			  landscape: true,
			  landscapeUnit: 'vw',
			  landscapeWidth: 750,
			}),
		  ],
		},
		preprocessorOptions: {
			less: {
				javascriptEnabled: true,
				additionalData:  `@import "${path.resolve(__dirname, 'src/assets/styles/base.less')}";`
			}
		}
	},
	resolve: {
		alias: {
			// 键必须以斜线开始和结束
			'@': path.resolve(__dirname, './src')
		},
		extensions: [],
	},
	server: {
		host: '10.1.8.15',
		port: 3012,
		// 是否自动在浏览器打开
		open: false,
		// 是否开启 https
		https: false,
		// 服务端渲染
		ssr: false,
		base: './vue',
		outDir: 'dist',
		// 反向代理
		proxy: {
			"/WebHandler.ashx": {
				// target: 'https://www.loongair.cn',// 生产
				// target: 'http://test-sp.loongair.cn', // 测试
				target: 'http://test-spm.loongair.cn', // 开发
				// target: 'http://10.1.8.15:88', // 潘曙凯
				changeOrigin: true
			},
		}
	}
})
