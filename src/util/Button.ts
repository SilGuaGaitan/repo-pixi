import { Container, Sprite, Texture } from "pixi.js";
import { MenuScene } from "../Scenes/MenuScene";


export class Button extends Container{
    static CLIKED_EVENT(CLIKED_EVENT: any) {
        throw new Error("Method not implemented.");
    }

    
    private def: Texture;
   
    private spr: Sprite;

    constructor(def: Texture)
    {
        super();
        this.def= def;
       
        this.spr= Sprite.from(def);
        this.scale.set(0.1);
        this.position.set(100,100);
        this.addChild(this.spr);
        this.spr.interactive = true;
        this.spr.on("mousedown",this.onMouseDown,this);
       
    }
    private onMouseDown():void{
        console.log("boton clikeado",this);
        this.spr.texture = this.def;
    }
   
}
