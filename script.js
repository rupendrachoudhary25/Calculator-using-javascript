let operator = "";

function setOperator(op) {
  operator = op;
}

function myFunction() {
  let x = document.getElementById("firstNumber").value;
  let y = document.getElementById("secondNumber").value;
  let z;

  if (operator == "+") {
    z = Number(x) + Number(y);
  } else if (operator == "/") {
    z = Number(x) / Number(y);
  } else if (operator == "*") {
    z = Number(x) * Number(y);
  } else if (operator == "-") {
    z = Number(x) - Number(y);
  } else {
    z = "Error";
  }

  document.getElementById("demo").innerHTML = z;
}

function clearFields() {
  document.getElementById("firstNumber").value = "";
  document.getElementById("secondNumber").value = "";
  document.getElementById("demo").innerHTML = "";
  operator = "";
}
