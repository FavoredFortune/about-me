//help catch errors right away with 'use strict' BEST PRACTICE
    'use strict';

    //Greeting
    var userName = prompt('Hi , what is your name?');
    console.log('The user\'s name is ' + userName);
    alert('Hi ' + userName + "!");
    
    //Question about number of pets
    var pets = parseInt(prompt('How many pets do you think I have?'));
    console.log('userName' + ' guessed ' + 'pets');
    
    if (pets === 2) {
        alert('That is correct!');
    }
    else {
        alert('No. That is incorrect.');
    }
    
    //Question about age
    var soozsAge = prompt('Do you think I\'m older than 40? Please respond with Y or N').toUpperCase();
    console.log('The user thinks that Sooz is ' + soozsAge + 'than 40.');
    
    if (soozsAge === 'Y') {
        alert('Yes I\'m older than 40.');
    }
    else if (soozsAge === 'N') {
        alert('Thank you, I am flattered.');
    }
    else {
        alert('Please enter Y or N!');
    }
    
    //Questions about activities
    var soozKnit = prompt('Do I like to knit? Please respond with Y or N.').toUpperCase();
    console.log('the user thinks that Sooz ' + soozKnit + ' to knit.');
    
    if (soozKnit === 'Y') {
        alert('Yes I do like to knit!');
    }
    else if (soozKnit === 'N') {
        alert('Nope! See the pictures below.');
    }
    else {
        alert('Please enter Y or N!');
    }
    
    var soozMovies = prompt('Do I like to go to movies? Please responed with Y or N.').toUpperCase();
    console.log('The user thinks that Sooz ' + soozMovies + ' movies');
    
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
    console.log('The user thinks that Sooz ' + soozMuseums + ' movies');
    
    if (soozMovies === 'Y') {
        alert('Yes I do like to go to museums.');
    }
    else if (soozMovies === 'N') {
        alert('Nope! See the pictures below.');
    }
    else {
        alert('Please enter Y or N!');
    }
    alert ('Thanks for playing along, '+ userName + '!');

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