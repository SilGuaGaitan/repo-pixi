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
	
	app.view.style!.width = gameWidth+"px";   
    app.view.style!.height = gameHeight+"px";

    (app.view.style as any).marginLeft = marginHorizontal ;
    (app.view.style as any).marginRight = marginHorizontal ;
    (app.view.style as any).marginTop = marginVertical ;
    (app.view.style as any).marginBottom = marginVertical ; 
	
})
window.dispatchEvent(new Event("resize"));

Assets.add("elefante","./ele.png");
Assets.add("gorrito", "./gorito_cumple.png");
Assets.add("pez","./pez.png");
Assets.add("gorroco","./gorrocolon.png");


Assets.load(["elefante","gorrito","pez","gorroco"]).then(()=>{
 const elefante: Sprite = Sprite.from("elefante");
 const gorro: Sprite = Sprite.from("gorrito");
 const pececito: Sprite = Sprite.from("pez");
 const hat: Sprite = Sprite.from("gorroco");

 gorro.scale.set(0.18);
 gorro.position.set(0,0);
 const festejo: Container = new Container();
 
 festejo.addChild(elefante);
 festejo.addChild(gorro);
 festejo.scale.set(0.5);
 festejo.x =10;
 festejo.y =10;
 console.log(gorro.toGlobal(new Point()));
 const aux = gorro.parent.toLocal(new Point(67,10));
 gorro.position.x = aux.x;
 gorro.position.y = aux.y;
 app.stage.addChild(festejo);

 const mar: Container = new Container();
 mar.addChild(pececito);
 mar.addChild(hat);
 pececito.scale.set(0.20);
 pececito.position.set(150,10);
 hat.scale.set(0.1);
 hat.position.set(45,20);
 mar.x = 150;
 mar.y = 10;

 app.stage.addChild(mar);

});