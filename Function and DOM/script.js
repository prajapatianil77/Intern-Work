
// Q1.Reverse the number.

// let n = prompt("Enter a no. to reverse : ");
// let rev=0;
// while(n!=0){
//    let r= n%10;
//     rev = 10*rev+r;
//     n = parseInt(n/10);
    
// }
// console.log(rev);

let btn1 = document.querySelector("button");

function square(){
    let no = prompt("Enter a no.");
    document.write("Square of entered no. is : ",no*no);
}

function table(){
    let no = prompt("Enter a no.");
    for(let i = 1;i<=10;i++){
        document.write(no , " * " , i , " = " , no*i);
        document.write("<br>")
    }
}

function cube(){
    let no = prompt("Enter a no.");
    document.write("Cube of entered no. is : ",no*no*no);
}



