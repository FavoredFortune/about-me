//help catch errors right away with 'use strict' BEST PRACTICE
'use strict';

//Global variables
var scoreCounter = 0;
var answerFlag = false;

var sectionEl = document.getElementById('quiz-info');

//Greeting/Remember user
function checkLocalStorage(){
  if (localStorage.getItem('userName') === null) {
    var userName = prompt('Welcome. You\'ll be getting to know me here. So I\'d like to get to know you too. Would you tell me your name?');

    //add user name  and custom message to DOM
    var articleElement = document.getElementById('intro');
    var paraElement = document.createElement('p');
    paraElement.textContent = 'Welcome to this page, ' + userName + '. This mini-site is meant to be a way to learn more about me, Suzanne. To that end, this page offers information about my interests and then a button to take a quiz, to see what you\'ve learned. Ready for some fun?';
    articleElement.appendChild(paraElement);

    localStorage.setItem('userName', JSON.stringify(userName));
  }
  else {
    userName = JSON.parse(localStorage.userName);
    alert('Welcome back, ' + userName + '.');

    //add user name  and custom message to DOM
    var articleElement = document.getElementById('intro');
    var paraElement = document.createElement('p');
    paraElement.textContent = 'Welcome back to this page, ' + userName + '. As you know, this mini-site is meant to be a way to learn more about me, Suzanne. To that end, this page offers information about my interests and then a button to take a quiz, to see what you\'ve learned. Ready for some fun?';
    articleElement.appendChild(paraElement);
  }
}

checkLocalStorage();