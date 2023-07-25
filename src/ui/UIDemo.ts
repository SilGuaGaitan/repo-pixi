import { Container,Sprite /*Text*/ } from "pixi.js";

export class UIDemo extends Container{
    constructor(){
        super();
        const dialog:Container = new Container();
            dialog.x = 100;
            dialog.y = 50;
        const background = Sprite.from("ventana");
          dialog.addChild(background);

    }
}