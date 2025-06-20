/* I create turn to ativate the while */
let turn = true;

/* I create a function to validate the name */
function nameValidator(name) {
  while (name === null || name.trim() === " " || !isNaN(name)) {
    console.error("Invalid name entered. Please enter a valid name.");
    name = prompt("Please enter your name:");
    return name;
  }
}
/* I create a funtion to validate age */
function ageValidator(age) {
  while (isNaN(age) || age <= 0) {
    console.error(
      "Invalid age entered. Please enter a valid number greater than 0."
    );
    age = prompt("Please enter your age:");
    age = parseInt(age);
    return age;
  }
}
/* Here I ask the name and age of the user and print a short message based on his age */
while (turn) {
  let name = nameValidator(prompt("Please enter your name:"));

  let age = ageValidator(prompt("Please enter your age:"));

  age = parseInt(age);
    if (age < 18) {
    alert(`Hello ${name}, you are a minor, keep learning.`);
  } else {
    alert(
      `Hello ${name}, you are an adult, stay alert of the oportunities of the programmer world.`
    );
  }
/* Here I ask to the user if he wants to continue in the program */
  let continueResponse = prompt("Do you want to continue? (yes/no)");
  if (continueResponse !== "yes") {
    console.log("Exiting the program. Goodbye!");
    alert("Exiting the program. Goodbye!");
    turn = false;
  }
}
