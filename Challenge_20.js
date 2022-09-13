/* En la clase de español del pueblo de Laponia han creado un reto a la hora de escribir la carta a Papa Noél 🎅: la carta ✉️ tiene que contener todas las letras del alfabeto.

Desde el taller de Santa 🎅 se han enterado y quieren escribir una función que les diga si realmente la cadena de texto que les llega tiene, efectivamente, todas las letras del abecedario español 🔎.

Hay que tener en cuenta las letras en mayúscula y que las letras con acento y diéresis se consideran iguales. Por ejemplo la á y la ä cuenta como una a.

Vamos a ver unos ejemplos de frases:

pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho') // true
pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!') // true

pangram('Esto es una frase larga pero no tiene todas las letras del abecedario') // false
pangram('De la a a la z, nos faltan letras') // false
Y ya que estás... ¿Cuál es tu pangrama favorito? ¡Compártelo en nuestra comunidad de Discord! */
export default function pangram(letter) {
   let newLetter = letter.toLowerCase().match(/[a-zA-ZÀ-ÿ\u00f1\u00d1]/gi).join('');
   let regex = /([^n\u0300-\u036f]|n(?!\u0303(?!\u0300-\u036f)))[\u0300-\u036f]+/gi;
   let newLetterLength;
   const qLettersAlphabet = 27;
   newLetter = newLetter.normalize('NFD').replace(regex, '')
   newLetterLength = [...new Set([...newLetter])].length;
   return newLetterLength === qLettersAlphabet;
 }