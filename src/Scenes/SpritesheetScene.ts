import { Container, Sprite, Spritesheet, Texture } from "pixi.js";

export class SpritesheetScene  extends Container{
    constructor (){
        super();
       /* const perro= Sprite.from("perrito");
        perro.scale.set(0.2);
        this.addChild(perro);*/

        const spritesheet= new Spritesheet(Texture.from("perritos"),
        {
            frames:{
                "dog1":{
                    frame:{
                        x:0,
                        y:0,
                        w:665,
                        h:665
                    }
                }
            },
            meta:{
                scale:"0.5"
            }
        });
        spritesheet.parse(()=>{
            const dog = new Sprite.from("perritos");
            this.addChild(dog);
        });
    }
    public update()
    {
        
    }
}