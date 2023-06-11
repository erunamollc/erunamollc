var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/anonymous-logo-mini.png') {
      myImage.setAttribute ('src','images/illuminat.png');
    } else {
      myImage.setAttribute ('src','images/anonymous-logo-mini.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Пожалуйста станьте анонимусом.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Анонимы это круто, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Анонимы это круто, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }
  