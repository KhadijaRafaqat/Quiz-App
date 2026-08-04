const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language"
    ],
    correct: "Hyper Text Markup Language"
  },
  {
    question: "Which language is used to style web pages?",
    answers: [
      "HTML",
      "CSS",
      "JavaScript",
      "Python"
    ],
    correct: "CSS"
  },
  {
    question: "Which language is mainly used to make web pages interactive?",
    answers: [
      "CSS",
      "JavaScript",
      "SQL",
      "PHP"
    ],
    correct: "JavaScript"
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    answers: [
      "<link>",
      "<a>",
      "<href>",
      "<url>"
    ],
    correct: "<a>"
  },
  {
    question: "Which CSS property changes the text color?",
    answers: [
      "background-color",
      "font-color",
      "color",
      "text-style"
    ],
    correct: "color"
  },
  {
    question: "Which symbol is used to select an ID in CSS?",
    answers: [
      ".",
      "#",
      "*",
      "@"
    ],
    correct: "#"
  },
  {
    question: "Which JavaScript keyword is used to declare a variable that can be reassigned?",
    answers: [
      "const",
      "let",
      "define",
      "varies"
    ],
    correct: "let"
  },
  {
    question: "Which method is used to print something in the browser console?",
    answers: [
      "console.print()",
      "print()",
      "console.log()",
      "document.write()"
    ],
    correct: "console.log()"
  },
  {
    question: "Which method is commonly used to loop through an array in JavaScript?",
    answers: [
      "map()",
      "split()",
      "push()",
      "slice()"
    ],
    correct: "map()"
  },

];




const questionElement = document.getElementByID("question");
const optionsElement = document.getelementBYID("options");
const nextButton = document.getElementByID("next-btn");


let currentQuestion=0;

function showQuestion(){
    let currentQuiz = questions[currentQuestion];
    questionelement.innerText = currentQuiz.question;
    optionselement.innerHTML = "";
    currentQuiz.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerText = answer;
        button.classList.add("option");
        optionsElement.appendChild(button);
    })
}




