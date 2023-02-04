import { sound } from 'play';
import { createInterface } from 'readline';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

const words = [
    { word: 'required', audio: 'http://img2.tfd.com/pron/mp3/en/US/dg/dgshdssgstd3syd5d5gk.mp3' },
    { word: 'coke', audio: 'http://www.onelook.com/pronounce/macmillan/US/coke-American-English-pronunciation.mp3' },
    { word: 'archives', audio: 'http://s3.amazonaws.com/audio.vocabulary.com/1.0/us/A/1XLF2OTZ6RIGS.mp3' },
    { word: 'game', audio: 'http://dictionary.cambridge.org/us/media/english/uk_pron/u/ukg/ukgam/ukgambl004.mp3' },
];
let currentWord = 0;
let score = 0;

console.log('Welcome to the Node.js Typing Game!');
console.log('Start typing the words below:');
console.log(words[currentWord].word);

rl.on('line', (input) => {
    if (input.trim() === words[currentWord].word) {
        score++;
        console.log('Correct! Score: ' + score);
        sound(words[currentWord].audio, function () {
            sound('./foo.mp3');
        });
        currentWord++;
        if (currentWord === words.length) {
            console.log('You have completed the game! Your final score is: ' + score);
            rl.close();
        } else {
            console.log(words[currentWord].word);
        }
    } else {
        console.log('Incorrect. Try again.');
    }

});
