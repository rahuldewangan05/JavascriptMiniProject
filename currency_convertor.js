let dropdown=document.querySelectorAll(".dropdown")
let base_url="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/"
for(i of dropdown){
    for(j in countryList){
        let opt=document.createElement("option");
        opt.innerText=j;
        i.append(opt);
    }
}
let btn=document.querySelector("#btn");
async function update_currency(fromCurr,toCurr){
    let url=`${base_url}${fromCurr}/${toCurr}.json`
    let response=await fetch(url);
    let data= await response.json();
    let input=document.querySelector("#inputBox").value;
    document.querySelector("#res").textContent=`${input} ${fromCurr} = ${input*data[toCurr]} ${toCurr}`;
}

btn.addEventListener("click",(evt)=>{
    let fromCurr=document.querySelector("#fromCurrency").value.toLowerCase();
    let toCurr=document.querySelector("#toCurrency").value.toLowerCase();
    update_currency(fromCurr,toCurr);
})