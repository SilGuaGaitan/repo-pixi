import { Application, Assets, Container, Point, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});
window.addEventListener("resize",()=>{
	console.log("resized!");
	const scaleX = window.innerWidth / app.screen.width;
	const scaleY = window.innerHeight / app.screen.height;
	const scale = Math.min( scaleX , scaleY);
	const gameWidth = Math.round(app.screen.width * scale);
	const gameHeight = Math.round(app.screen.height * scale) ;

	const marginHorizontal = Math.floor((window.innerWidth - gameWidth) / 2) + "px";
	const marginVertical = Math.floor((window.innerHeight - gameHeight) / 2) + "px";
	//console.log(marginHorizontal + "H");
	//console.log(marginVertical + "V");

	app.renderer.resize(gameWidth, gameHeight);
	const container = app.view.parentNode as HTMLElement ;

	container.style.marginLeft = marginHorizontal;
	container.style.marginRight = marginHorizontal;
	container.style.marginTop = marginVertical;
	container.style.marginBottom = marginVertical;
	
	
})
window.dispatchEvent(new Event("resize"));

Assets.add("elefante","./ele.png");
Assets.add("gorrito", "./gorito_cumple.png");


Assets.load(["elefante","gorrito"]).then(()=>{
 const elefante: Sprite = Sprite.from("elefante");
 const gorro: Sprite = Sprite.from("gorrito");

 gorro.scale.set(0.18);
 gorro.position.set(115,0);
 const festejo: Container = new Container();
 
 festejo.addChild(elefante);
 festejo.addChild(gorro);
 festejo.scale.set(0.5);
 festejo.x =100;
 festejo.y =200;
 console.log(gorro.toGlobal(new Point()));
 const aux = gorro.parent.toLocal(new Point(0,100));
 gorro.position.x = aux.x;
 gorro.position.y = aux.y;
 

 app.stage.addChild(festejo);
});