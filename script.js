// (function(){
//     let counter = 0;
//     const decrement = () => {
//         counter --;
//         updateCounter();
//     };

//     const increment = () => {
//         counter ++;
//         updateCounter();
//     };

//     const updateCounter = () => {
//         document.getElementById("counter").innerHTML = counter ;
//     };

//     document.getElementById("increment").addEventListener("click",increment);
//     document.getElementById("decrement").addEventListener("click",decrement);
// })();

// console.log(document.querySelector('h1'));
// console.log(document.querySelector('h1').parentNode);
// console.log(document.querySelector('h1').nodeName);
// console.log(document.querySelector('h1').nodeType);
// console.log(document.querySelector('h1').childNodes[1].childNodes[0].nodeValue);
// // const h1 = document.querySelector('h1').childNodes[0].nodeValue;

// console.log(document.querySelector('h1').childNodes.length);
// console.log(document.querySelector('h1').nodeName);
// console.log(document.querySelector('h1').nodeType);
// console.log(document.querySelector('h1').innerText);

// let img = (document.getElementById('img'));
// let target = img.getAttribute('alt');
// console.log(target);

// const container = document.getElementById('container');
// const elm = document.createElement('h2');
// elm.innerHTML = " Hello World!";
// elm.style.color = 'Blue';

// // container.appendChild(elm);

// container.insertBefore(elm,para);
// container.removeChild(elm);

// console.log(window.location.reload);
// console.log(window.location.reload);
// console.log(window.location.reload);

// console.log( window.open);


// console.log()
//  var windowSpecs =;
//  var faqPage = window.open(windowSpecs );

// function greetWorld() {
//     try {
//       var greeting = "Hello world!";
//       alert(greeting);
//     } catch (err) {
//       alert(err);
//     }
//   }


function checkPassword() {
    try {
      var pass = document.getElementById("f1").value;
      if (pass.length < 8) {
        throw "Please enter at least 8 characters.";
      }
      if (pass.indexOf(" ") !== -1) {
        throw "No spaces in the password, please.";
      }
      var numberSomewhere = false;
      for (var i = 0; i < pass.length; i++) {
        if (isNaN(pass(i, i + 1)) === false) {
          numberSomewhere = true;
          break;
        }
      }
      if (numberSomewhere === false) {
        throw "Include at least 1 number.";
      }
    } catch (err) {
      alert(err);
    }
  }
  
  