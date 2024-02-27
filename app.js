let buttons = document.querySelectorAll(".but");
let resetButton = document.querySelector(".reset");
let operatorButton = document.querySelectorAll(".operators");
let res = document.querySelector(".text");

resetButton.addEventListener("click", ()=>{
    res.value = "";
    buttons.forEach(button => {
        button.disabled = false;
    });
    operatorButton.forEach(button => {
        button.disabled = false;
    });
})

buttons.forEach(buttons =>{
    buttons.addEventListener('click', ()=>{
        console.log(`You have clicked ${buttons.value}`);
        appendToScreen(buttons.value);
    })
})

operatorButton.forEach(operatorButton =>{
    operatorButton.addEventListener('click', ()=>{
        console.log(`You have clicked ${operatorButton.value}`)
        appendToScreen(operatorButton.value);
    })
})

let appendToScreen = (input)=>{
    res.value += input;

}
let calculate = ()=>{
    try{
        res.value = eval(res.value);
    }
    catch(err){
        res.value = "SyntaxError";
        console.log(err);
        buttons.forEach(button => {
            button.disabled = true;
        });
        operatorButton.forEach(button => {
            button.disabled = true;
        });
       
       
    }
    

}

document.addEventListener("keydown", keyboardInputHandler);

function keyboardInputHandler(e) {
    // to fix the default behavior of browser,
    // enter and backspace were causing undesired behavior when some key was already in focus.
    e.preventDefault();
    //grabbing the liveScreen
  
    //numbers
    if (e.key === "0") {
      res.value += "0";
    } else if (e.key === "1") {
      res.value += "1";
    } else if (e.key === "2") {
      res.value += "2";
    } else if (e.key === "3") {
      res.value += "3";
    } else if (e.key === "4") {
      res.value += "4";
    } else if (e.key === "5") {
      res.value += "5";
    } else if (e.key === "6") {
      res.value += "6";
    } else if (e.key === "7") {
      res.value += "7";
    } else if (e.key === "7") {
      res.value += "7";
    } else if (e.key === "8") {
      res.value += "8";
    } else if (e.key === "9") {
      res.value += "9";
    }
  
    //operators
    if (e.key === "+") {
      res.value += "+";
    } else if (e.key === "-") {
      res.value += "-";
    } else if (e.key === "*") {
      res.value += "*";
    } else if (e.key === "/") {
      res.value += "/";
    }
  
    //decimal key
    if (e.key === ".") {
      res.value += ".";
    }
  
    //press enter to see result
    if (e.key === "Enter") {
      calculate();
    }
  
    //backspace for removing the last input
    if (e.key === "Backspace") {
      const resultInput = res.value;
      //remove the last element in the string
      res.value = resultInput.substring(0, res.value.length - 1);
    }
  }
  