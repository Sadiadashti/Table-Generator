// for(let i = 1;i<=100; i--){
//     document.writeln(i,')<br> ');

let btn = document.getElementById('generate');
btn.addEventListener('click' ,() => {
    let table = Number(document.getElementById('table') .value);
    
    let range = Number(document.getElementById('range') .value);
    for(let i = 1;i<=range;i++){
        document.write(table , "X" , i , "=" , table*i , '<br>')
    }
})