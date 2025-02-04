let x = +prompt('любое число');
let arr = [];
for (let i=0;; i+=1){
    if (i===x+1){
        break
    }
    arr.push(i)
}
console.log(arr)
