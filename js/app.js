//help catch errors right away with 'use strict' BEST PRACTICE
'use strict';

//Greeting
var userName = prompt('Hi , what is your name?');
console.log('The user\'s name is ' + userName);

alert('Hi ' + userName + '! Get ready to take a quiz about me, Sooz.');

var scoreCounter = 0;

// Question about location
var soozLocation = prompt ('Does Sooz live by the space needle? Please respond with Y or N.').toUpperCase ();
console.log (userName +' thinks Sooz does/does not live by the space needle? ' + soozLocation);

if  (soozLocation === 'Y') {
    alert('Yep! You\'re right! If you\'re ever in the neighborhood, drop me a line to see if we can meet up.');
    scoreCounter++;
    console.log (userName +' got '+ scoreCounter +' point for this answer');
    } 
else if (soozLocation === 'N') {
    alert('Surprise! I do live just a couple blocks from the Space Needle. If you\'re ever in the neighborhood, drop me a line to see if we can meet up.');
    scoreCounter === 0;
    console.log (userName +' got '+ scoreCounter +' point for this answer');
    }
else  
    {
    alert ('Please enter Y or N! For future questions. Sooz does live by the space needle!');
    console.log (userName +' thinks Sooz does/does not live by the space needle? ' + soozLocation);
    scoreCounter = 0;
     }
    
//Question about age
var soozsAge = prompt('Do you think I\'m older than 40? Please respond with Y or N.').toUpperCase();
console.log(userName + ' thinks that Sooz is/is not older than 40? ' +soozsAge);
    
if (soozsAge === 'Y' ){
    alert('Yes I\'m older than 40.');
    scoreCounter++;
    answerCounter = 0;
    console.log (userName + ' now has a total score of '+ scoreCounter);
    } 
else if (soozsAge === 'N') {
    alert('Thank you, I am flattered.');
    scoreCounter++;
    answerCounter === 0;
    console.log (userName + ' now has a total score of '+ scoreCounter);
    }
else {
    alert('Please enter Y or N!');
    answerCounter ++; 
    scoreCounter;
    console.log (userName +' thinks Sooz is/is not older than 40? ' + soozsAge);
    alert ('You can try again a few more times, then we\'ll move on');
    }
    


//Questions about activities
var soozKnit = prompt('Do I like to knit? Please respond with Y or N.').toUpperCase();
console.log(userName +' thinks that Sooz does/does not like to knit? ' + soozKnit);

if (soozKnit === 'Y') {
    alert('Yes I do like to knit!');
    scoreCounter ++;
    console.log (userName + ' now has a total score of '+ scoreCounter);
}
 else if (soozKnit === 'N') {
    alert('Nope! See the pictures below.');
    scoreCounter;
    console.log (userName +' now has a total score of ' + scoreCounter)
}
 else {
    alert('Please enter Y or N!');
}

var soozMovies = prompt('Do I like to go to movies? Please responed with Y or N.').toUpperCase();
console.log(userName +' thinks that Sooz does/does not like movies? '+ soozMovies);

if (soozMovies === 'Y') {
    alert('Yes I do like to go to movies.');
}
 else if (soozMovies === 'N') {
    alert('Nope! See the pictures below.');
}
 else {
    alert('Please enter Y or N!');
}

var soozMuseums = prompt('Do I like to go to museums? Please responed with Y or N.').toUpperCase();
console.log(userName + ' thinks that Sooz does/does not like to go to museums? ' + soozMuseums);

if (soozMovies === 'Y') {
    alert('Yes I do like to go to museums.');
}
 else if (soozMovies === 'N') {
    alert('Nope! See the pictures below.');
}
 else {
    alert('Please enter Y or N!');
}


//ARRAYS- collections, store more than one value in a variable as an array, data structure
//name a third cat for sooz - didn't work yet. 
//var arrayofCatNames = ['Suzuki', 'Buell', 'Yamaha'];
// var catNames = prompt('Sooz\'s cats are called Harley and Ducati. Pick a number, 0 - 2 to see what a third cat might be named');
// console.log('User picked ' + catNames);
// if (catNames === 0) {
//     alert('Sooz would name her third cat ' + arrayofCatNames[0]);
// }
// else if (catNames === 1) {
//     alert('Sooz would name her third cat ' + arrayofCaNames[1]);
// }
// else if (catNames === 2) {
//     alert('Sooz would name her third cat ' + arrayofCatNames[2]);
// }
// else {
//     alert('Please pick only a whole number from 0 to 2');
// }

//  //Question about number of pets
 var flag = false;
 var counter = 0;

 while  (counter <5 && flag === false) {
        var pets = parseInt(prompt('How many pets do you think I have? Guess a whole number between 0 and 5.'));
        console.log(userName + ' guessed ' + pets + '.');

     if ( pets === 2 ){
        alert('That is correct!');
        flag = true;
        }
        else {
        alert('No. That is incorrect. You have only have 5 chances guess. Try again, if you can!');
        counter++;
        }
    }   


    alert ('Thanks for playing along, '+ userName + '!');