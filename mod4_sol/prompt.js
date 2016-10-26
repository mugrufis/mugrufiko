
var x = function(){
var person = prompt("Write your name please.");
if (person != null) {
    if (person.toLowerCase().charAt(0)
 == "j") {
    console.log("Goodbye " + person)
  } else {
    console.log("Hello " + person)
  }
}
}