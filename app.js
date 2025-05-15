const BASE_URL ="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v3/currencies";//for currency exchange

const dropdowns=document.querySelectorAll(".dropdown select");
const btn=document.querySelector(" form button");
const fromcurr=document.querySelector(".from select");
const tocurr=document.querySelector(".to select");

for(let select of dropdowns){
    for(currCode in countryList){
        const option=document.createElement("option");
        option.value=currCode;
        option.innerText=currCode;
         if(select.name==="from" && currCode==="USD"){
             option.selected="selected";
         }
         else if(select.name==="to" && currCode==="INR"){
             option.selected="selected";
         }
        select.append(option);
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    });
}

const updateFlag=(element)=>{
   let currCode=element.value;
   let countryCode=countryList[currCode];
   let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;//for flag exchange
  let img= element.parentElement.querySelector("img");
    img.src=newSrc;
};

btn.addEventListener("click",async (evt)=>{
  evt.preventDefault();//it means don't occours any work;
  let amount=document.querySelector("form input");
  let amtValue=amount.value;
  if(amtValue==="" || amtValue<1){
     amtValue=1;
     amount.value="1";
  }
  //console.log(fromcurr.value,tocurr.value);
  //const URL=`${BASE_URL}/${fromcurr.value}/${tocurr.value}.json`;
  let response=await fetch(BASE_URL);
 let data=await response.json();
  console.log(data);
});