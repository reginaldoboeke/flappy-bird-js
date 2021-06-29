console.log('[reginaldoboeke] Flappy Bird');

import { Background } from './controllers/Background';
import { FlappyBird } from './controllers/FlappyBird';
import { Floor } from './controllers/Floor';

const sprites = new Image();
sprites.src = '../assets/sprites.png';

const canvas  = document.querySelector<HTMLCanvasElement>('canvas#game') as HTMLCanvasElement;
const context = canvas.getContext('2d') as CanvasRenderingContext2D;

const flappyBird = new FlappyBird(context, sprites);
const floor = new Floor(canvas, context, sprites);
const background = new Background(canvas, context, sprites);

function start(): void {
  background.draw();
  floor.draw();
  flappyBird.update();
  flappyBird.draw();

  requestAnimationFrame(start);
} 

start();
