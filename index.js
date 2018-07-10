/**
 * Converts text in english to braille code.
 * Write all code related to the DOM Manipulation here.
 * Using the english-to-braille mapper convert the text
 * in english language to that in the equivalent braille
 * code.
 */
import englishToBrailleLiteralSet from './english-to-braille.js';

const map = new Map(englishToBrailleLiteralSet);
function convert() {
  const inputstring = document.getElementById('sourceLangText').value;
  let str = '';
  for (let i = 0; i < inputstring.length; i ++) {
    str += map.get(inputstring[i]);
  }
  document.getElementById('targetLangText').innerHTML = str;
}
document.getElementById('btnConvertEnglishToBraille').addEventListener('click', convert);



