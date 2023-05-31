import { Application, Assets, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});
Assets.add("myDino","./dino.jpg");
Assets.add("Clampy","./clampy.png");

Assets.load(["myDino","Clampy"]).then(()=>{

const clampy: Sprite = Sprite.from("myDino");
console.log("Hola Mundo",clampy.width, clampy.height);
//clampy.anchor.set(0.5);

clampy.x = 0;
clampy.y = 0;

app.stage.addChild(clampy);
});