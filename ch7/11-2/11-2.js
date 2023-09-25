

const numOfTemps = parseInt(prompt("Enter the number of temperatures you would like to average:"));

 if (numOfTemps > 0) {
   const temperatures = [];

   for (let i = 0; i < numOfTemps; i++) {
     const temperature = parseInt(prompt(`Enter temperature ${i + 1}: `)); 
     temperatures.push(temperature);
   }

  aveTemp(temperatures);
 }
 
function aveTemp(temperatures) {
  document.write("There are " + temperatures.length  + " Temperatures to average: ");
  document.write('<br>')

  for (let i = 0; i < temperatures.length; i++) {
     document.write(temperatures[i]);
     document.write('<br>')
  }    
  const sum = temperatures.reduce((acc, val) => acc + val, 0);
  const average = sum / temperatures.length;
  document.write(" The average of your Temperatures is: ", average);
}


