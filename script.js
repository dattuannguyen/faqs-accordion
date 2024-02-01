
const faqs = document.querySelectorAll(".question-and-answer")
let icon = document.querySelectorAll(".icon")

// faqs.forEach(faqs =>{
//     faqs.addEventListener("click",()=>{
//         // faqs.classList.toggle("active")
//         // console.log(icon)
//         // icon.src='./assets/images/icon-minus.svg'
//         // icon.classlist.toggle("minus")
//         toggle(faqs);
//         console.log(faqs);
//         console.log(icon[2]);
//     })
// })
//
// const toggle = (faqs) =>{
//     faqs.classList.toggle("active");
//     // icon.classlist.toggle("minus");
// }


for (let i=0 ; i< faqs.length;i++){
    faqs[i].addEventListener("click",()=>{
        faqs[i].classList.toggle("active");
        icon[i].classList.toggle("minus")
    })
}