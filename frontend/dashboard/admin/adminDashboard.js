var hamberBergerClick = document.querySelector(".hambergerIcon");
var hamBerger = document.querySelector(".hamBerger");
var leftArrow = document.querySelector(".leftArrow");
var leftBar = document.querySelector(".leftBar");
var labelNone = document.querySelectorAll("h3");
var leftBarOpen;
hamberBergerClick.addEventListener("click", function () {
  leftBarOpen = true;
  hamBerger.style.backgroundColor = "white";
  leftBar.classList.add("jsWidth");
  labelNone.forEach(function (lable) {
    lable.classList.add("labelNone");
  });
  hamberBergerClick.classList.add("hamBergerNone");
  hamBerger.classList.add("jsWidth");
  leftArrow.classList.add("leftArrowShow");
});
leftArrow.addEventListener("click", function () {
  leftBar.classList.toggle("jsWidth");
  labelNone.forEach(function (lable) {
    lable.classList.toggle("labelNone");
  });
  hamBerger.classList.toggle("jsWidth");
  leftArrow.classList.toggle("leftArrowShow");
  hamberBergerClick.classList.toggle("hamBergerNone");
  hamBerger.style.backgroundColor = "#024f5b22";
});

//entry
let addButton = document.querySelectorAll(".addButton");
let currentButton = document.querySelectorAll(".current");
let futureButton = document.querySelectorAll(".future");
let arroIcon = document.querySelectorAll(".arroIcon");

addButton.forEach(button => {
    button.addEventListener("click",(e)=>{

        e.preventDefault();

        const entryDiv = button.parentElement;

        const future = entryDiv.querySelectorAll(".future");
        const current = entryDiv.querySelectorAll(".current");

        if(future){
            future.forEach(btn => {
                btn.classList.remove('displayNone');
            })
            current.forEach(btn => {
                btn.classList.add('displayNone');
            })
        }
    })
})

arroIcon.forEach(button => {
    button.addEventListener("click",(e)=>{

        e.preventDefault();

        const entryDiv = button.parentElement;

        const future = entryDiv.querySelectorAll(".future");
        const current = entryDiv.querySelectorAll(".current");

        if(future){
            future.forEach(btn => {
                btn.classList.add('displayNone');
            })
            current.forEach(btn => {
                btn.classList.remove('displayNone');
            })
        }
    })
})


//all options
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");
let option5 = document.querySelector("#option5");
let option6 = document.querySelector("#option6");
let option7 = document.querySelector("#option7");

// all sections
let section1 = document.querySelector(".section1");

let section2 = document.querySelector(".section2");
let subSection2 = document.querySelector(".addClassModal");

let section3 = document.querySelector(".section3");
let section4 = document.querySelector(".section4");
let section5 = document.querySelector(".section5");
let section6 = document.querySelector(".section6");
let section7 = document.querySelector(".section7");

section2.classList.add('class');
option1.classList.add('lablelogoRed');

option1.addEventListener("click",()=>{

    option1.classList.add('lablelogoRed');
    option2.classList.remove('lablelogoRed');

    section1.classList.remove('class');
    section2.classList.add('class');  
})

option2.addEventListener("click",()=>{

    option1.classList.remove('lablelogoRed');
    option2.classList.add('lablelogoRed');

    section1.classList.add('class');
    section2.classList.remove('class');
})

let addClass =document.querySelector(".addClass");
let goBack = document.querySelector("#addClassButton2");

subSection2.style.display="none";
addClass.addEventListener("click",()=>{
    subSection2.style.display="flex";
    addClass.style.backgroundColor="black";
})
goBack.addEventListener("click",()=>{
    subSection2.style.display="none";
    addClass.style.backgroundColor="red";
})
