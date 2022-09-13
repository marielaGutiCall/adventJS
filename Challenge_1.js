/* Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios. */
export default function contarOvejas(ovejas) {
   return ovejas.filter(oveja=>{
      return oveja.color === "rojo" && /a/gi.test(oveja.name.toLowerCase())
      && /n/gi.test(oveja.name.toLowerCase())
   });
 }