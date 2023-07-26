import { AnimatedSprite, Texture, Sprite} from "pixi.js";
import { Scenebase } from "./Scenebase";
//import { KeyBoard } from "./util/keyboard";

export class Scene extends Scenebase{
    catAnimated: any;
    constructor()
    {
        super();
        const background =Sprite.from("selva");
            background.width=640;
            background.height=480;
            this.addChild(background);
        this.catAnimated = new AnimatedSprite(
            [
                Texture.from("cat1"),
                Texture.from("cat2"),
                Texture.from("cat3"),
                Texture.from("cat4"),
                Texture.from("cat5"),
                Texture.from("cat6"),
            ],
            false
            );
            this.catAnimated.scale.set(0.5);
            this.catAnimated.play();
            this.catAnimated.animationSpeed = 0.35;
            this.addChild(this.catAnimated);
           // Ticker.shared.add(this.update,this);
    }
    public override update(_deltaTime:number, deltaFrame: number){
        this.catAnimated.update(deltaFrame);
    }
    /*private update(deltaFrame:number){
        deltaFrame = deltaFrame * 0.25;
       
        //this.catAnimated.y ++;
        this.catAnimated.update(deltaFrame);
        if (KeyBoard.state.get("KeyB")){
            this.catAnimated.x ++;
        }

      /*  for (let index = 0 ; index < 1500000; index + 1){
         1+1;
        } 
    }*/
}