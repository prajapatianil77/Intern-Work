let box = document.querySelector(".box");
let hr= 12;
let min = 0;
let sec =0;

setInterval(()=>{
    sec++
    if(sec==60){
        sec=0;
        min++;
        if(min==60){
            min=0;
            hr++;
            if(hr==13){
                hr=1;
            }
        }
    }
    box.innerHTML = `<h1>${hr} : ${min} : ${sec} </h1>`

},1000)