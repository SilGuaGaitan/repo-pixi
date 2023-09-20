//import { Container } from "pixi.js";
import { Assets, Graphics } from "pixi.js";
import { SceneBase } from "./SceneBase";
import { SceneManager } from "../util/SceneManager";
import { MenuScene } from "./MenuScene";
import { assets } from "../assets";

export class loaderScene extends SceneBase{
    public update(): void {};
    public bar:Graphics;
    constructor()
    {
        super();
        this.bar=new Graphics();
        this.setBarPercent(0);
       
        this.bar.x= SceneManager.WIDTH*0.5;
        this.bar.y=SceneManager.HEIGHT*0.5;
        this.bar.pivot.x=this.bar.width /2;
        this.bar.pivot.y=this.bar.height/2;
        this.addChild(this.bar);
        this.downAssets();
        
    }
    private downAssets()
    {
        Assets.addBundle("myAssets", assets); 
        Assets.loadBundle(["myAssets"]).then(()=>{
            this.whenLoaderFinished.bind(this);
            
        });
    }
    private setBarPercent(percent:number)
    {
        const factor= percent/100;
        this.bar.clear();
        this.bar.beginFill(0xFF0000,1);
        this.bar.drawRect(0,0, SceneManager.WIDTH *0.8 * factor, 50);
        this.bar.endFill();
        this.bar.lineStyle(5,0xFFFFFF,1);
       // this.bar.beginFill(0x000000);
        this.bar.drawRect(0,0, SceneManager.WIDTH *0.8, 50);
        this.bar.endFill();

    }
    private whenLoaderFinished()
    {
        SceneManager.changeScene(new MenuScene());
    }
}