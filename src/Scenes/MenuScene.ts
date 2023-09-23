import { SceneBase } from "./SceneBase";
//import { AnimationScene } from "./AnimationScene";
import { SceneManager } from "../util/SceneManager";
import { Sprite } from "pixi.js";
import { TickerScene } from "./TickerScene";




export class MenuScene extends SceneBase {
    public update(): void {}
    constructor() {
        super();
        const btn = Sprite.from("btnok");
        btn.scale.set(0.1);
        btn.position.set(100,100);
        btn.on("mousedown",this.goToGame, this);
        btn.interactive=true;
        btn.x = 300;
        btn.y = 200;
        this.addChild(btn);

    }
    private goToGame() {
        console.log("button clicked");
        SceneManager.changeScene(new TickerScene);
    }
}
