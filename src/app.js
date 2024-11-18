/* eslint-disable */
//import "bootstrap";
import "./style.css";

//import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function makeAnExcuse() {
  const excuseObject = {
    who: ["The dog", "My grandma", "The mailman", "My bird"],
    action: ["ate", "peed", "crushed", "broke"],
    what: ["my homework", "my phone", "the car"],
    when: [
      "before the class",
      "when I was sleeping",
      "while I was exercising",
      "during my lunch",
      "while I was praying"
    ]
  };
  let excuseParamsArray = ["who", "action", "what", "when"];
  let newExcuse = "";
  for (let i = 0; i < excuseParamsArray.length; i++) {
    let randomPosition = Math.floor(Math.random() * 3);
    newExcuse += excuseObject[excuseParamsArray[i]][randomPosition] + " ";
  }
  document.getElementById("excuse").innerHTML = newExcuse;
}

window.onload = function() {
  makeAnExcuse();
};
