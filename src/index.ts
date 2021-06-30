console.log('[reginaldoboeke] Flappy Bird');

import { App } from './App';

const sprites = new Image();
sprites.src = '../assets/sprites.png';

const canvas  = document.querySelector<HTMLCanvasElement>('canvas#game') as HTMLCanvasElement;
const context = canvas.getContext('2d') as CanvasRenderingContext2D;

new App(canvas, context, sprites);
