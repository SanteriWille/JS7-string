// Oppgave 1

function minTekst(string) {
  if (string === '') {
    return "Teksten er tom";
  } else {
    return "Teksten er ikke tom";
  }
}

console.log(minTekst(''));
console.log(minTekst("Røyken VGS"));


// Oppgave 2

var splitTekst = "Jeg går på Røyken VGS";

console.log(splitTekst.split(" "));


// Oppgave 3

function palindrome(str) {
 var reversedStr = str.split("").reverse().join("");
 return str === reversedStr;
}

console.log(palindrome('racecar')); // true
console.log(palindrome('track')); // false


// oppgave 4

function sortString(str) {
  return str.split("").sort().join("");
}

console.log(sortString("santeri"));

// oppgave 5

function countOccurrences(text, letter) {
  var count = 0;

  for (var i = 0; i < text.length; i++) {
      if (text[i] === letter) {
          count++;
      }
  }
  return count; 
}

var text = "Dette er en bra tekst";
var letter = "e";
console.log(countOccurrences(text, letter));


// oppgave 6

function everyThreeLetters(text, number) {
  for (let i = 0; i < text.length; i += number) {
    console.log(text.substring(i, i + number));
  }
}

var parameter1 = 'ABCAABCAAADA'
var parameter2 = 3;

everyThreeLetters(parameter1, parameter2);


// Egenvurdering

// Oppgaven var grei
// Vanskelige oppgaver
//