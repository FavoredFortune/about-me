//help catch errors right away with 'use strict' BEST PRACTICE
'use strict';

//Global variables
var scoreCounter = 0;
var answerFlag = false;

//array for storing profiles created
Answers.allAnswers = [];

//Greeting/Remember user
function checkLocalStorage(){
  if (localStorage.getItem('userName') === null) {
    var userName = alert('Hello, It looks like you haven\'t seen the home page yet. Please go there now. Thanks!');
  } else {
    userName = JSON.parse(localStorage.userName);
    console.log (userName);

    var articleElement = document.getElementById('intro');
    var paraElement = document.createElement('p');
    paraElement.textContent = 'Welcome to the quiz page, ' + userName + '.';
    articleElement.appendChild(paraElement);
  }
}

//Constructor function to generate instances of full quiz answerst to set in localStorage
function AnswerQuiz(soozLocation,soozAge,soozKnit,soozMovies,soozMuseums,soozPets,arrayofCatNames){
  this.soozLocation = soozLocation;
  this.soozsAge = soozAge;
  this.soozKnit = soozKnit;
  this.soozMovies = soozMovies;
  this.soozMuseums = soozMuseums;
  this.soozPets = soozPets;
  this.arrayofCatNames = ['suzuki', 'buell', 'yamaha', 'kawasaki', 'honda', 'aprillia', 'triumph','benelli'];
  Answers.allAnswers.push(this);
}

//Example profile to test functionality
new AnswerQuiz('Betty','Y','44','Y','2','triumph');

//Set content variables for the form on the DOM
var userAnswers = document.getElementById('quiz');

function newQuizAnswer(event) {
  event.preventDefault();
  var soozLocation = event.target.soozLocation.value;
  var soozsAge = event.target. soozAge.value;
  var soozKnit = event.target.soozKnit.value;
  var soozMovies = event.target.soozMovies.value;
  var soozMuseums = event.target.oozMuseums.value;
  var soozPets = event.target.soozPets.value;
  var arrayofCatNames = [];

  //create new user object instance from the constructor function
  new AnswerQuiz(soozLocation,soozAge,soozKnit,soozMovies,soozMuseums,soozPets,arrayofCatNames);

  //put new user into local storage for results page
  for(var k in AnswerQuiz.allAnswers) {
    localStorage.setItem('newQuizAnswer',JSON.stringify(Answers.allAnswers[k]));
  }
  //redirect to results page when rest of function is complete, before function ends
  window.location = 'results.html';
}


// // Question about location
// function soozLocation(){
//   var soozLocation = prompt('Do I live by the space needle? Please respond with Y or N.').toUpperCase();
//   console.log(userName + ' thinks Sooz does/does not live by the space needle? ' + soozLocation);
//   if (soozLocation === 'Y') {
//     alert('Yep! You\'re right! If you\'re ever in the neighborhood, drop me a line to see if we can meet up.');
//     scoreCounter++;
//     console.log(userName + ' got ' + scoreCounter + ' point for this answer');
//   }
//   else if (soozLocation === 'N') {
//     alert('Surprise! I do live just a couple blocks from the Space Needle. If you\'re ever in the neighborhood, drop me a line to see if we can meet up.');
//     scoreCounter;
//     console.log(userName + ' got ' + scoreCounter + ' point for this answer');
//   }
//   else {
//     alert('Please enter Y or N for future questions! You got this one wrong. I do live by the space needle! That\'s okay ' + userName + ', give the next question a try.');
//     console.log(userName + ' thinks Sooz does/does not live by the space needle? ' + soozLocation);
//     scoreCounter;
//   }
// }

// //Question about age
// function soozsAge (){
//   var soozsAge = prompt('Do you think I\'m older than 40? Please respond with Y or N.').toUpperCase();
//   console.log(userName + ' thinks that Sooz is/is not older than 40? ' + soozsAge);

