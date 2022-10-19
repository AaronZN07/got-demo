import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/got-demo/',
	server: {
		port: 80,
		host: '0.0.0.0'
	},
	preview: {
		port: 3001,
	},
});
