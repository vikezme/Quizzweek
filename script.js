window.onload= function(){
  show(0)
}
let questions =[
{
  id: 1,
  question: "Commonly used datatypes do not includes_______",
  answer: "Alert",
  options:[
    "String",
    "Boolean",
    "Alert",
    "Number",
  ]
},
{
  id: 2,
  question: "The condition in IF/ELSE is enclosed within______",
  answer: "Parenthesis",
  options:[
    "Quotes",
    "Curly Brackets",
    "Parenthesis",
    "Square Brackets",
  ]
},
{
  id: 3,
  question: "Arrays in Javascript can be used to store______",
  answer: "All of these above",
  options:[
    "Number and Strings",
    "Other arrays",
    "Booleans",
    "All of these above",
  ]
},
{
  id: 4,
  question: "String values must be enclosed within_______ when being assigned to variables",
  answer: "Quotes",
  options:[
    "Commas",
    "Curly Brackets",
    "Quotes",
    "Parenthesis",
  ]
},
{
  id:5,
  question: "A very useful tool during development and debugging for printing content to be debugger is_______",
  answer: "Javascript",
  options:[
    "Javascript",
    "Terminal",
    "For loops",
    "Console log",
  ]
}
]

let question_count=0;
let point=0;

function next() {
  let user_answer = document.querySelector("li.option.active").innerHTML;


  if(user_answer == questions[question_count].answer){
    console.log("Correct");
    point +=10;
    sessionStorage.setItem("Points", point);
  }else {
    console.log("Wrong");

  }
  if(question_count == questions.length -1) {
    location.href = "end.html";
    return;
  }
  question_count++;
  show(question_count);

}
function show(count) {
  let question = document.getElementById("questions");

  question.innerHTML= `<h2>${questions[count].question}</h2>
  <ul id="option-group">
    <li class="option">${questions[count].options[0]}</li>
    <li class="option">${questions[count].options[1]}</li>
    <li class="option">${questions[count].options[2]}</li>
    <li class="option">${questions[count].options[3]}</li>
  </ul>`;

   toggleActive();
  }


  document.getElementById('btn-next').addEventListener("click", next);


function toggleActive(){
  let option = document.querySelectorAll("li.option");

  for (let i = 0; i < option.length; i++) {
      option[i].onclick= function() {
        for (let j = 0; j < option.length; j++) {
          if(option[j].classList.contains("active")){
            option[j].classList.remove("active");
          }
        }
        option[i].classList.add("active");
      }
  }

}


const startingMinutes = 1;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');

var timerCountdown= setInterval(updateCountdown, 1000);

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  countdownEl.innerHTML = `${minutes}:${seconds}`;
  time--;
  if (time <= 0) {
    clearInterval(timerCountdown);
    alert("Game Over");
  }
}
