
const faqs = document.querySelectorAll(".question-and-answer")
let icon = document.querySelectorAll(".icon")


for (let i=0 ; i< faqs.length;i++){
    faqs[i].addEventListener("click",()=>{
        faqs[i].classList.toggle("active");
        icon[i].classList.toggle("minus")
    })
}