import "./style.css";
import "./assets/img/4geeks.ico";

function makeAnExcuse() {
  const excuseArgumentsObject = {
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
  let newExcuse = "";
  for (const key in excuseArgumentsObject) {
    let randomPosition = Math.floor(
      Math.random() * excuseArgumentsObject[key].length
    );
    newExcuse += excuseArgumentsObject[key][randomPosition] + " ";
  }
  document.getElementById("excuse").innerHTML = newExcuse;
}

window.onload = function() {
  makeAnExcuse();
};
