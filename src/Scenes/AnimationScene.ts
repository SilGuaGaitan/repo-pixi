import {  Container, Texture } from "pixi.js";
import { StateAnimation } from "../game/StateAnimation";

export class AnimationScene extends Container
{
   
    private perro :StateAnimation;
    constructor(){
        super();
      

        this.perro = new StateAnimation();
        this.perro.position.set(100,200);
        this.perro.scale.set(0.5);
        this.addChild(this.perro);

       this.perro.addState("run",["dog1","dog2" ]);
       this.perro.addState("jump",[Texture.from("dog6"),Texture.from("dog7"),Texture.from("dog5")]);
       this.perro.addState("quiet",[Texture.from("dog4")])

       this.perro.playState("run");
    }
    public update(frame:number)
    {
        this.perro.update(frame);
      
    }
}