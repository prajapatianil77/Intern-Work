let startbtn = document.querySelectorAll("button")[0]
let stopbtn = document.querySelectorAll("button")[1]
let resetbtn = document.querySelectorAll("button")[2]
let box = document.querySelector(".box")

let sec = 0;
let min = 0;

let interval=0;
startbtn.addEventListener('click',function(){
    if(!interval){
   interval=setInterval(()=>{
            sec++
            if(sec==60){
                sec=0;
                min++
              
            }
             if(min==60){
                min=0;
            
            }
           
            box.innerHTML =  `<h1>${min} : ${sec}</h1>`
        },1000);
    }
})
stopbtn.addEventListener('click',()=>{
    clearInterval(interval)
    interval=0
})
resetbtn.addEventListener('click',()=>{
    
    min=0;
    sec=0;
    box.innerHTML =  `<h1>${min} : ${sec}</h1>`
    
})
