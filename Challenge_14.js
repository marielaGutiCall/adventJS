/* ¡Hemos perdido a un reno y falta poco más de una semana para Navidad! 😱

Lo peor es que son tantos que no sabemos cuál es el que nos falta... ¡Qué lío! A ver, Elfon Musk ha hecho inventario y nos pasa un array con los ids de cada reno.

👍 Lo bueno: los ids son números que pueden ir del 0 al 100, no están repetidos y sólo se ha perdido un reno.

👎 Lo malo: la lista está desordenada y podría faltar el último...

Necesitamos una función que al pasarle la lista de ids de renos nos diga inmediatamente cuál es el que falta:

missingReindeer([0, 2, 3]) // -> 1
missingReindeer([5, 6, 1, 2, 3, 7, 0]) // -> 4
missingReindeer([0, 1]) // -> 2 (¡es el último el que falta!)
missingReindeer([3, 0, 1]) // -> 2
missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]) // -> 8
missingReindeer([0]) // -> 1 (¡es el último el que falta!)
Parece fácil con una complejidad de O(n)... ¿crees que podrías hacerlo mejor? */

export default function missingReindeer(ids) {
   let flag= false;
   let missing =ids[0]==0? ids[0]+1: 0;
   let idSort; 
   if(ids.length>1){
     idSort = ids.sort((a,b) =>  a-b);
     for(let i=0; i<=Math.floor(idSort.length/2); i++){
       if(i===idSort[i]) flag = true;
       else {
         missing = i;
         return missing;
       }
     }
     for(let i=Math.floor(ids.length/2); i<ids.length; i++){
       if(i===idSort[i]) flag = true;
         else {
         missing = i;
         return missing;
       }
     }
     if(flag) missing = idSort[idSort.length-1] + 1 
   }
 return missing;
 }