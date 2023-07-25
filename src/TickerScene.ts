import { AnimatedSprite, Container, Texture, Ticker} from "pixi.js";

export class Scene extends Container{
    catAnimated: any;
    constructor()
    {
        super();
       

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
            Ticker.shared.add(this.update,this);
    }
    private update(deltaFrame:number){
        deltaFrame = deltaFrame * 0.25;
        this.catAnimated.x ++;
        this.catAnimated.y ++;
        this.catAnimated.update(deltaFrame);
        console.log(deltaFrame, Ticker.shared.FPS);
      /*  for (let index = 0 ; index < 1500000; index + 1){
         1+1;
        } */
    }
}