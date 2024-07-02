// Q1. length of string.
// let str = prompt("Enter the string : ");
// count = 0;

//     while(str[count] != null){
//         count++;
//         }
// document.write("The lenght of string is : " ,count );


// Q2 reverse  a string...
// let str = prompt("Enter a string : ");
// let splitStr = str.split("");
// let rev = splitStr.reverse();
// let joinstr = rev.join("");
// console.log(joinstr);


// Q3. split a word by *
// let str = prompt("Enter a string : ");
// let sptstr = str.split("");
// let str1 = sptstr.join("*");
// console.log(str1);



// Q5. take 1st and last name of user and show full name.
// let fName = prompt("Enter your firstname : ");
// let lName = prompt("Enter your lastname : ");
// document.write(fName+" "+lName)


// Q6. to display background color different
// let btn = document.querySelector("button");
// let box = document.querySelector(".box");
// let color = "white";
// btn.addEventListener("click", function(){
//     if(color=="white"){
//         box.style.backgroundColor = "yellow";
//         color = "yellow";
//     }
//     else if(color =="yellow"){
//         box.style.backgroundColor = "blue";
//         color = "blue";
//     }
//     else if(color =="blue"){
//         box.style.backgroundColor = "red";
//         color = "red";
//     }
//     else if(color =="red"){
//         box.style.backgroundColor = "green";
//         color = "green"
//     }
//     else if(color =="green"){
//         box.style.backgroundColor = "tan";
//         color = "tan"
//     }
//     else if(color =="tan"){
//         box.style.backgroundColor = "crimson";
//         color = "crimson";
//     }
//     else if(color =="crimson"){
//         box.style.backgroundColor = "yellow";
//         color = "yellow";
//     }
// })


// Q7.sliding a box...
// let t = 0;
// let left = 0;
// let topbtn = document.querySelectorAll("button")[0];
// let bottombtn = document.querySelectorAll("button")[1];
// let leftbtn = document.querySelectorAll("button")[2];
// let rightbtn = document.querySelectorAll("button")[3];
// let box = document.querySelector(".box");

// topbtn.addEventListener("click",()=>{
//     t = t-10;
//     box.style.top=`${t}px`
// })
// bottombtn.addEventListener("click",()=>{
//     t = t+10;
//     box.style.top=`${t}px`
// })
// leftbtn.addEventListener("click",()=>{
//     left = left+10;
//     box.style.left=`${left}px`
// })
// rightbtn.addEventListener("click",()=>{
//     left = left-10;
//     box.style.left=`${left}px`
// })






