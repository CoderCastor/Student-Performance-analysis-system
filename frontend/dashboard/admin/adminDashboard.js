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


