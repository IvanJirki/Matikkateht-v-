'use strict'

let rand_num1 = 0
let rand_num2 = 0

const getRandomIntnumberInRange = (min,max) => {
    return Math.floor(Math.random() * max) + min;
}

const randomizeNumbers = () => {
    rand_num1 = getRandomIntnumberInRange (1,10)
    rand_num2 = getRandomIntnumberInRange (1,10)
    document.querySelector('#num1').innerHTML = rand_num1
    document.querySelector('#num2').innerHTML = rand_num2
}

addEventListener("DOMContentLoaded", () => {
    randomizeNumbers()
});

document.querySelector('button').addEventListener('click', () => {
    const answer = Number(document.querySelector('input').value)
    const correctAnswer = rand_num1 + rand_num2
    if (answer === correctAnswer) {
        alert('Correct!')
        correctcount++
    } else {
        alert('Incorrect!')
        incorrectcount++
    }
    updatecounter()
    randomizeNumbers()
    document.querySelector('input').value=''
})

let correctcount = 0
let incorrectcount = 0

const updatecounter = () => {
    document.querySelector('#Correct output').innerHTML = correctcount 
    document.querySelector('#Incorrect output').innerHTML = incorrectcount 
}