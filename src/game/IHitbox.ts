import { Rectangle } from "pixi.js";

export interface IHitbox
{
     gethitbox():Rectangle;

}
export function checkcollision(objA:IHitbox, objB:IHitbox):Rectangle | null
{
    const rA =objA.gethitbox();
    const rB =objB.gethitbox();
    const rightmostLeft = rA.left < rB.left ? rB.left:rA.left;
    const leftmostRight = rA.right > rB.right ? rB.right:rA.right;
    const bottommostTop = rA.top < rB.top ? rB.top:rA.top;
    const topmostBottom = rA.bottom > rB.bottom ? rB.bottom:rA.bottom;

    const makesenseHorizontal=rightmostLeft < leftmostRight;
    const makesenseVertical=bottommostTop <topmostBottom;
    if(makesenseHorizontal && makesenseVertical)
    {
        const retval = new Rectangle();
        retval.x=rightmostLeft;
        retval.y=bottommostTop;
        retval.width=leftmostRight-rightmostLeft;
        retval.height=topmostBottom-bottommostTop;
        return retval;
    }
        else
    {
        return null
    }
}