import { Application, Assets, BitmapFont, TextStyle, Ticker } from "pixi.js";
import { assets } from "./assets";
//import { KeyBoard } from "./util/keyboard";
import { AnimationScene } from "./Scenes/AnimationScene";
//import { TweenScene } from "./Scenes/TweenScene";
import { Group } from "tweedle.js";
//import { TextScene } from "./Scenes/TextScene";
//import { SpritesheetScene } from "./Scenes/SpritesheetScene";
//import { TickerScene } from "./Scenes/TickerScene";
//import { SoundScene } from "./Scenes/SoundScene";

export const WIDTH=640;
export const HEIGHT=480;

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0xFFFFFF,
	width: WIDTH,
	height: HEIGHT
});
//KeyBoard.initialize();
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

Assets.addBundle("myAssets", assets); 

Assets.loadBundle(["myAssets"]).then(() => {
	const aux=new TextStyle({
		align: "center",
        fill: [
            "#0c5764",
            "#FF00FF"
        ],
        fontFamily: "Minecraft",
        fontSize: 60
       
	})
	BitmapFont.from("MiBitMap",aux,{chars:BitmapFont.ASCII});

 const myScene= new AnimationScene();
  app.stage.addChild(myScene);
    Ticker.shared.add(function(){
		Group.shared.update()
	    myScene.update(Ticker.shared.deltaMS);
  
  })
});