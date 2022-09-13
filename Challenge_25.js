/* Ayer, en noche buena, una família cenó por todo lo alto... Con tanta copa 🍾 encima todavía no han retirado los platos y la comida de ayer...

Un ratoncillo llamado midurat 🐭, que vió ayer el festín escondido, está relamiéndose los bigotes al ver todos los manjares que hay en el comedor.

Eso sí, hay que tener cuidado 😶 y sólo hacer los movimientos correctos para comer algo. Por eso, el ratón, que se ha visto los vídeos de midudev, va a crear una función para saber si su próximo movimiento es correcto o no ✅.

El ratoncillo se puede mover en 4 direcciones: up, down, left, right y el comedor es una matriz (un array de arrays) donde cada posición puede ser:

Un espacio vacío es que no hay nada
Una m es el ratón
Un * es la comida
Vamos a ver unos ejemplos:

const room = [
  [' ', ' ', ' '],
  [' ', ' ', 'm'],
  [' ', ' ', '*']
]

canMouseEat('up',    room)   // false
canMouseEat('down',  room)   // true
canMouseEat('right', room)   // false
canMouseEat('left',  room)   // false
 */

export default function canMouseEat(direction, game) {
   let obj,flag=true, position, locationMouse, i;
   let food = [];
   game.forEach((e,index)=>{
      let itemFound = e.find(ef=>ef==='m');
      if(itemFound) {
        obj = {
          'index': index,
          'arr': e
        }
        return obj;
      }
   });
   locationMouse = obj['arr'].indexOf('m');
   if(direction==='left' || direction==='right'){
     if(direction==='left' && locationMouse!==0){
          for(i=locationMouse; i>=0;i-- ){ 
              if(obj['arr'][i] === '*') food.push('*');
          }
     } else {
        if(locationMouse!==(obj['arr'].length)-1){
          for(i=locationMouse; i<(obj['arr'].length)-1;i++ ){
              if(obj['arr'][i+1] === '*') food.push('*');
          }
        } 
     }
     flag = false; 
   }
   if(direction==='up' || direction==='down'){
     if(direction==='up' && obj['index']!==0){
          for(i=obj['index']; i>0;i-- ){
                if(game[i-1][locationMouse] === '*') food.push('*');
          }
     } else {
        if(obj['index']!==(obj['arr'].length)-1){
          for(i=obj['index']; i<(game.length)-1;i++){
              if(game[i+1][locationMouse] === '*') food.push('*');
          }
        } 
     }
     flag = false; 
   }
   position = flag || food.length > 0;
   return position
 }