//   if (soozsAge === 'Y') {
//     alert('Yes I\'m older than 40. How could you have known?! ;) ');
//     scoreCounter++;
//     console.log(userName + ' now has a total score of ' + scoreCounter);
//   }
//   else if (soozsAge === 'N') {
//     alert('Thank you, I am flattered. Your check is in the mail!');
//     scoreCounter;
//     console.log(userName + ' now has a total score of ' + scoreCounter);
//   }
//   else {
//     alert('Please enter Y or N for future questions! You got this one wrong. I am over 40 and I\'m sure you would never guess, right? ;) Now, let\'s move on to the next question, ' + userName + '.');
//     scoreCounter;
//     console.log(userName + ' thinks Sooz is/is not older than 40? ' + soozsAge);
//     console.log(userName + ' now has a total score of ' + scoreCounter);
//   }
// }

// //Questions about activities
// function soozKnit (){
//   var soozKnit = prompt('Do I like to knit? Please respond with Y or N.').toUpperCase();
//   console.log(userName + ' thinks that Sooz does/does not like to knit? ' + soozKnit);

//   if (soozKnit === 'Y') {
//     alert('You\'re right! I do like to knit. And no, I won\'t make your friend something. I\'m busy!');
//     scoreCounter++;
//     console.log(userName + ' now has a total score of ' + scoreCounter);
//   }
//   else if (soozKnit === 'N') {
//     alert('Nope! See the pictures on the page. I\'m pretty addicted to knitting and many fibery pursuits!');
//     scoreCounter;
//     console.log(userName + ' now has a total score of ' + scoreCounter);
//   }
//   else {
//     alert('Please enter Y or N for questions. Come on ' + userName + ', we\'ve talked about this. You know better by now! And yes, I like to knit, but no knit things for you! Let\'s move on to the next question.');
//     scoreCounter;
//     console.log(userName + ' now has a total score of ' + scoreCounter);
//   }
// }

// function soozMovies (){
//   var soozMovies = prompt('Do I like to go to movies? Please responed with Y or N.').toUpperCase();
//   console.log(userName + ' thinks that Sooz does/does not like movies? ' + soozMovies);

//   if (soozMovies === 'Y') {
//     alert('Yep! I am a big movie fan and do like to go to movies. My favorite places in town to see movies are Cinerama and Sundace because you can reserve seats. What about you?');
//     scoreCounter++;
//     console.log(userName + ' now has a total score of ' + scoreCounter);
//   }
//   else if (soozMovies === 'N') {
//     alert('Nope! You\'ll see me at the movies with friends in several pictures on the page. Of course, Netflix and chill with movies is great too.');
//     scoreCounter;
//     console.log(userName + ' now has a total score of ' + scoreCounter);
//   }
//   else {
//     alert('Still not using "y" or "n"? You\'re no fun! I do like to go to movies a lot. Now, please ' + userName + ', follow the instructions and answer questions as noted moving forward.');
//     scoreCounter;
//     console.log(userName + ' now has a total score of ' + scoreCounter);
//   }
// }

// function soozMuseums (){
//   var soozMuseums = prompt('Do I like to go to museums? Please responed with Y or N.').toUpperCase();
//   console.log(userName + ' thinks that Sooz does/does not like to go to museums? ' + soozMuseums);

//   if (soozMuseums === 'Y') {
//     alert('Yes I do like to go to museums. The most recent exhibit I went to was the Andrew Wyeth at the Seattle Art Museum (SAM).');
//     scoreCounter++;
//     console.log(userName + ' now has a total score of ' + scoreCounter);
//   }
//   else if (soozMuseums === 'N') {
//     alert('Nope! You\'ll see pictures from the Seattle Art Museum (SAM) in a couple pictures on the page. Fun fact - I went to the Kusama exhibit (see the dots in one photo?) at the SAM 6 times!');
//     scoreCounter;
//     console.log(userName + ' now has a total score of ' + scoreCounter);
//   }
//   else {
//     alert('I\'m not telling if you\'re still not going to use the Y or N to answer!');
//     scoreCounter;
//     console.log(userName + ' now has a total score of ' + scoreCounter);
//   }
// }

