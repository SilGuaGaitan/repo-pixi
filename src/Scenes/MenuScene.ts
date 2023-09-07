import { Texture } from "pixi.js";
import { SceneBase } from "../util/SceneBase";
import { AnimationScene } from "./AnimationScene";
import { SceneManager } from "../util/SceneManager";
import { Button } from "../util/Button";


export class MenuScene extends SceneBase
{
    public update(): void {
        
    }
    constructor()
    {
        super();
        const btn= new Button(Texture.from("btnok"));
        btn.on(Button.CLIKED_EVENT,this.goToGame,this);
        btn.x=300;
        btn.y=200;
        this.addChild(btn);

    }
    private goToGame()
    {
        console.log("button clicked");
        SceneManager.changeScene(new AnimationScene());
    }
}