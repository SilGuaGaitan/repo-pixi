import { BitmapText, Container, Text, TextStyle } from "pixi.js";

export class TextScene extends Container
{
 constructor()
 {
    super();
    const tStyle = new TextStyle({
        align: "center",
        dropShadowAlpha: 5,
        dropShadowBlur: 8,
        fill: [
            "#0c5764",
            "#00FF00"
        ],
        fillGradientType: 1,
        fontFamily: " ",
        fontSize: 90,
        fontStyle: "italic",
        fontVariant: "small-caps",
        letterSpacing:5,
        lineJoin: "round",
        stroke: "#be1919"
    });
    const t =new Text("Hola Mundo", tStyle);
    this.addChild(t);

    const nt= new BitmapText("Hola Mundo!!",{fontName:"MiBitMap"});
     nt.y=300;
     this.addChild(nt);
 }
}