// //Question about number of pets

// function soozPets (){
//   var answerCounter = 0;
//   while (answerCounter < 3 && answerFlag === false) {
//     var soozPets = parseInt(prompt('How many pets do you think I have? Guess a whole number between 0 and 5.'));
//     console.log(userName + ' guessed ' + soozPets + '.');
//     if (soozPets === 2) {
//       answerFlag = true;
//       scoreCounter++;
//       alert('That is correct! I have two cats. You can see a picture of them on the page, in fact.');
//       console.log(userName + ' now has a total score of ' + scoreCounter);
//     }
//     else {
//       alert('No. That is incorrect. You have only have 4 chances guess. Try again, if you can!');
//       answerCounter++;
//       scoreCounter;
//       console.log(userName + ' now has a total score of ' + scoreCounter);
//     }
//   }
// }

// // //ARRAYS- collections, store more than one value in a variable as an array, data structure
// //Guess name a third cat for sooz

// function guessCatName () {
//   var answerCounter = 1;
//   var arrayofCatNames = ['suzuki', 'buell', 'yamaha', 'kawasaki', 'honda', 'triumph','aprillia', 'benelli'];
//   var answerFlag = false;

//   while (answerCounter < 7 && answerFlag === false) {
//     var guessCatName = prompt('Sooz\'s cats are called Harley and Ducati. Can you guess what a third cat might be named? You\'ll get 6 tries and then I\'ll just tell you what the options for a 3rd cat\'s name might be. So, what\'s your guess?').toLowerCase ();
//     console.log(userName + ' guessed ' + guessCatName + ' on the ' + answerCounter + ' st/nd/rd try');

//     // check if the user guessed one of the names and if so, tell the user and stop the loop
//     for (var i = 0; i < arrayofCatNames.length; i++) {
//       if (guessCatName === arrayofCatNames[i]){
//         answerFlag = true;
//       }
//     }
//     if (answerFlag === true){
//       alert('That is correct, ' + userName + '. I would probably name a third cat ' + guessCatName + '. The full list of name options includes Suzuki, Buell, Yamaha, Kawasaki, Honda, Aprillia and Benelli. You got that in ' + answerCounter + ' tries.');
//       scoreCounter++;
//       console.log(userName + ' guessed ' + guessCatName + ' which is on the list of cat names.');
//       console.log(userName + ' has guessed ' + answerCounter + ' times.');
//       console.log(userName + ' currently has a total score of ' + scoreCounter);
//     }
//     if (answerFlag === false){
//       scoreCounter;
//       i++;
//       alert('Nope. Guess again...Here\'s a hint: both Harley and Ducati are not just my cat\'s names but also names of motorcycle brands. Remember you only have a total of six guesses! And you\'ve already guessed ' + answerCounter + ' times.');
//       answerCounter++;

//       console.log(userName + ' guessed ' + guessCatName + ' which is incorrect.');
//       console.log(userName + ' has guessed ' + answerCounter + ' times.');
//       console.log(userName + ' currently has a total score of ' + scoreCounter);
//     }
//     if (answerFlag === false && answerCounter === 6){
//       alert ('Thanks for trying, ' + userName + '. The full list of name options includes Suzuki, Buell, Yamaha, Kawasaki, Honda, Aprillia and Benelli.');
//     }
//   }
// }

checkLocalStorage();

// soozLocation();
// soozsAge();
// soozKnit();
// soozMovies();
// soozMuseums();
// soozPets();
// guessCatName();

// //end of quiz message to user
// if (scoreCounter <= 6 && answerFlag === true || answerFlag === false) {
//   alert('Thanks for playing along, ' + userName + '. You got ' + scoreCounter + ' points out of 7 in this quiz.');
//   console.log(userName + ' now has a total score of ' + scoreCounter);
// }

// if (scoreCounter === 7 && answerFlag === true) {
//   alert('Thanks for playing, ' + userName + '. You got a perfect ' + scoreCounter + ' out of 7. You must know me really well. Good job!');
// }