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







// function finishHomework(callback) {
//   console.log("Starting homework...");
//   setTimeout(() => {
//     console.log("Homework done!");
//     callback();
//   }, 2000);
// }

// function eatDinner(callback) {
//   console.log("Starting dinner...");
//   setTimeout(() => {
//     console.log("Dinner done!");
//     callback();
//   }, 1500);
// }

// function goToPlayground() {
//   console.log("Going to the playground!");
// }

// // Chained in steps, but cleaner
// finishHomework(() => {
//   eatDinner(() => {
//     goToPlayground();
//   });
// });


// const input = document.querySelector("#task")
// const btn = document.querySelector(".btn")
// const list = document.querySelector(".list")  


// addEventListener('click',(e) => {                                        // Add Event Listener to Button
//     e.preventDefault()
//     if(input.value === ""){                                            // Check if input is empty
//         alert("Please Enter a Task")
//         return
//     }
//     const li = document.createElement("li")                              // Create List Item
//     const deleteButton = document.createElement("button")                // Create Delete Button
   
//     deleteButton.innerText = "Delete"                                    // Set Delete Button Text
//     li.innerText = input.value

//     li.appendChild(deleteButton)                                          // Append Delete Button to List Item
//     lists.appendChild(li)                                                 // Append List Item to List

//     deleteButton.addEventListener('click', () => {                        // Add Event Listener to Delete Button
//         list.removeChild(li)
//     })
//     input.value = ""           // Clear the input field after adding the task
// })








// const p = new Promise(function(resolve, reject){                        // Promise Constructor
//     // resolve()
//     // reject()                                                        // Promise States : Pending, Resolved, Rejected
//     setTimeout(() => {                                                  
//         let done = true;
//         if (done){
//             resolve({name:"Jitesh", age: 19})
//         }else{
//             reject("Network Issue")
//         }
//     }, 5000);
// })
// // console.log(p)

// p.then((data) => {
//     console.log("Resolved", data)
// }).catch((err) => {
//     console.log("Rejected", err)
// }).finally(() => {
//     console.log("Finally Block")
// })




// function dohomework() {                                                         // Promise Chaining
//     const p = new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             let done = true;

//             if (done) {
//                 console.log("Homework Is Done");
//                 resolve("Homework Completed");
//             } else {
//                 reject("Homework Not Done");
//             }
//         }, 2000);
//     });

//     return p;
// }


// function eatDinner() {
//     const p = new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             let done = true;   
//             if (done) {
//                 console.log("Dinner Is Done");
//                 resolve("Dinner Completed");
//             } else {
//                 reject("Dinner Not Done");
//             }  
//         }, 2000);
//     });

//     return p;
// }


// function playoutside() {
//     const p = new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             let done = true;   
//             if (done) {
//                 console.log("Playing Outside");
//                 resolve("Playtime Completed");
//             } else {
//                 reject("Couldn't Play Outside");
//             }  
//         }, 2000);
//     }); 
//     return p;
// }   


// dohomework().then((data) => {
//     console.log(data);
//     return eatDinner();
// }).then((data) => {
//     console.log(data);
//     return playoutside();
// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// }).finally(() => {
//     console.log("Go To Sleep");
// });






// console.log("First Line")                                            // Synchronous Code (Event Loop and Microtask Queue)
// setTimeout(() => {
//     console.log("Inside Timeout")
// }, 0);
// const p = new Promise((resolve, reject) => {
//     resolve()
// })
// p.then(() => {
//     console.log("Inside Promise")
// }).catch(() => {
//     console.log("Inside catch")
// })
// console.log("Last Line")


// const p2 = new Promise((resolve, reject) => {
//     resolve()
// })
// p2.then(() => {
//     console.log("Inside Promise")
// }).catch(() => {
//     console.log("Inside catch")
// })
// console.log("Last Line")


// const p3 = new Promise((resolve, reject) => {
//     resolve()
// })
// p3.then(() => {
//     console.log("Inside Promise")
// }).catch(() => {
//     console.log("Inside catch")
// })
// console.log("Last Line")






// function orderFood() {                                                       // Promise Chaining
//     return new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             console.log("Food ordered");
//             resolve("Food ordered");
//         }, 2000);
//     });
// }

// function prepareFood() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             console.log("Food prepared");
//             resolve("Food prepared");
//         }, 1000);
//     });
// }

// function deliverFood() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             console.log("Food Delivered");
//             resolve("Food Delivered");
//         }, 1000);
//     });
// }

// async function order(){
//     const data = await orderFood()
//     console.log(data)
//     await prepareFood()
//     await deliverFood() 
// }

// order()

// // orderFood().then((data) => {                                   //use await and async instead of then and catch for better readability
// //     console.log(data);
// //     return prepareFood();
// // }).then((data) => {
// //     console.log(data);
// //     return deliverFood();
// // }).then((data) => {
// //     console.log(data);
// // }).catch((err) => {
// //     console.log(err);
// // });






console.log("First Line")  
try{
    // //let sample = 45
    // console.log(sample)   
    let age = 19
    if(age < 18){
        throw new Error("You are not eligible to vote")
    }
} catch(error){
    console.log(error)
} finally {
    console.log("Finally block executed");
}
console.log("Last Line")