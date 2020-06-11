import Home from './Pages/Home.svelte';
import About from './Pages/About.svelte';
import Contact from './Pages/Contact.svelte';
import Menu from './Pages/Menu.svelte';

const Default = Home;

export default [
  { path: '', name: 'Home', component: Default },
  { path: '/', name: 'Home', component: Default },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact Us', component: Contact },
  { path: '/menu', name: 'Menu', component: Menu },
]
