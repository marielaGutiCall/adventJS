/* ¡Hay demasiados regalos 🎁! Y envolverlos es una locura...

Vamos a crear una función que pasándole un array de regalos, nos devuelva otro array pero donde todos los regalos han sido envueltos con asteriscos tanto por arriba como por los lados.

Sólo tienes que tener en cuenta unas cosillas ✌️:

Si el array está vacío, devuelve un array vacío
Los regalos son emojis 🎁... por lo que tenlo en cuenta a la hora de contar su longitud...
Por suerte, cada posición del array siempre tiene la misma longitud... */

export default function wrapGifts(gifts) {
   let charStar = '**';
   const giftsFrt = [];
   for(let i=0; i<gifts.length+2; i++){
     let charStar = '**';
     if(!(i===0 || i===(gifts.length+2)-1)) giftsFrt[i] = '*' + gifts[i-1] +  '*';
     else {
       for(let j =0; j<gifts[0].length; j++){
         charStar+='*';
       }
       giftsFrt[i] = charStar;
     }  
   }
   return giftsFrt;
 }