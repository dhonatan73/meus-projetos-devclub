const displayResult = document.getElementById("display-result");
    let currentValue = "";
    let operation = "";
    let storedValue = 0;

    const cliquei = (value) => {
      if (value === "+" || value === "-" || value === "X" || value === "÷") {
        operation = value;
        storedValue = parseFloat(currentValue);
        currentValue = ""
     } else {
       currentValue += value;
     }
     
     displayResult.innerHTML = currentValue

    };

    const eraceC = (eraseC) => {
      currentValue = currentValue.slice(0, -1);
      displayResult.innerHTML = currentValue;
    };

    const eraceCE = (eraceCE) =>{
    currentValue = "";
    displayResult.innerHTML = currentValue;
    }

    const calcular = () => {
      if (operation === "+"){
        const result = storedValue + parseFloat(currentValue);
        displayResult.innerHTML = result
        currentValue = result.toString();
        operation = "";
        storedValue = 0;
      } else if(operation === "-"){
        const result = storedValue - parseFloat(currentValue);
        displayResult.innerHTML = result
        currentValue = result.toString();
        operation = "";
        storedValue = 0;
     } else if(operation === "X"){
        const result = storedValue * parseFloat(currentValue);
        displayResult.innerHTML = result
        currentValue = result.toString();
        operation = "";
        storedValue = 0;
    } else if(operation === "÷"){
        const result = storedValue / parseFloat(currentValue);
        displayResult.innerHTML = result
        currentValue = result.toString();
        operation = "";
        storedValue = 0;
    }
  }