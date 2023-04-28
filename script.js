function convert() {
    // get input values
    const inputQuantity = document.getElementById("input-quantity").value;
    const inputUnit = document.getElementById("input-unit").value;
    const outputUnit = document.getElementById("output-unit").value;
  
    // convert to meters
    let meters;
    switch (inputUnit) {
      case "meter":
        meters = inputQuantity;
        break;
      case "centimeter":
        meters = inputQuantity / 100;
        break;
      case "kilometer":
        meters = inputQuantity * 1000;
        break;
    }
  
    // convert to output unit
    let outputQuantity;
    switch (outputUnit) {
      case "meter":
        outputQuantity = meters;
        break;
      case "centimeter":
        outputQuantity = meters * 100;
        break;
      case "kilometer":
        outputQuantity = meters / 1000;
        break;
    }
  
    // display output
    const outputQuantityElement = document.getElementById("output-quantity");
    outputQuantityElement.textContent = outputQuantity;
  }
  