let sheep = +prompt("Qo'ylar sonini kiriting")
while (isNaN(sheep) || sheep==0) {
    sheep = +prompt("Siz son kiritmadingiz. Iltimos, son kiriting")
}
let sum = ""
for (let i = 0; i < sheep; i++) {
    if (i==0) {
        sum = sum + (i+1) + "ta qo'y..."
    } else{
        sum = sum + (i+1) + "ta qo'ylar..."
    }
    
}
console.log(sum);
sum = "";

