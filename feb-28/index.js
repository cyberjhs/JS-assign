function user_ip() {
    var a = prompt("Enter a number");
    if (isNaN(a)) {
        alert("Not a number");
    } else {
        fizzbuzz(a);
    }
}

function fizzbuzz(a) {
    for(var i = 1; i<=a; i++) {
        if(i%3==0 && i%5==0) {
            document.write("FizzBuzz");
        } else if (i%3==0) {
            document.write("Fizz");
        } else if (i%5==0) {
            document.write("Buzz");
        } else {
            document.write(i);
        }
    }
}