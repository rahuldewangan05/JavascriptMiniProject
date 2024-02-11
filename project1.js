let current="x";
let count=0;
let arr=["#btn1","#btn2","#btn3","#btn4","#btn5","#btn6","#btn7","#btn8","#btn9"];
let win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [6,4,2],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]
let game=document.querySelectorAll(".btn");
function check_pattern(game){
    for(let i=0;i<win.length;i++){    
            if(game[win[i][0]].textContent===game[win[i][1]].textContent && game[win[i][1]].textContent===game[win[i][2]].textContent){
                return true;
            }
    }
    return false;
}
let final;
let ins=document.createElement("h3");
let element=document.querySelector("body");
let funct=(a,count)=>{
        let buttonText = current==="x"? "x":"o";
        document.querySelector(a).textContent=buttonText;
        if(check_pattern(game)){
            ins.innerText="Congratulation "+buttonText+" You Won!!";
            element.after(ins);
            final=count;
        };

} 
let handle = (a)=>{
    document.querySelector(a).addEventListener("click",()=>{
        count++;
        if(count===9){
            alert("match draw");
            location.reload();
        }
        if(count>final){
            location.reload();
        }
        funct(a,count);
        current= count%2!==0? "o":"x";
    });
}
for(let i=0;i<arr.length;i++){
        handle(arr[i]);
}
