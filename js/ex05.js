//S = 1 + 1*2 + 1*2*3 + 1*2*3*4 + ... + 1*2*3*4*...*n  

var total = 0;
var n = 6;
for (var i = 1; i<=n; i++){
    var subTotal = 1;
    for (var j = 1; j<=i; j++){
        subTotal *= j;
    }

    total += subTotal;
}

console.log('Total = '+total);