/* ¡Es hora de poner el árbol de navidad en casa! 🎄

Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.

Si le pasamos el argumento 5, se pintaría esto:

____*____
___***___
__*****__
_*******_
*********
____#____
____#____
Creamos un triángulo de asteriscos * con la altura proporcionada y, a los lados, usamos el guión bajo _ para los espacios. Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.

Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #.

Otro ejemplo con un árbol de altura 3:

__*__
_***_
*****
__#__
__#__
Ten en cuenta que el árbol es un string y necesitas los saltos de línea \n para cada línea para que se forme bien el árbol. */

export default function createXmasTree(height) {
   let tree="";
   let trunk="";
   const charTrunk = '#';
   let toBuiltBase = (i)=>{
      let  base="";
      for(let j=height-i; j>0; j--){
         base += "_"; 
      }
      return base;
   }
   for(let i=1; i<=height; i++){
     tree += toBuiltBase(i); 
     for(let k=1; k<=i; k++){
         tree += k===1?"*":"**"; 
     }
     tree += toBuiltBase(i); 
     tree += "\n"; 
   }
   trunk = toBuiltBase(1) + charTrunk +  toBuiltBase(1) + "\n" + toBuiltBase(1) + charTrunk +    toBuiltBase(1);
   tree += trunk;
   return tree;
 }