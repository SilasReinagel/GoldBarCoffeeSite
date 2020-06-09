import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		company: 'Gold Bar Espresso',
		phone: '+1 480 839 3082'
	}
});

export default app;