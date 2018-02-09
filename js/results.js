'use strict';

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
checkLocalStorage();
