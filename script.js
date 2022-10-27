'use strict';

// Selecting and MAnipulating Elements
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct number!'

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent =  19;

document.querySelector('.guess').value = 14;
console.log(document.querySelector('.guess').value);
*/

//Handling click events
const getSecretNumber = () => Math.trunc(Math.random() * 20) + 1;

const setDisplayMessage = (message) => document.querySelector('.message').textContent = message;
const setDisplayTitule = (message) => document.querySelector('h1').textContent = message;

const number = document.querySelector('.number');

const backgroundColor = (color) => {document.querySelector('body').style.backgroundColor = color};

const setDisplayScore = (score) => document.querySelector('.score').textContent = score;

const valueQuery = document.querySelector('.guess'); 

let secretNumber = getSecretNumber();
let score = 20;
let highscore = 0;
let value;

document.querySelector('.check').addEventListener('click', function() {
    value = valueQuery.value;    
    console.log(value)
    const guess = Number(value);
    if(!guess) {
        setDisplayMessage('⛔️ No Number!');

    } else if(guess === secretNumber) {
        setDisplayMessage('🎉 Correct number!');
        number.textContent = secretNumber;
        number.style.width = '30rem';
        setDisplayTitule('YOU WON!');
        document.querySelector('h1').classList.add('win');
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    } else if (guess !== secretNumber){
        if (score > 0) {
            setDisplayMessage(guess > secretNumber ? '⬆️ Too high!' : '⬆️ Too low!');
            score--;
            setDisplayScore(score);
        } else {
            setDisplayMessage('💥 You lost the game!');
            setDisplayScore(0);
        }}
    });

document.querySelector('.again').addEventListener('click', function() {
    secretNumber = getSecretNumber();
    score = 20;
    number.textContent = '?';
    value = valueQuery.value = '';

    setDisplayScore(score)
    setDisplayMessage('Start guessing...');
    setDisplayTitule('GUESS MY NUMBER!');
    document.querySelector('h1').classList.remove('win');
    
    backgroundColor('#271e59');
    number.style.width = '15rem';


})