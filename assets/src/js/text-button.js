const button =document.querySelectorAll(".text-currency button")

window.addEventListener("resize",()=>{
    
   button.forEach((item)=>{
    if(window.innerWidth<768){
        item.textContent="Zobrazit"
    }
   })
})
