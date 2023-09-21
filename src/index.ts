//import { Assets } from "pixi.js";
//import { assets } from "./assets";
//import { KeyBoard } from "./util/keyboard";
//import { TweenScene } from "./Scenes/TweenScene";

//import { AnimationScene } from "./Scenes/AnimationScene";
import { SceneManager } from "./util/SceneManager";
//import { loaderScene } from "./Scenes/loaderScene";

import { MenuScene } from "./Scenes/MenuScene";
//import { loaderScene } from "./Scenes/loaderScene";
//import { TextScene } from "./Scenes/TextScene";
//import { SpritesheetScene } from "./Scenes/SpritesheetScene";
//import { TickerScene } from "./Scenes/TickerScene";
//import { SoundScene } from "./Scenes/SoundScene";

SceneManager.initialize();
	SceneManager.changeScene(new MenuScene );


