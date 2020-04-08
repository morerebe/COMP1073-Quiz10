
var jokes = [];

let number = 0;


const question = document.querySelector ("h1");

const answer = document.querySelector("h2");

const nextJoke = document.querySelector("button");



function officialJoke() {
question.textContent = jokes[number].setup;
answer.textContent = jokes[number].punchline;
}



async function getJoke() {
const res = await fetch('https://official-joke-api.appspot.com/random_ten');

const data = await res.json();

jokes.push(...data);

officialJoke();
}


function next() {
  if (number === jokes.length - 1) {
    page = 0;
  }
  else {
    number +=1;
  }
  officialJoke();

}


nextJoke.addEventListener('click', next);

getJoke();
