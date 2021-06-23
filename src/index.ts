import { tech } from './tech';

function start() {
  const app = document.querySelector('#app');

  if (!app) return;

  app.innerHTML = `Hello ${tech}!`;
}

start();

