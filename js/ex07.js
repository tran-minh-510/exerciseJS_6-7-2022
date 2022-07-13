var line = 5;
var html = '';
var count = 0;
for (var i = 1; i<=line; i++){
    for (var j = 1; j <= i; j++){
        //count++;
        html+=`${++count} `;
    }

    html+='<br/>';
}

document.write(html);