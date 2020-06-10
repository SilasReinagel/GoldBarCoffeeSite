import Home from './Pages/Home.svelte';
import About from './Pages/About.svelte';
import Contact from './Pages/Contact.svelte';
import Menu from './Pages/Menu.svelte';

export default [
  { path: '', name: 'Home', component: Home },
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact Us', component: Contact },
  { path: '/menu', name: 'Menu', component: Menu },
]
