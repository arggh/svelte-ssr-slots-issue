import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import css from 'rollup-plugin-css-only';

export default {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'cjs',
    exports: 'default',
		name: 'app',
		file: 'build/index.js'
	},
	plugins: [
		svelte({
			compilerOptions: {
				generate: 'ssr'
			}
		}),
		css({ output: 'bundle.css' }),
		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		commonjs()
	]
};
