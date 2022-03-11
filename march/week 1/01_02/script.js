function add() {
    var N1 = document.getElementById("num1");
    var number1 = N1.value;
    var N2 = document.getElementById("num2");
    var number2 = N2.value;
    var result = document.getElementById("result");
    result.innerText = parseInt(number1) + parseInt(number2);
}