var input = require("readline-sync");

// Funktio jossa tarkastetaan onko kyseessä palindromi vai ei
function onPalindromi(word) {
  let reversed = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  return reversed === word;
}

// Kysytään käyttäjältä sana joka halutaan tarkistaa
var word = input.question("Syötä sana: ");
// Tarkistetaan, onko sana palindromi
let tulos = onPalindromi(word);

// Tulostetaan vastaus true/false
console.log(tulos ? "Sana on palindromi." : "Sana ei ole palindromi.");
