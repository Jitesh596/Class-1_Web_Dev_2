// let obj ={
//     Name : "Jitesh Kumar",
//     Phone : "70857934758",
//     Address : "NUH",
// }


// let obj_2={
//     Name : "Ravi Kumar",
//     Phone : "70858934758",
//     Address : "Nuh",
// }

// obj.Name = "Bob"
// console.log(obj.Name)




// const para = document.getElementsByClassName("para")
// para[0].textContent = "This is Updated para 1"
// para[1].style.color = "aqua"
// para[2].style.color = "pink"
// console.log(para)




// const para = document.querySelector("#para")
// para.textContent = "This is Updated para 1"
// para.style.color = "aqua"
// para.style.color = "pink"
// console.log(para)




// const para = document.getElementsByClassName("para")
// para[0].textContent = "This is Updated para 1"
// para[1].style.color = "aqua"
// console.log(para)


// const para2 = document.querySelectorAll(".para")
// para2[0].textContent = "This is Updated para 1"
// para2[1].style.color = "green"
// console.log(para2)
// para2.forEach((ele) => console.log(ele.textContent))




// const para = document.querySelectorAll(".para")
// para[0].textContent = "This is Updated para 1"
// para[1].style.color = "aqua"
// para[1].innerHTML = "<div><strong>Hello</strong> World</div>"
// console.log(para) 


// const button = document.querySelector("button")
// button.classList.add("btn")
// button.classList.remove("btn")
// button.classList.toggle("btn")

// function message(){
//     alert("You Have click the button")
// }
// button.addEventListener("click", message)
// button.addEventListener("mouseover", message)
// button.removeEventListener("click", message)






// const button = document.querySelector("#btn")
// const button2 = document.querySelector("#button")
// function message(event){
//     alert("You Have click the button")
// }
// button.addEventListener("click", message)
// button2.addEventListener("click", function(){
//     button.removeEventListener("click", message)
// })




// const btn = document.querySelector("#btn")
// btn.addEventListener("keydown", function(event){
//     console.log(event.key)
// })

// btn.addEventListener("keyup", function(event){
//     console.log(event.key)
// })






const handleSubmit = (event) => {
    event.preventdefault()
    console.log("Form Submitted")
}

const form = document.querySelector("form")
form.addEventListener("submit", handleSubmit)