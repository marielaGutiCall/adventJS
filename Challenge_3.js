/* El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱

Las cartas son una cadena de texto que incluyen regalos y paréntesis ().

Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.

¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...

Ejemplos:

"bici coche (balón) bici coche peluche" // -> ✅
"(muñeca) consola bici" // ✅

"bici coche (balón bici coche" // -> ❌
"peluche (bici [coche) bici coche balón" // -> ❌
"(peluche {) bici" // -> ❌
"() bici" // ❌
      
Crea una función que pasándole el texto de la carta, devuelva true si es válida y false si no lo es. ¡Y acaba con la travesura del Grinch! */

export default function isValid(letter) {
   const regex = /[\{|\}|\[|\]]/g; 
   const regex2 = /\(\s*\)/gi;
   const arraySChar = [];
   let isValidLetter = false;
       if(regex.test(letter) || regex2.test(letter)) {
         return false;
       }
   const data = letter.split('').filter(e=>e!==' ' && (e === '(' || e === ')'));
   if(data.length % 2 === 0 && data.length !== 0){
       data.forEach((char, index)=>{
         if (data[index] === '(') arraySChar.push(char);
         else {
           if (data[index] === ')' && arraySChar.length>0) arraySChar.pop();
           else  arraySChar.push(char);
         }
       })
       if(arraySChar.length===0) isValidLetter=true;
     } 
      return isValidLetter;
   }