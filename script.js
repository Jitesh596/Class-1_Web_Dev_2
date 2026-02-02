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






// const handleSubmit = (event) => {
//     event.preventdefault()
//     console.log("Form Submitted")
// }

// const form = document.querySelector("form")
// form.addEventListener("submit", handleSubmit)





// const btn = document.querySelector("button")
// const div = document.querySelector(".container")
// const div2 = document.querySelector("outer")

// btn .addEventListener("click", function (){console.log("button")}, true)




// debugger
// console.log(a)
// // console.log(b)

// var a = 78     // stored in global scope
// let b = 45     // stored in script scope

// console.log(a)
// console.log(b)


// function print(){
//     let c = 45
//     console.log(c)
//     console.log("Inside fn")
// }

// print()


// function first(){
//     Second()
// }

// function Second(){
//     third()
// }

// function third(){
//     console.trace()
// }
// first()








// console.log(a)
// console.log(b)
// console.log(c)

// var a = 345
// let b = 465



// let total = 100
// function calculator(){
//     console.log(total)
//     let total = 100
// }
// calculator() 




// console.log("First step")                                 //Asynchronouus Code
// setTimeout(() => {
//     console.log("After 2 sec")
// }, 2000);                                                 //2000 = 2 milliseconds
// console.log("Second step")



// setTimeout(() => {
//     alert("ALERT! This is after 3 seconds")
// }, 3*1000);   




// const timerid = setInterval(() => {
//         console.log("HELLO ! Students")                         // Repeats every 1 seconds      
// }, 1000);

// setTimeout(() => {
//     clearInterval(timerid)                                 // Stops after 10 seconds
// }, 10*1000);




// let count = 1
// const timer = setInterval(() => {
//     console.log("Count : ", count)
//     count += 1
// }, 1000)

// setTimeout(() => {
//     clearInterval(timer)
// }, 10*1000)                                                   





// // console.log("First step")                                 //Asynchronomus Code
// const timer = setTimeout(() => {
//     console.log("After 2 sec")
// }, 2000);
// clearTimeout(timer)                                          //2000 = 2 milliseconds
// // console.log("Second step")




// function print(){                                    //callback function
//     console.log("Hello Students")
// }

// function greet(num){                                 //higher order function
//     console.log("Welcome to the class")
//     setTimeout(() => {
//         console.log("Inside setTimeout")
//         let firstname = "Jitesh"
//         num(firstname)
//     }, 2000);
// }

// greet(print)







// console.log("Starting Homework .......");

// setTimeout(() => {
//     console.log("Homework Done!");
//     console.log("Starting Dinner .......");

//     setTimeout(() => {
//         console.log("Dinner Done!")
//         console.log("Getting ready to go out .......");

//         setTimeout(() => {
//             console.log("Going to playground !")
//     }, 1000);  //after dinner

//     }, 1500);  //dinner time

// }, 2000);  //homework time







function finishHomework(callback) {
  console.log("Starting homework...");
  setTimeout(() => {
    console.log("Homework done!");
    callback();
  }, 2000);
}

function eatDinner(callback) {
  console.log("Starting dinner...");
  setTimeout(() => {
    console.log("Dinner done!");
    callback();
  }, 1500);
}

function goToPlayground() {
  console.log("Going to the playground!");
}

// Chained in steps, but cleaner
finishHomework(() => {
  eatDinner(() => {
    goToPlayground();
  });
});









