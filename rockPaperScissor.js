function getRandomNumber(){
    let randomNum = Math.floor(Math.random() * 3) + 1;
    return randomNum;
}

let stone=document.querySelector("#c1")
let paper=document.querySelector("#c2")
let scissor=document.querySelector("#c3")

let you=0;
let computer=0;



stone.addEventListener("click",()=>{
    let num=getRandomNumber();
    console.log(num);
    let txt=document.querySelector("#result");
    txt.style.color="black";
    if(num==1){     
        txt.innerText="draw!!";
        txt.style.backgroundColor="yellow";
    }
    else if(num==2){
        txt.innerText="you lost";
        txt.style.backgroundColor="red";
        computer++;
        document.querySelector("#computer").innerText="Computer : "+computer;

    }
    else{
        txt.innerText="you win";
        txt.style.backgroundColor="green";
        you++;
        youD=document.querySelector("#player").innerText="You : "+you;
    }

})
paper.addEventListener("click",()=>{
    let num=getRandomNumber();
    let txt=document.querySelector("#result");
    txt.style.color="black";
    if(num==1){     
        txt.innerText="draw!!";
        txt.style.backgroundColor="yellow";
    }
    else if(num==2){
        txt.innerText="you lost";
        txt.style.backgroundColor="red";
        computer++;
        document.querySelector("#computer").innerText="Computer : "+computer;

    }
    else{
        txt.innerText="you win";
        txt.style.backgroundColor="green";
        you++;
        youD=document.querySelector("#player").innerText="You : "+you;
    }

})
scissor.addEventListener("click",()=>{
    let num=getRandomNumber();
    let txt=document.querySelector("#result");
    txt.style.color="black";
    if(num==1){     
        txt.innerText="draw!!";
        txt.style.backgroundColor="yellow";
    }
    else if(num==2){
        txt.innerText="you lost";
        txt.style.backgroundColor="red";
        computer++;
        document.querySelector("#computer").innerText="Computer : "+computer;

    }
    else{
        txt.innerText="you win";
        txt.style.backgroundColor="green";
        you++;
        youD=document.querySelector("#player").innerText="You : "+you;
    }

})

