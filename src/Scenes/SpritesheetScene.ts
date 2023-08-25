import { Container, Sprite, Spritesheet, Texture } from "pixi.js";


export class SpritesheetScene  extends Container{
    constructor (){
        super();
        const perro = Sprite.from("gatito/perro/0.png");
        perro.scale.set(0.2);
        this.addChild(perro);
        const raton=Sprite.from("gatito/juguetes/raton.png");
        raton.position.set(150,50);
        raton.scale.set(0.2);
        this. addChild(raton);
        const otroperro=Sprite.from("gatito/perro/3.png");
        otroperro.scale.set(0.2);
        otroperro.position.set(300,50);
        this.addChild(otroperro);

        
        const spritesheet= new Spritesheet(Texture.from("packcat"),
        {
            frames:{
                "cat1":{
                    frame:{
                        x:0,
                        y:0,
                        w:1000,
                        h:1000
                    }
                }
            },
            meta:{
                scale:"4"
            }
        });
        spritesheet.parse().then(()=>{
            const cat= Sprite.from("cat1");
            cat.position.set(200,200);
            this.addChild(cat);
        });    
        
    }
    public update()
    {
        
    }
}