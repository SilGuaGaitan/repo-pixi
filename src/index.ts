import { Assets } from "pixi.js";
import { assets } from "./assets";
//import { KeyBoard } from "./util/keyboard";
//import { TweenScene } from "./Scenes/TweenScene";

//import { AnimationScene } from "./Scenes/AnimationScene";
import { MenuScene } from "./Scenes/MenuScene";
import { SceneManager } from "./util/SceneManager";
//import { TextScene } from "./Scenes/TextScene";
//import { SpritesheetScene } from "./Scenes/SpritesheetScene";
//import { TickerScene } from "./Scenes/TickerScene";
//import { SoundScene } from "./Scenes/SoundScene";



Assets.addBundle("myAssets", assets); 

Assets.loadBundle(["myAssets"]).then(() => {
	const myScene= new MenuScene();
	SceneManager.initialize();
	SceneManager.changeScene(myScene);
     
});
