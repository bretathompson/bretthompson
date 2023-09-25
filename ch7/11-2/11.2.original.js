

const numOfTemps = parseInt(prompt("Enter the number of temperatures you would like to average:"));

// Function to calculate and display temperatures and average
function aveTemp(temperatures) {
   // Display individual temperatures
   document.write("There are " + temperatures.length  + " Temperatures to average: ");

   for (let i = 0; i < temperatures.length; i++) {
      document.write(temperatures[i]);
   }
 
   // Calculate and display the average
   const sum = temperatures.reduce((acc, val) => acc + val, 0);
   const average = sum / temperatures.length;
   document.write(" The average of your Temperatures is: ", average);
 }
 
 
 if (isNaN(numOfTemps)) {
   document.write("Invalid input. Please enter a valid number.");
 } else {
   // Initialize an array to hold temperatures
   const temperatures = [];
 
   // Prompt the user to enter temperatures and populate the array
   for (let i = 0; i < numOfTemps; i++) {
     const temperature = parseFloat(prompt(`Enter temperature ${i + 1}: `));
 
     if (isNaN(temperature)) {
      document.write("Invalid input. Please enter a valid number.");
       break;
     }
 
     temperatures.push(temperature);
   }
 
   // Check if any temperatures were entered before calculating and displaying
   if (temperatures.length > 0) {
      aveTemp(temperatures);
   } else {
      document.write("No valid temperatures entered.");
   }
 }
 


//  Objectives:
// 1. Declare and call a function
// 2. Prompt a user for input and use the information for output
// 3. Create and populate an array
// 4. Calculate the average of an array of numbers 

// Task: Create code that asks the user to enter the number of temperatures they desire to enter and then calculate the average of those temperatures.
// 1. Use a function to print the temperatures and average to the page
// 2. Prompt the user to enter a number representing how many temperature the user intends to enter
// 3. Prompt the user to enter the temperatures (one at a time)
// 4. Use an array to hold the temperatures
// 5. Populate the array using a loop
// 6. Use another loop to display each temperature in the array to the screen on its own line
// 7.Calculate the average of the temperatures and display it on the page on a new line
// HINT: You may need to use the parseInt( ) method to assure the input is recognized as an integer instead of a string


