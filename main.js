function sayHello() {
    console.log('SUP BRUH');
}

function addX() {
    x++;
}

function sayX(){
    console.log(x);
}

function evenOrOdd() {
    var input = document.getElementById('number');
    console.log(input.value + 2);

    var y = input.value;
    
    console.log(y + 2);
    
    if(y % 2 === 0) {
        console.log('Even');
    } else if(y % 2 === 1) {
        console.log('Odd');
    } else {
        console.log('Not a number');
    }
}

var x = 0;
/*
if(x > 12) {
    console.log(x);
} else {
    console.log('Sorry, ' + x + ' is too small...');
}

if(x > 15) {    
    for(var i = 0; i < x; i++) {
        if(i % 2 === 0) {
            console.log(i);
        } else {
            console.log('ODD NUMBER')
        }
    }
}
*/
