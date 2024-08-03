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
let section3 = document.querySelector(".section3");
let section4 = document.querySelector(".section4");
let section5 = document.querySelector(".section5");
let section6 = document.querySelector(".section6");
let section7 = document.querySelector(".section7");



section2.classList.add("class");
option1.classList.add("lablelogoRed");

option1.addEventListener("click", () => {
  option1.classList.add("lablelogoRed");
  option2.classList.remove("lablelogoRed");

  section1.classList.remove("class");
  section2.classList.add("class");
});

option2.addEventListener("click", () => {
  option1.classList.remove("lablelogoRed");
  option2.classList.add("lablelogoRed");

  section1.classList.add("class");
  section2.classList.remove("class");
});

//Modals addClassModal
let subSection2 = document.querySelector(".addClassModal");
let addClass = document.querySelector(".addClass");
let goBack = document.querySelector("#addClassButton2");

subSection2.style.display = "none";
addClass.addEventListener("click", () => {
  subSection2.style.display = "flex";
  addClass.style.backgroundColor = "black";
});
goBack.addEventListener("click", () => {
  subSection2.style.display = "none";
  addClass.style.backgroundColor = "red";
});



//entry
let addButton = document.querySelectorAll(".addButton");
let currentButton = document.querySelectorAll(".current");
let futureButton = document.querySelectorAll(".future");
let arroIcon = document.querySelectorAll(".arroIcon");

//add Student Modal body
let addStudentModal = document.querySelector("#addStudentModal")
let addStudentModalButtonGoBack = document.querySelector("#addStudentModalButtonGoBack")
addStudentModal.style.display="none";
console.log(addStudentModal);

//add subject modal body
let addSubjectModal = document.querySelector("#addSubjectModal")
let addSubjectModalButtonBack = document.querySelector("#addSubjectModalButtonBack")
addSubjectModal.style.display="none";
// addSubjectModal.style.display="flex";
console.log(addSubjectModal);



//shift to addsubject and addstudents buttons
addButton.forEach((button) => {  
    button.addEventListener("click", (e) => {
        e.preventDefault();       
        const entryDiv = button.parentElement;
        const future = entryDiv.querySelectorAll(".future");
        const current = entryDiv.querySelectorAll(".current");      
    if (future) {
      future.forEach((btn) => {
        btn.classList.remove("displayNone");
      });
      current.forEach((btn) => {
        btn.classList.add("displayNone");
      });
    }

    //ADD Student Modal
    const addStudentButton = entryDiv.querySelector("#addStudentButton");
        addStudentButton.addEventListener("click",()=>{
            addStudentModal.style.display="flex";
            addStudentButton.style.backgroundColor="green";
            addStudentButton.style.color="white";

        })
        addStudentModalButtonGoBack.addEventListener("click",()=>{
            addStudentModal.style.display="none";
            addStudentButton.style.backgroundColor="white";
            addStudentButton.style.color="black";
        })


    //ADD Subject Modal
    const addSubjectButton = entryDiv.querySelector("#addSubjectButton");
    console.log(addSubjectButton);
    
        addSubjectButton.addEventListener("click",()=>{
            console.log(addSubjectButton.parentElement.parentElement.id);
            
            addSubjectModal.style.display="flex";
            addSubjectButton.style.backgroundColor="green";
            addSubjectButton.style.color="white";

        })
        addSubjectModalButtonBack.addEventListener("click",()=>{
            addSubjectModal.style.display="none"
            addSubjectButton.style.backgroundColor="white";
            addSubjectButton.style.color="black";
        })


    
  });
});

arroIcon.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const entryDiv = button.parentElement;
    const future = entryDiv.querySelectorAll(".future");
    const current = entryDiv.querySelectorAll(".current");
    if (future) {
      future.forEach((btn) => {
        btn.classList.add("displayNone");
      });
      current.forEach((btn) => {
        btn.classList.remove("displayNone");
      });
    }
  });
});





