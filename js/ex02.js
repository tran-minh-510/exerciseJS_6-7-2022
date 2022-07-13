document.write('<table>');
for(i=1;i<=8;i++){
    document.write('<tr>');
    for(j=1;j<=8;j++){
        document.write(`<th></th>`);
    }
    document.write('</tr>');
};
document.write('</table>');

// Cách 2
var tableHtml = `<table width="100%" border="1" cellpadding="0" cellspacing="0">`;
for (var row = 1; row <= 8; row++){
    tableHtml+=`<tr>`;
    
    for (var col = 1; col <= 8; col++){
        var total = col + row;
        if (total % 2 !== 0){
            tableHtml += `<td class="black"></td>`;
        }else{
            tableHtml += `<td></td>`;
        }
       
    }
    
    tableHtml+=`</tr>`;
}

tableHtml+= '</table>';


document.write(tableHtml);