function analyzeSentence(sentence) {
 let length = 0;  
 let wordCount = 0;
 let vowelCount = 0;
 
 for (let i = 0; i < sentence.length; i++) {
    const character = sentence[i];

    if (character !== '') {
        length++;

        if (character === '.') {
            length--;
            break;
        } 
        if (isVowel(character)) {
            vowelCount++;
        }
    } else if (length > 0) {
        wordCount++;
    }
 }                 
console.log('sentence length:', length);
console.log('Word Count:', wordCount + 1);
console.log('Vowel Count:', vowelCount);
}

function isVowel(character) {
    const Vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    return Vowels.includes(character);
}

const sentence = 'Hello Mr Andre';
const analysis = analyzeSentence(sentence);