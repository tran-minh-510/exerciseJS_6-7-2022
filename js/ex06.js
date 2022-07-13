var n = 10;

var isPrime = function(number){
    var check = true;

    if (number > 1){
        for (var index = 2; index < number; index++){
            if (number % index === 0){
                check = false;
            }
        }
        
    }else{
        check = false;
    }

    return check;
}

document.write('Các số nguyên tố là: ')
for (var index = 1; index <= n; index++){
    if (isPrime(index)){
        document.write(index + '&nbsp')
    }
}
