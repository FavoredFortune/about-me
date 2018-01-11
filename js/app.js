//help catch errors right away with 'use strict' BEST PRACTICE
            'use strict';

            //Greeting
            var userName = prompt('Hi , what is your name?');
            console.log('The user\'s name is ' + userName);
            alert('Hi ' + userName + '! Get ready to take a quiz about me, Sooz.');
            var scoreCounter = 0;

            // Question about location
            var soozLocation = prompt('Does Sooz live by the space needle? Please respond with Y or N.').toUpperCase();
            console.log(userName + ' thinks Sooz does/does not live by the space needle? ' + soozLocation);
            if (soozLocation === 'Y') {
                alert('Yep! You\'re right! If you\'re ever in the neighborhood, drop me a line to see if we can meet up.');
                scoreCounter++;
                console.log(userName + ' got ' + scoreCounter + ' point for this answer');
            }
            else if (soozLocation === 'N') {
                alert('Surprise! I do live just a couple blocks from the Space Needle. If you\'re ever in the neighborhood, drop me a line to see if we can meet up.');
                scoreCounter === 0;
                console.log(userName + ' got ' + scoreCounter + ' point for this answer');
            }
            else {
                alert('Please enter Y or N for future questions! You got this one wrong. I do live by the space needle! That\s okay ' + userName + ', give the next question a try.');
                console.log(userName + ' thinks Sooz does/does not live by the space needle? ' + soozLocation);
                scoreCounter = 0;
            }

            //Question about age
            var soozsAge = prompt('Do you think I\'m older than 40? Please respond with Y or N.').toUpperCase();
            console.log(userName + ' thinks that Sooz is/is not older than 40? ' + soozsAge);
            
            if (soozsAge === 'Y') {
                alert('Yes I\'m older than 40.');
                scoreCounter++;
                console.log(userName + ' now has a total score of ' + scoreCounter);
            }
            else if (soozsAge === 'N') {
                alert('Thank you, I am flattered.');
                scoreCounter;
                console.log(userName + ' now has a total score of ' + scoreCounter);
            }
            else {
                alert('Please enter Y or N for future questions! You got this one wrong. I am over 40. Let\'s move on to the next question, ' + userName + '.');
                scoreCounter;
                console.log(userName + ' thinks Sooz is/is not older than 40? ' + soozsAge);
                console.log(userName + ' now has a total score of ' + scoreCounter);
            }
            
            //Questions about activities
            var soozKnit = prompt('Do I like to knit? Please respond with Y or N.').toUpperCase();
            console.log(userName + ' thinks that Sooz does/does not like to knit? ' + soozKnit);
            
            if (soozKnit === 'Y') {
                alert('You\'re right! I do like to knit.');
                scoreCounter++;
                console.log(userName + ' now has a total score of ' + scoreCounter);
            }
            else if (soozKnit === 'N') {
                alert('Nope! See the pictures on the page.');
                scoreCounter;
                console.log(userName + ' now has a total score of ' + scoreCounter);
            }
            else {
                alert('Please enter Y or N for questions. Come on ' + userName + ', we\'ve talked about this. You know better by now! And yes, I like to knit. Let\'s move on to the next question.');
                scoreCounter;
                console.log(userName + ' now has a total score of ' + scoreCounter);
            }

            var soozMovies = prompt('Do I like to go to movies? Please responed with Y or N.').toUpperCase();
            console.log(userName + ' thinks that Sooz does/does not like movies? ' + soozMovies);
            
            if (soozMovies === 'Y') {
                alert('Yep! I am a big movie fan and do like to go to movies.');
                scoreCounter++;
                console.log(userName + ' now has a total score of ' + scoreCounter);
            }
            else if (soozMovies === 'N') {
                alert('Nope! See the pictures on the page.');
                scoreCounter;
                console.log(userName + ' now has a total score of ' + scoreCounter);
            }
            else {
                alert('Still not using "y" or "n"? You\re no fun! I do like to go to movies a lot. Now, please ' + userName + ', follow the instructions and answer questions as noted moving forward. Thanks!');
                scoreCounter;
                console.log(userName + ' now has a total score of ' + scoreCounter);
            }

            var soozMuseums = prompt('Do I like to go to museums? Please responed with Y or N.').toUpperCase();
            console.log(userName + ' thinks that Sooz does/does not like to go to museums? ' + soozMuseums);
            
            if (soozMuseums === 'Y') {
                alert('Yes I do like to go to museums.');
                scoreCounter++;
                console.log(userName + ' now has a total score of ' + scoreCounter);
            }
            else if (soozMuseums === 'N') {
                alert('Nope! See the pictures below.');
                scoreCounter;
                console.log(userName + ' now has a total score of ' + scoreCounter);
            }
            else {
                alert('I\'m not telling if you\'re not going to use the Y or N to answer!');
                scoreCounter;
                console.log(userName + ' now has a total score of ' + scoreCounter);
            }
            
            //Question about number of pets
            var flag = false;
            var answerCounter = 0;
            while (answerCounter < 5 && flag === false) {
                var pets = parseInt(prompt('How many pets do you think I have? Guess a whole number between 0 and 5.'));
                console.log(userName + ' guessed ' + pets + '.');
                if (pets === 2) {
                    alert('That is correct! I have two cats. You can see a picture of them on the page, in fact.');
                    flag = true;
                    scoreCounter++;
                    console.log(userName + ' now has a total score of ' + scoreCounter);
                }
                else {
                    alert('No. That is incorrect. You have only have 5 chances guess. Try again, if you can!');
                    answerCounter++;
                    scoreCounter;
                    console.log(userName + ' now has a total score of ' + scoreCounter);
                }
            }
            //ARRAYS- collections, store more than one value in a variable as an array, data structure
            //Guess name a third cat for sooz 
            var answerCounter = 1;
            var answerFlag2 = false;
            var arrayofCatNames = ['suzuki', 'buell', 'yamaha', 'kawasaki', 'honda', 'aprillia', 'benelli'];
           
            while (answerCounter < arrayofCatNames.length && answerFlag2 === false) {
                var i = 0; 
                var guessCatName = prompt('Sooz\'s cats are called Harley and Ducati. Can you guess what a third cat might be named? You\'ll get 6 tries and then I\'ll just tell you what the options for a 3rd cat\'s name might be. So, what\'s your guess?').toLowerCase();
                console.log(userName + ' guessed ' + guessCatName + ' on the ' + answerCounter + ' st/nd/rd try');

                // check if the user guessed one of the names and if so, tell the user and stop the loop
                if (guessCatName === arrayofCatNames[i]) {
                    alert('That is correct, ' + userName + '. I would probably name a third cat ' + guessCatName + '. The full list of name options includes Suzuki, Buell, Yamaha, Kawasaki, Honda, Aprillia and Benelli.');
                    scoreCounter++;
                    answerFlag2 === true;
                    answerCounter === 0;
                    i;
                    console.log(userName + ' now has a total score of ' + scoreCounter);
                    if (scoreCounter <= 6 && answerCounter >= 7 && answerFlag2 === true) {
                        alert('Thanks for playing along, ' + userName + '. You got ' + scoreCounter + ' points out of 7 in this quiz.');
                    }
                    else if (scoreCounter === 7 && answerFlag2 === true) {
                        alert('Thanks for playing, ' + userName + '. You got a perfect ' + scoreCounter + ' out of 7. You must know me really well. Good job!');
                    }
                }
            
                // if not, keep checking
                else {
                        alert('Nope. Guess again...Here\'s a hint: both Harley and Ducati are not just my cat\'s names but also names of motorcycle brands. Remember you only have a total of six guesses!');
                        scoreCounter;
                        answerCounter++;
                        i++;
                        answerFlag2 === false;
                        console.log(userName + ' guessed ' + guessCatName + ' which is incorrect.');
                        console.log(userName + ' currently has a total score of ' + scoreCounter);
                        console.log(userName + ' has guessed ' + answerCounter + ' times.');
                    }
                    
                //and when they run out of 6 guesses
                if (answerCounter > 7 && answerFlag2 === true) {
                        alert('Sorry,' + userName + 'You didn\'t guess correctly. The options for a name for a third cat are all popular motorcycle brands! The full list of name options includes Suzuki, Buell, Yamaha, Kawasaki, Honda, Aprillia and Benelli.');
                        if (scoreCounter <7){}
                        alert('Thanks for playing along, ' + userName + '. You got ' + scoreCounter + ' points out of 7 in this quiz.');
                        scoreCounter;
                        console.log(userName + ' currently has a total score of ' + scoreCounter);
                        }
                        else if (scoreCounter === 7 && answerFlag2 === true) {
                            alert('Thanks for playing, ' + userName + '. You got a perfect ' + scoreCounter + ' out of 7. You must know me really well. Good job!');
                    }
                }