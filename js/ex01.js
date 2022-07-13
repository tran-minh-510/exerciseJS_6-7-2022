document.write('<table width=100% border=1px>')
document.write('<tr>')
    for(k=1;k<=10;k++){
        document.write(`<th>Bảng cửu chương ${k}</th>`)
    }
    document.write('</tr>')
for(i=1;i<=10;i++){
    document.write('<tr>')
    for(j=1;j<=10;j++){
        document.write(`<th>${j} x ${i} = ${i*j} </th>`)
    }
    document.write('</tr>')
}
document.write('</table>')
