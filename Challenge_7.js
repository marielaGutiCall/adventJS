/* Mi amigo Dani está trabajando en una tienda y con la llegada de las navidades tiene el almacén hecho un desastre y no encuentra nada.

Vamos a crear una función contains que recibe dos parámetros: un objeto que define el almacén y el producto que buscamos.

La función debe devolver un booleano que indique si se encuentra el string como valor en algún nivel del objeto. Veamos unos ejemplos:

const almacen = {
  'estanteria1': {
    'cajon1': {
      'producto1': 'coca-cola',
      'producto2': 'fanta',
      'producto3': 'sprite'
    }
  },
  'estanteria2': {
    'cajon1': 'vacio',
    'cajon2': {
      'producto1': 'pantalones',
      'producto2': 'camiseta' // <- ¡Está aquí!
    }
  }
}
            
contains(almacen, 'camiseta') // true

const otroAlmacen = {
  'baul': {
    'fondo': {
      'objeto': 'cd-rom',
      'otro-objeto': 'disquette',
      'otra-cosa': 'mando'
    }
  }
}
  
contains(otroAlmacen, 'gameboy') // false
Ten en cuenta que la tienda es enorme. Tiene diferentes almacenes y, como has visto en los ejemplos, cada uno puede tener diferentes organizaciones.Lo importante es buscar que el producto está en los almacenes.
 */

export default function contains(store, product) {
   let flag = false;
   let profobj;
   profobj = (obj)=>{
       flag = false;
       for(const [keyInner,valueInner] of Object.entries(obj)){
            if(typeof(valueInner) === 'object'){
               if(valueInner!=={}) profobj(valueInner)
             } else {
               if(valueInner === product) flag = true
             }
       }
       return flag;
   }
   for(const [key,value] of Object.entries(store)){
       if(typeof(value) === 'object'){
         if(value!=={}){
            flag = profobj(value);
         }
       }else{
         if(value === product){
           flag = true
           return flag;
         }  
       }
   }
   return flag
 }