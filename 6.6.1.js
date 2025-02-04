const ltr = 'Довод';
    let rtl = '';
    for (let i = ltr.length - 1; i >= 0; i -= 1){
        rtl += ltr[i];
    }
if (rtl.toLowerCase() === ltr.toLowerCase()){
    console.log (`Слово ${ltr} является палиндромом`);
}
else{
    console.log (`Слово ${ltr} не является палиндромом`);
}
