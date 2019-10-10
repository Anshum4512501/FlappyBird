import pedal from '/pedal';
let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");
ctx.clearRect(0,0,800,600);
const GAME_WIDTH = 800;
const GAME_HEIGHT =600;
let pedal =new pedal(GAME_WIDTH,GAME_HEIGHT);
pedal.draw(ctx);